# Autotask MCP identity proxy

The one new component in the Autotask ↔ Copilot integration. Sits in front of
`autotask-mcp` (gateway mode) and turns a shared Autotask login into
per-user access control + attribution. Built during a placement at Concept
Data (MSP) — see the docs/ folder for the knowledge corpus the agent searches.

> No secrets in this repo: `.env.example` is a template; real values live in
> Azure Key Vault in production.

```
Copilot agent ──Bearer token (work sign-in)──▶ proxy ──▶ autotask-mcp ──▶ Autotask
                                              │
                                              • validates the Entra token (who?)
                                              • email → Autotask resource ID
                                              • adds keycard + sticky note + S2S sig
```

Zero dependencies, Node 20+, single file (`proxy.mjs`).

## Endpoints

| Path | Purpose |
|---|---|
| `POST /mcp` (+ `GET`/`DELETE` for MCP sessions) | Authenticated MCP endpoint — validates token, injects headers, streams to upstream |
| `GET /health` | Liveness (no auth) |
| `GET /.well-known/oauth-protected-resource[/mcp]` | RFC 9728 metadata — what the M365 Agents Toolkit's OAuth registration reads |

Unauthenticated `/mcp` calls get `401` + `WWW-Authenticate: Bearer
resource_metadata="..."` — the standard MCP OAuth discovery flow (an
unauthenticated POST returns 401, the client follows `resource_metadata` to
the authorization server), which is what the M365 Agents Toolkit expects.

## Config (env)

See `.env.example`. The important ones:

- `UPSTREAM_URL` — autotask-mcp base URL (no trailing slash)
- `AUTOTASK_USERNAME` / `AUTOTASK_SECRET` / `AUTOTASK_INTEGRATION_CODE` — the shared keycard
- `S2S_SECRET` — must equal autotask-mcp's `CONDUIT_S2S_SECRET`
- `TENANT_ID` — your organisation's Entra tenant (token tenant/issuer check)
- `AUDIENCE` — client ID of the "Autotask-MCP resource app" registration (token `aud` check)
- `REQUIRED_SCOPE` — delegated scope that registration exposes (e.g. `autotask_access`)
- `OVERRIDE_MAP` — optional JSON `{"email": resourceId}` for edge cases

## Local test (no Azure, no M365)

```bash
cp .env.example .env          # fill in the Autotask keycard + S2S secret
docker compose up --build
curl http://127.0.0.1:8090/health
```

Then point **MCP Inspector** at it (the same tool used to prove CIPP worked):

1. `npx @modelcontextprotocol/inspector` (Node 22.19+)
2. Transport: Streamable HTTP, URL `http://127.0.0.1:8090/mcp`
3. No token → you should see the 401 challenge (proves the OAuth metadata path)
4. With a valid token for `AUDIENCE` + `REQUIRED_SCOPE` → `tools/list` should
   return the 4 lazy-loading meta-tools **plus the 2 injected docs tools**
   (`autotask_docs_search`, `autotask_docs_get`), and `tools/call` on
   `autotask_list_categories` should return live Autotask data attributed to
   the token's user (check the proxy log line: `user=... resource=... → 200`)

### Minting a test token

Any Entra token for the resource app works, e.g. via MCP Inspector's own
OAuth flow once the "Autotask-MCP resource app" registration exists with a
`http://127.0.0.1:<port>/callback` redirect (dev only — remove before prod,
same rule as the CIPP Inspector redirect).

## Tests

Two dependency-free suites, both run with plain `node` (no test framework):

```bash
node test.mjs                # proxy: 46 assertions (tool gating, docs search/get,
                             #        tools/list merge, override normalisation)
node test/scrape.test.mjs    # scraper: 30 assertions (both Autotask HTML layouts,
                             #        field/type detection, with regression fixtures)
```

The one thing these can't cover is the full wire path (real token →
`tools/call` → JSON-RPC response through the proxy) — that needs a live
Autotask + Entra and is exercised in the pilot (see the plan doc's security
tests).

## Docs-as-tools (autotask_docs_search + autotask_docs_get)

autotask-mcp has no documentation tool (CIPP's MCP has `SearchDocs`/`GetDoc`).
The proxy closes that gap with the **same two-tool search-then-get pattern**:
it injects `autotask_docs_search` and `autotask_docs_get` into the upstream
`tools/list` response (JSON and SSE) and answers calls for both locally (no
deps, no model, nothing pre-injected — the agent only pays tokens for what it
retrieves).

- **`autotask_docs_search(query)`** — keyword search over the corpus, returns a
  ranked shortlist of doc names + snippets.
- **`autotask_docs_get(name)`** — fetches the full text of one doc (a name from
  the search). This is where the real content — e.g. an entity's full field
  list — comes from.

### The corpus (two layers)

```
docs/
├── autotask-core-objects.md        ┐
├── schedules-and-recurring-work.md │ hand-written how-to guidance
├── time-entries-and-billing.md     │ (primary layer — WHEN/HOW)
├── team-conventions.md             ┘ (scaffold — fill with your team's rules)
└── entities/                       ← all 203 REST API entities, scraped
    ├── Tasks.md                      (reference layer — field names, types,
    ├── TimeEntries.md                  relationships, access URLs)
    └── … (201 more)
```

For a how-to query the curated guidance surfaces; for a field/schema query the
entity reference ranks first. Both are in the same searched corpus — the query
decides which layer leads.

### Regenerating the entity reference

The `docs/entities/` files are scraped from the official Autotask Developer
Help at build time (not hand-written). To refresh after an API change:

```bash
node scripts/scrape-entities.mjs              # all 203 entities (~30s)
node scripts/scrape-entities.mjs Tasks TimeEntries   # or a subset
```

Drop new curated how-to docs in `docs/` any time. Restart the container to pick
up new files (search quality itself needs no restart).

## Read-only mode (pilot phase 1)

`READ_ONLY=true` (the default in `.env.example`) gives the CIPP-style
read-only surface: `search_*` / `get_*` / `list_*` tools work, and write
tools (`create_*`, `update_*`, `delete_*`, `autotask_raw_request`) are
rejected with a clear JSON-RPC error — including writes smuggled through the
lazy-loading meta-tool (`autotask_execute_tool` with a write `tool` argument).
Flip to `READ_ONLY=false` for pilot phase 2 (writes: notes, time entries).

## What the proxy logs

One line per request:

```
2026-11-11T10:00:00Z POST /mcp user=tech@example.com resource=12345 → 200 (84ms)
```

That line *is* the audit trail for the identity layer.

## Production notes

- Deploy as a container in the same Container Apps environment as
  autotask-mcp; Key Vault injects the secrets.
- The `resourceCache` and `zoneUrl` are in-memory: a container restart just
  re-resolves (one API call per user). No database needed for the pilot.
- If Autotask ever returns 401 on the shared keycard, the zone cache is
  invalidated by autotask-mcp itself; the proxy's `zoneUrl` cache is
  process-lifetime — a restart clears it.

## Security hardening

The proxy is the identity layer, so it fails closed. Specifics:

- **Token validation:** RS256 only (blocks `none` / HS256 alg-confusion),
  signature checked against the tenant's JWKS, and `exp`, `nbf`, `tid`, `iss`,
  `aud`, and scope are all enforced. When `TENANT_ID` is set, `tid` and `iss`
  are *required* (a token missing them is rejected, not skipped). A malformed
  JWT (bad base64url / non-JSON header or payload) is a 401, not a 500.
- **`OVERRIDE_MAP` keys are case-insensitive:** they're normalised to lowercase
  at load, so `{"Someone@Company.com": 123}` matches the lowercased UPN lookup.
- **Read-only gate is batch-aware:** a JSON-RPC batch (array) is inspected
  element-by-element, so a write hidden in a batch is still rejected.
- **Resource resolution fails closed:** an exact email match is preferred;
  a single loose match is accepted, but *multiple* loose matches with no exact
  match are rejected (403) rather than guessing a person. Lookups are cached
  with a short negative TTL so a missing user doesn't hammer Autotask.
- **Body size capped** at 10 MB (413 above that).
- **S2S replay protection** is handled upstream: autotask-mcp rejects
  `x-gateway-s2s` headers whose timestamp is more than 5 minutes stale.

### Known limitations (low risk, documented)

- **JWKS / zone lookups have no in-flight dedup:** if the cache is stale and
  several requests arrive at once, each fetches (a thundering herd). Harmless —
  the result is identical — just a few extra calls.
- **Docs tools are answered for single requests only:** a docs call inside a
  JSON-RPC batch is forwarded upstream (and fails there) rather than answered
  locally. Batches are not how the M365 runtime talks to MCP.
- **SSE tools/list merge assumes single-line `data:` JSON:** correct for how
  MCP emits SSE; a multi-line `data:` payload would not be merged.
- **`resourceCache` evicts lazily:** an entry is dropped on its next access
  after its TTL, so a user who is never seen again keeps their entry until
  restart. Bounded in practice (pilot-scale user counts).
- **Client disconnect mid-stream:** if the client drops the connection while
  the proxy is streaming the upstream response, the proxy waits for a `drain`
  that may never come and holds the upstream connection until it finishes.
  Low risk — the M365 runtime doesn't typically abort mid-response — but worth
  knowing.
