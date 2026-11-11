#!/usr/bin/env node
/**
 * Autotask MCP identity proxy
 * ===========================
 * Sits in front of autotask-mcp (gateway mode) and adds per-user identity.
 *
 *   Copilot agent ──Bearer token (work sign-in)──▶ THIS PROXY ──▶ autotask-mcp ──▶ Autotask
 *
 * For every MCP request the proxy:
 *   1. Validates the Entra ID bearer token (JWKS / RS256: signature, tenant,
 *      issuer, audience, scope, expiry) — this is "who is asking".
 *   2. Resolves the user's work email (UPN) to their Autotask resource ID:
 *      override map → in-memory cache → live Autotask lookup by email.
 *   3. Forwards the request to autotask-mcp with:
 *        X-API-Key / X-API-Secret / X-Integration-Code   (the shared keycard)
 *        X-Impersonation-Resource-Id                     (the sticky note)
 *        X-Gateway-S2S                                   (HMAC proof it's us)
 *
 * Unauthenticated MCP calls get the standard 401 challenge (WWW-Authenticate +
 * RFC 9728 protected-resource metadata) — the same shape CIPP's endpoint
 * presents, which is what the M365 Agents Toolkit's OAuth registration expects.
 *
 * Zero dependencies. Node 20+.
 *
 * Config (env): see .env.example
 */

import { createServer } from 'node:http';
import { createHmac, createVerify, createPublicKey } from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

// ------------------------------------------------------------------ config
function safeJson(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

const CFG = {
  port: Number(process.env.PORT || 8080),
  upstream: (process.env.UPSTREAM_URL || 'http://autotask-mcp:8080').replace(/\/+$/, ''),
  atUsername: process.env.AUTOTASK_USERNAME || '',
  atSecret: process.env.AUTOTASK_SECRET || '',
  atIntegrationCode: process.env.AUTOTASK_INTEGRATION_CODE || '',
  s2sSecret: process.env.S2S_SECRET || '',
  tenantId: process.env.TENANT_ID || '',
  audience: process.env.AUDIENCE || '', // expected token `aud` (resource app client ID)
  requiredScope: process.env.REQUIRED_SCOPE || '', // e.g. "autotask_access"
  // edge cases: {"someone@company.com": 12345} — keys normalised to lowercase
  // so a mixed-case entry still matches the lowercased UPN lookup
  overrides: Object.fromEntries(
    Object.entries(safeJson(process.env.OVERRIDE_MAP, {})).map(([k, v]) => [String(k).toLowerCase(), v])
  ),
  // CIPP-style read-only surface: reject write tools (pilot phase 1)
  readOnly: (process.env.READ_ONLY || 'false').toLowerCase() === 'true',
};

const log = (...a) => console.log(new Date().toISOString(), ...a);

function httpError(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}

// ---------------------------------------------------------- token validation
let jwksCache = null;
let jwksFetchedAt = 0;

async function getJwks() {
  if (jwksCache && Date.now() - jwksFetchedAt < 10 * 60 * 1000) return jwksCache;
  const wellKnown = `https://login.microsoftonline.com/${CFG.tenantId}/v2.0/.well-known/openid-configuration`;
  const oc = await (await fetch(wellKnown)).json();
  jwksCache = await (await fetch(oc.jwks_uri)).json();
  jwksFetchedAt = Date.now();
  return jwksCache;
}

function b64urlToJson(b64url) {
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4 === 0 ? '' : '='.repeat(4 - (b64.length % 4));
  return JSON.parse(Buffer.from(b64 + pad, 'base64').toString('utf8'));
}

/**
 * Validate an Entra ID v2 token. Returns claims (with `upn`) or throws.
 *
 * NOTE for local testing: without a real sign-in flow you can mint test
 * tokens with `az account get-access-token` / graph explorer, or point the
 * agent's dev OAuth registration at this tenant. The MCP Inspector flow
 * (used for CIPP) works here too once the resource app exists.
 */
async function validateToken(token) {
  const [h64, p64, s64] = String(token).split('.');
  if (!h64 || !p64 || !s64) throw httpError(401, 'malformed token');

  let header, claims;
  try {
    header = b64urlToJson(h64);
    claims = b64urlToJson(p64);
  } catch {
    throw httpError(401, 'malformed token');
  }
  const sig = Buffer.from(s64.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

  if (header.alg !== 'RS256') throw httpError(401, `unsupported alg ${header.alg}`);

  const jwks = await getJwks();
  const jwk = jwks.keys.find((k) => k.kid === header.kid);
  if (!jwk) throw httpError(401, 'unknown signing key (JWKS stale?)');
  const publicKey = createPublicKey({ key: jwk, format: 'jwk' });

  const ok = createVerify('RSA-SHA256').update(`${h64}.${p64}`).verify(publicKey, sig);
  if (!ok) throw httpError(401, 'bad signature');

  const now = Math.floor(Date.now() / 1000);
  if (claims.nbf && claims.nbf > now) throw httpError(401, 'token not yet valid');
  if (claims.exp && claims.exp < now) throw httpError(401, 'token expired');
  // Fail closed: when a tenant is configured, tid and iss MUST be present and match.
  if (CFG.tenantId) {
    if (!claims.tid || claims.tid !== CFG.tenantId) throw httpError(401, 'wrong tenant');
    const expectedIss = `https://login.microsoftonline.com/${CFG.tenantId}/v2.0`;
    if (!claims.iss || claims.iss !== expectedIss) throw httpError(401, 'wrong issuer');
  }
  const audiences = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
  if (CFG.audience && !audiences.includes(CFG.audience)) throw httpError(401, 'wrong audience');
  if (CFG.requiredScope && !String(claims.scope || '').split(' ').includes(CFG.requiredScope)) {
    throw httpError(401, 'missing required scope');
  }

  const upn = claims.upn || claims.preferred_username;
  if (!upn) throw httpError(401, 'token has no upn claim');
  return { ...claims, upn };
}

// ---------------------------------------------------- email → Autotask resource
let zoneUrl = null;
const resourceCache = new Map(); // upn (lowercase) → { id: number|null, at: epochMs }
const POS_TTL = 10 * 60 * 1000; // positive results: 10 min (resource IDs are stable)
const NEG_TTL = 30 * 1000; // negative results: 30 s (don't hammer Autotask for a missing user)

function cacheGet(key) {
  const e = resourceCache.get(key);
  if (!e) return undefined;
  const ttl = e.id === null ? NEG_TTL : POS_TTL;
  if (Date.now() - e.at > ttl) {
    resourceCache.delete(key);
    return undefined;
  }
  return e.id; // number, or null (a cached "not found")
}

/** Autotask zone for the shared API user (unauthenticated lookup, cached). */
async function getZoneUrl() {
  if (zoneUrl) return zoneUrl;
  const res = await fetch(
    `https://webservices.autotask.net/atservicesrest/v1.0/zoneInformation?user=${encodeURIComponent(CFG.atUsername)}`
  );
  if (!res.ok) throw httpError(502, `Autotask zone lookup failed: HTTP ${res.status}`);
  const body = await res.json();
  if (!body.url) throw httpError(502, 'Autotask zone lookup returned no url');
  zoneUrl = String(body.url).replace(/\/+$/, '');
  log(`resolved Autotask zone: ${zoneUrl}`);
  return zoneUrl;
}

/**
 * Resolve the caller's Autotask resource ID.
 * Priority: override map → in-memory cache → live Autotask lookup by email.
 */
async function resolveResourceId(upn) {
  const key = upn.toLowerCase();

  if (CFG.overrides[key] !== undefined) return CFG.overrides[key];
  const cached = cacheGet(key);
  if (cached !== undefined) {
    if (cached === null) throw httpError(403, `no Autotask resource for ${upn} (cached) — add an OVERRIDE_MAP entry or fix the resource email`);
    return cached;
  }

  const zone = await getZoneUrl();
  const res = await fetch(`${zone}/v1.0/Resources/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ApiIntegrationcode: CFG.atIntegrationCode,
      UserName: CFG.atUsername,
      Secret: CFG.atSecret,
    },
    body: JSON.stringify({
      filter: [{ op: 'eq', field: 'email', value: upn }],
      MaxRecords: 5,
    }),
  });
  if (!res.ok) throw httpError(502, `Autotask resource lookup failed: HTTP ${res.status}`);
  const body = await res.json();
  const items = body.items || [];
  // Fail closed: prefer an exact (case-insensitive) email match. Autotask `eq`
  // can be loose, so a single result is unambiguous, but multiple results with
  // no exact match is a wrong-person risk — reject rather than guess.
  const exact = items.find((r) => String(r.email || '').toLowerCase() === key);
  const match = exact || (items.length === 1 ? items[0] : null);
  if (!match || match.id === undefined) {
    resourceCache.set(key, { id: null, at: Date.now() });
    throw httpError(403, `no unambiguous Autotask resource for ${upn} (${items.length} match(es)) — add an OVERRIDE_MAP entry or fix the resource email`);
  }
  resourceCache.set(key, { id: match.id, at: Date.now() });
  log(`resolved ${upn} → Autotask resource ${match.id}${exact ? '' : ' (single loose match)'}`);
  return match.id;
}

// ------------------------------------------------- read-only tool gating
// autotask-mcp tool prefixes: search_(35) get_(22) list_(7) = read;
// create_(24) update_(12) delete_(6) + raw_request = write.
const READ_PREFIXES = ['search_', 'get_', 'list_', 'test_', 'docs_'];
const READ_EXACT = new Set(['autotask_router', 'autotask_list_categories', 'autotask_list_category_tools']);
const WRITE_EXACT = new Set(['autotask_raw_request']);

export function isWriteTool(name) {
  if (!name) return false;
  if (WRITE_EXACT.has(name)) return true;
  if (READ_EXACT.has(name)) return false;
  const bare = String(name).replace(/^autotask_/, '');
  return !READ_PREFIXES.some((p) => bare.startsWith(p));
}

/**
 * In READ_ONLY mode, inspect a parsed tools/call JSON-RPC message (or a batch
 * of them) and return the offending tool name if any is a write. Handles the
 * lazy-loading meta-tool (autotask_execute_tool carries the real tool in
 * arguments.tool) and JSON-RPC batch arrays.
 */
export function writeToolInCall(rpc) {
  if (!CFG.readOnly || !rpc) return null;
  const requests = Array.isArray(rpc) ? rpc : [rpc];
  for (const r of requests) {
    if (r?.method !== 'tools/call') continue;
    const name = r.params?.name;
    if (name === 'autotask_execute_tool') {
      const inner = r.params?.arguments?.tool;
      if (isWriteTool(inner)) return inner;
    } else if (isWriteTool(name)) {
      return name;
    }
  }
  return null;
}

// ------------------------------------------------------- docs-as-tools
// CIPP's MCP exposes SearchDocs/GetDoc over its own documentation; autotask-mcp
// has no equivalent. The proxy injects one docs tool into tools/list and
// answers tools/call for it locally, over a small markdown corpus in ./docs.
const DOCS_DIR = process.env.DOCS_DIR || fileURLToPath(new URL('./docs/', import.meta.url));
const docs = new Map(); // relative path (e.g. "entities/Tasks.md") → markdown
function loadDocs(dir, rel = '') {
  for (const f of readdirSync(dir)) {
    const full = path.join(dir, f);
    const relPath = rel ? `${rel}/${f}` : f;
    if (f.endsWith('.md')) {
      docs.set(relPath, readFileSync(full, 'utf8'));
    } else if (f !== '.git') {
      try {
        if (statSync(full).isDirectory()) loadDocs(full, relPath);
      } catch { /* ignore */ }
    }
  }
}
try {
  loadDocs(DOCS_DIR);
} catch {
  /* no docs dir — docs tools return "no docs" */
}

export const DOCS_TOOL = {
  name: 'autotask_docs_search',
  description:
    'Search the Autotask knowledge base: product concepts (tickets vs service calls vs projects, checklists, schedules, time entries), the full REST API entity reference (field names, types, relationships), and your team\'s MSP conventions. Use it when unsure about Autotask semantics BEFORE calling other tools. Returns matching doc names — pass one to autotask_docs_get for the full text.',
  inputSchema: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'What you want to know, in plain language' },
      maxResults: { type: 'integer', description: 'Number of results (default 3, max 6)' },
    },
    required: ['query'],
  },
};

export const DOCS_GET_TOOL = {
  name: 'autotask_docs_get',
  description:
    'Fetch the full text of a specific Autotask knowledge-base doc by name (a name returned by autotask_docs_search). Use it to read a complete doc — e.g. an entity\'s full field list, or a how-to guide. Names look like "Tasks", "entities/TimeEntries.md", or "autotask-core-objects.md".',
  inputSchema: {
    type: 'object',
    properties: {
      name: { type: 'string', description: 'Doc name, e.g. "Tasks" or "entities/Tasks.md"' },
    },
    required: ['name'],
  },
};

function firstSnippet(md, chars = 400) {
  const body = md.replace(/^#+\s.*\n?/, '').trim();
  return body.slice(0, chars) + (body.length > chars ? '…' : '');
}

/**
 * Resolve a doc by name. Accepts the stored key ("entities/Tasks.md"), a bare
 * entity name ("Tasks"), or a filename ("Tasks.md") and returns its markdown.
 */
export function getDoc(name) {
  if (!name) return null;
  const n = String(name).trim().replace(/^\.\//, '').replace(/\/+$/, '');
  if (docs.has(n)) return docs.get(n);
  const withMd = n.endsWith('.md') ? n : `${n}.md`;
  if (docs.has(withMd)) return docs.get(withMd);
  for (const [k, v] of docs) {
    if (k === withMd || k.endsWith(`/${withMd}`)) return v;
  }
  return null;
}

/** Tiny keyword search over the markdown corpus (no deps, no model). */
export function searchDocs(query, maxResults = 3) {
  const q = String(query).toLowerCase();
  const terms = q.split(/\W+/).filter((t) => t.length > 2);
  if (!terms.length) return [];
  // Field/schema queries want the API reference; how-to queries want the
  // curated guidance. Only boost curated docs for non-field queries.
  const isFieldQuery = /\b(field|fields|type|schema|property|column|api)\b/.test(q);
  const scored = [];
  for (const [name, content] of docs) {
    const lower = content.toLowerCase();
    let score = 0;
    for (const t of terms) {
      score += lower.split(t).length - 1;
      if (name.toLowerCase().includes(t)) score += 5;
    }
    if (score > 0) {
      if (!name.startsWith('entities/') && !isFieldQuery) score += 20;
      scored.push({ name, score, snippet: firstSnippet(content) });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, Math.min(maxResults, 6));
}

function respondDocsCall(res, rpc) {
  const args = rpc.params?.arguments || {};
  let text;
  if (rpc.params?.name === DOCS_GET_TOOL.name) {
    const doc = getDoc(args.name);
    text = doc
      ? doc.length > 24000
        ? doc.slice(0, 24000) + '\n…[truncated]'
        : doc
      : `No doc named "${args.name}". Use autotask_docs_search to find the right name.`;
    log(`docs get: "${args.name}" → ${doc ? doc.length + ' chars' : 'not found'}`);
  } else {
    const query = String(args.query || '');
    const maxResults = Number(args.maxResults || 3);
    const results = searchDocs(query, maxResults);
    text = results.length
      ? results.map((r) => `### ${r.name}\n${r.snippet}`).join('\n\n')
      : 'No matching docs found. Try different keywords, or ask the user what they mean.';
    log(`docs search: "${query}" → ${results.length} result(s)`);
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      jsonrpc: '2.0',
      id: rpc.id ?? null,
      result: { content: [{ type: 'text', text }], isError: false },
    })
  );
}

/**
 * Merge the docs tool into a tools/list response (JSON or SSE). Returns the
 * transformed body as a string, or null if nothing to merge.
 */
export async function mergeDocsToolIntoToolsList(upstream) {
  const chunks = [];
  const reader = upstream.body.getReader();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  const ct = upstream.headers.get('content-type') || '';

  const merge = (obj) => {
    if (!obj?.result?.tools) return false;
    let changed = false;
    for (const tool of [DOCS_TOOL, DOCS_GET_TOOL]) {
      if (!obj.result.tools.some((t) => t.name === tool.name)) {
        obj.result.tools.push(tool);
        changed = true;
      }
    }
    return changed;
  };

  if (ct.includes('application/json')) {
    try {
      const parsed = JSON.parse(raw);
      if (merge(parsed)) return JSON.stringify(parsed);
    } catch { /* fall through */ }
    return null;
  }
  if (ct.includes('text/event-stream')) {
    let changed = false;
    const out = raw.replace(/(data:\s*)(\{[\s\S]*?\})(\n\n)/g, (m, pre, data, post) => {
      try {
        const parsed = JSON.parse(data);
        if (merge(parsed)) {
          changed = true;
          return pre + JSON.stringify(parsed) + post;
        }
      } catch { /* not the response event */ }
      return m;
    });
    return changed ? out : null;
  }
  return null;
}

// ------------------------------------------------------------------- S2S
function s2sHeader() {
  const t = Math.floor(Date.now() / 1000);
  const v1 = createHmac('sha256', CFG.s2sSecret).update(`t=${t}`).digest('hex');
  return `t=${t},v1=${v1}`;
}

// --------------------------------------------------------------- 401 + metadata
function hostOf(req) {
  return req.headers.host || `127.0.0.1:${CFG.port}`;
}

function send401Challenge(res, req) {
  const metaUrl = `https://${hostOf(req)}/.well-known/oauth-protected-resource/mcp`;
  res.writeHead(401, {
    'Content-Type': 'application/json',
    WWWAuthenticate: `Bearer resource_metadata="${metaUrl}"${CFG.requiredScope ? `, scope="${CFG.requiredScope}"` : ''}`,
  });
  res.end(JSON.stringify({ error: 'authentication required' }));
}

function protectedResourceMetadata(req) {
  return {
    resource: `https://${hostOf(req)}/mcp`,
    authorization_servers: [`https://login.microsoftonline.com/${CFG.tenantId}/v2.0`],
    scopes_supported: CFG.requiredScope
      ? [CFG.requiredScope, 'openid', 'profile', 'offline_access']
      : [],
    bearer_methods_supported: ['header'],
  };
}

// --------------------------------------------------------------- forwarding
const MAX_BODY = 10 * 1024 * 1024; // 10 MB — MCP requests are small; cap memory
async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > MAX_BODY) throw httpError(413, 'request body too large');
    chunks.push(c);
  }
  return Buffer.concat(chunks);
}

async function handleMcp(req, res) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return send401Challenge(res, req);

  let upn;
  let resourceId;
  try {
    ({ upn } = await validateToken(token));
    resourceId = await resolveResourceId(upn);
  } catch (err) {
    const status = err.status || 500;
    log(`auth failed: ${err.message}`);
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message }));
    return;
  }

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    res.writeHead(err.status || 413, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: err.message }));
  }
  let rpc = null;
  try {
    rpc = body.length ? JSON.parse(body.toString('utf8')) : null;
  } catch {
    rpc = null;
  }

  // docs tools: answered locally, never forwarded upstream (single requests —
  // the norm; a docs call inside a batch is forwarded upstream and fails there)
  if (
    rpc?.method === 'tools/call' &&
    (rpc.params?.name === DOCS_TOOL.name || rpc.params?.name === DOCS_GET_TOOL.name)
  ) {
    return respondDocsCall(res, rpc);
  }

  const writeTool = writeToolInCall(rpc);
  if (writeTool) {
    log(`READ_ONLY: rejected write tool ${writeTool} for ${upn}`);
    res.writeHead(403, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        jsonrpc: '2.0',
        id: null,
        error: {
          code: -32003,
          message: `Read-only mode: ${writeTool} is a write operation and is not enabled for this deployment yet.`,
        },
      })
    );
    return;
  }

  const upstreamHeaders = {
    'content-type': req.headers['content-type'] || 'application/json',
    accept: req.headers.accept || 'application/json, text/event-stream',
    'x-api-key': CFG.atUsername,
    'x-api-secret': CFG.atSecret,
    'x-integration-code': CFG.atIntegrationCode,
    'x-impersonation-resource-id': String(resourceId),
    'x-gateway-s2s': s2sHeader(),
  };

  const started = Date.now();
  let upstream;
  try {
    upstream = await fetch(`${CFG.upstream}/mcp`, {
      method: req.method,
      headers: upstreamHeaders,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
    });
  } catch (err) {
    log(`upstream error: ${err.message}`);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: `upstream unreachable: ${err.message}` }));
    return;
  }

  // tools/list: inject the docs tool into the upstream response
  let merged = null;
  if (rpc?.method === 'tools/list' && upstream.status === 200) {
    merged = await mergeDocsToolIntoToolsList(upstream);
  }

  const headers = Object.fromEntries(upstream.headers.entries());
  if (merged !== null) delete headers['content-length'];
  res.writeHead(upstream.status, headers);
  log(`${req.method} /mcp user=${upn} resource=${resourceId} → ${upstream.status} (${Date.now() - started}ms)`);

  if (merged !== null) {
    res.end(merged);
  } else if (upstream.body) {
    const reader = upstream.body.getReader();
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!res.write(Buffer.from(value))) {
          await new Promise((r) => res.once('drain', r));
        }
      }
    } finally {
      res.end();
    }
  } else {
    res.end();
  }
}

// ------------------------------------------------------------------- server
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  try {
    if (url.pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(
        JSON.stringify({
          status: 'ok',
          upstream: CFG.upstream,
          lazyLoading: process.env.LAZY_LOADING || 'inherited-by-upstream',
        })
      );
    }
    if (
      url.pathname === '/.well-known/oauth-protected-resource' ||
      url.pathname === '/.well-known/oauth-protected-resource/mcp'
    ) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(protectedResourceMetadata(req)));
    }
    if (url.pathname === '/mcp') {
      return await handleMcp(req, res);
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found', endpoints: ['/mcp', '/health'] }));
  } catch (err) {
    log(`unhandled error: ${err.stack || err}`);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'internal error' }));
    } else {
      res.end();
    }
  }
});

// Only start listening when run directly (not when imported by test.mjs)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  server.listen(CFG.port, () => {
    log(`Autotask MCP identity proxy listening on :${CFG.port}`);
    log(`upstream: ${CFG.upstream}`);
    log(`tenant: ${CFG.tenantId || '(unset — tokens not tenant-checked)'}`);
    log(`audience: ${CFG.audience || '(unset — tokens not audience-checked)'}`);
    log(`required scope: ${CFG.requiredScope || '(unset — any scope accepted)'}`);
    log(`read-only: ${CFG.readOnly ? 'ON (write tools rejected)' : 'off (full surface)'}`);
    if (!CFG.s2sSecret) log('WARNING: S2S_SECRET not set — autotask-mcp will reject requests');
    if (!CFG.atUsername) log('WARNING: AUTOTASK_USERNAME not set — resource lookups will fail');
  });
}
