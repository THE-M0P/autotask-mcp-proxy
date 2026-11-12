# Autotask MCP identity proxy

Turns a single shared Autotask login into **per-user access control and
attribution** for Microsoft 365 Copilot. It sits in front of the stock
[`autotask-mcp`](https://github.com/WYRE-AI/autotask-mcp) server and adds the
one thing that server can't do on its own: know **which technician** is
asking, and make Autotask act — and record the action — **as that person**.

Zero dependencies. Node 20+. One file (`proxy.mjs`) plus a searchable docs
corpus. Built during a placement at Concept Data (MSP).

> **No secrets in this repo.** `.env.example` is a template; real values live
> in Azure Key Vault in production.

---

## The problem

Autotask's API authenticates with a single **API user** (a "keycard"), not per
person. Point an AI agent straight at it and every action is recorded under
that one shared account:

- **You can't tell who asked.** The AI adds a note to a ticket; Autotask logs
  it under the API user, not the technician.
- **Everyone gets the same permissions** — the API user's. A junior and a
  director can do exactly the same things.

That's the "one global user" problem, and it's the reason most MCP
integrations (including Kaseya's first-party servers) log changes under the
shared key and can't attribute them to a person.

The fix is **impersonation** — Autotask lets the API user act *as* a named
resource (a person), so the action is recorded under that person **and**
bounded by *their* permissions. This proxy is the thin layer that makes
impersonation work from Copilot: it validates the technician's work sign-in,
finds their Autotask resource ID, and stamps it on every request.

## What you get

- **Per-user attribution** — a note the AI adds is recorded under the
  technician who asked, not a shared "API user".
- **Per-user access control** — a junior can't do what their Autotask badge
  can't do, even though the shared keycard could.
- **One sign-in** — the same work account they already use for CIPP / Teams /
  email. No new credentials.
- **Instant offboarding** — remove their Autotask badge or Entra assignment
  and the AI loses their permissions. No AI-side cleanup.

## How it works

```
Copilot agent ──Bearer token (work sign-in)──▶ proxy ──▶ autotask-mcp ──▶ Autotask
                                              │
                                              1. validate the Entra token  (who?)
                                              2. email → Autotask resource ID
                                              3. add keycard + impersonation + S2S sig
```

For every MCP request the proxy:

1. **Validates the Entra ID token** (JWKS / RS256: signature, tenant, issuer,
   audience, scope, expiry) — this is "who is asking".
2. **Resolves the work email → Autotask resource ID** — override map →
   in-memory cache → one live Autotask lookup by email (cached afterwards).
3. **Forwards to autotask-mcp** with the shared keycard, the **impersonation
   ID**, and an S2S signature proving the request came from our proxy.

Unauthenticated `/mcp` calls get the standard `401` +
`WWW-Authenticate: Bearer resource_metadata="..."` (RFC 9728) — the same
challenge shape CIPP's endpoint presents, which is what the M365 Agents
Toolkit's OAuth registration expects.

## Endpoints

| Path | Purpose |
|---|---|
| `POST /mcp` (+ `GET`/`DELETE` for MCP sessions) | Authenticated MCP endpoint — validates token, injects headers, streams to upstream |
| `GET /health` | Liveness (no auth) |
| `GET /.well-known/oauth-protected-resource[/mcp]` | RFC 9728 metadata — what the M365 Agents Toolkit's OAuth registration reads |

## Quick start (local, no Azure, no M365)

```bash
cp .env.example .env          # fill in the Autotask keycard + S2S secret
docker compose up --build
curl http://127.0.0.1:8090/health
```

`docker-compose.yml` runs the proxy **and** a stock autotask-mcp (gateway
mode, lazy-loading) on a private network — autotask-mcp is not published to
the host, only the proxy is (8090 → 8080).

Then point **MCP Inspector** at it (the same tool used to prove CIPP worked):

1. `npx @modelcontextprotocol/inspector` (Node 22.19+)
2. Transport: Streamable HTTP, URL `http://127.0.0.1:8090/mcp`
3. **No token** → you should see the 401 challenge (proves the OAuth metadata path)
4. **With a valid token** for `AUDIENCE` + `REQUIRED_SCOPE` → `tools/list`
   returns the 4 lazy-loading meta-tools **plus the 3 injected tools**
   (`autotask_docs_search`, `autotask_docs_get`, `autotask_describe_entity`),
   and `tools/call` on `autotask_list_categories` returns live Autotask data
   attributed to the token's user (check the proxy log: `user=… resource=… → 200`)

### Minting a test token

Any Entra token for the resource app works — e.g. via MCP Inspector's own
OAuth flow once the "Autotask-MCP resource app" registration exists with a
`http://127.0.0.1:<port>/callback` redirect (dev only — remove before prod,
same rule as the CIPP Inspector redirect).

## Configuration

See `.env.example`. The important ones:

| Var | Meaning |
|---|---|
| `UPSTREAM_URL` | autotask-mcp base URL (no trailing slash) |
| `AUTOTASK_USERNAME` / `AUTOTASK_SECRET` / `AUTOTASK_INTEGRATION_CODE` | the shared keycard |
| `S2S_SECRET` | must equal autotask-mcp's `CONDUIT_S2S_SECRET` |
| `TENANT_ID` | your organisation's Entra tenant (token tenant/issuer check) |
| `AUDIENCE` | client ID of the "Autotask-MCP resource app" registration (token `aud` check) |
| `REQUIRED_SCOPE` | delegated scope that registration exposes (e.g. `autotask_access`) |
| `OVERRIDE_MAP` | optional JSON `{"email": resourceId}` for edge cases |
| `READ_ONLY` | `true` (default) rejects write tools — pilot phase 1 |
| `PROXY_ALLOW_INSECURE_DEV` | `1` allows an empty `S2S_SECRET` (local dev only) |

## The tools it adds

autotask-mcp has no documentation tool (CIPP's MCP has `SearchDocs`/`GetDoc`).
The proxy closes that gap with the **same search-then-get pattern** plus a
**live schema** tool: it injects three tools into the upstream `tools/list`
response (JSON and SSE) and answers calls for all of them locally — no deps,
no model, nothing pre-injected, so the agent only pays tokens for what it
retrieves.

- **`autotask_docs_search(query)`** — keyword search over the corpus; returns a
  ranked shortlist of doc names + snippets.
- **`autotask_docs_get(name)`** — fetches the full text of one doc (a name from
  the search). This is where the real content — e.g. an entity's full field
  list — comes from.
- **`autotask_describe_entity(entityName)`** — the **live** field schema:
  queries the Autotask API (`/{entity}/entityInformation/fields`) for the
  *current* field names, types, required/picklist/queryable flags, and picklist
  values. Use it right before a `create_`/`update_` when you need the exact,
  up-to-date field list (the static corpus can lag the live API). Answered with
  the requesting user's impersonation id, so it respects their permissions.

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
entity reference ranks first. Both live in the same searched corpus — the query
decides which layer leads.

### Regenerating the entity reference

The `docs/entities/` files are scraped from the official Autotask Developer
Help at build time (not hand-written). To refresh after an API change:

```bash
node scripts/scrape-entities.mjs                        # all 203 entities (~30s)
node scripts/scrape-entities.mjs Tasks TimeEntries      # or a subset
```

Drop new curated how-to docs in `docs/` any time. Restart the container to pick
up new files (search quality itself needs no restart).

## Read-only mode (pilot phase 1)

`READ_ONLY=true` (the default) gives the CIPP-style read-only surface:
`search_*` / `get_*` / `list_*` tools work, and write tools (`create_*`,
`update_*`, `delete_*`, `autotask_raw_request`) are rejected with a clear
JSON-RPC error — including writes smuggled through the lazy-loading meta-tool
(`autotask_execute_tool` with a write `tool` argument). The gate trusts the
upstream's own `annotations.readOnlyHint` classification when present
(harvested from `tools/list`), and falls back to prefix heuristics as the
fail-safe. Flip to `READ_ONLY=false` for pilot phase 2 (writes: notes, time
entries).

## Security model

The plain-English "who did what" story:

**Attribution.** Every request carries the *requesting user's* work sign-in.
The proxy validates it against Entra, resolves their Autotask resource ID, and
injects it as the impersonation header. Autotask then performs the action **as
that user** — so a note the AI adds to a ticket is recorded under the
technician who asked, not under a shared "API user" account. (Stricter than the
common MCP pattern, where changes are logged under the shared API key and you
can't tell who actually asked.)

**Access control.** Two ceilings apply at once:

1. The shared **API user's** Autotask security level — the hard ceiling for
   everything the AI can do. Set it deliberately (not super-admin) to cap the
   blast radius.
2. The **requesting user's** own Autotask security level — impersonation means
   the user can't exceed their own permissions. A junior asking the AI to do
   something their role can't do gets Autotask's own "access denied", not the
   AI guessing.

> Effective permission = `API user level ∩ requesting user level`.

**Why this is the accurate boundary:** the toolbox includes an escape-hatch
tool (`autotask_raw_request`) that can call any Autotask endpoint — so any
filtering at the AI layer is bypassable by a clever prompt. Autotask's own
permission check is the one boundary no prompt can get around, which is why
access control is anchored there and everything else is defence in depth.

**Prompt injection.** The agent reads Autotask data (ticket notes, etc.) that
may contain free-text written by customers. The boundaries are: the read-only
gate (phase 1), Autotask's own per-user permission check (the real
enforcement), and the fact that the docs tools are answered locally over a
static corpus (no customer data in them).

### Hardening specifics

The proxy is the identity layer, so it fails closed:

- **Fail-fast startup** — refuses to boot (exit 1) if `S2S_SECRET` is empty or
  a known placeholder (`changeme`, `replace-me`, …), so a copied example value
  can't start the container and then 401 every request.
  `PROXY_ALLOW_INSECURE_DEV=1` bypasses the empty-secret check only (never a
  placeholder). Missing keycard values are a loud warning (the proxy still
  boots to serve the docs tools + health).
- **Token validation** — RS256 only (blocks `none` / HS256 alg-confusion),
  signature checked against the tenant's JWKS, and `exp`, `nbf`, `tid`, `iss`,
  `aud`, and scope are all enforced. A missing `exp` is rejected (a
  non-expiring token is a risk). When `TENANT_ID` is set, `tid` and `iss` are
  *required*. A malformed JWT is a 401, not a 500. 30s clock-skew tolerance.
- **`OVERRIDE_MAP` keys are case-insensitive** — normalised to lowercase at
  load, so `{"Someone@Company.com": 123}` matches the lowercased UPN lookup.
- **Read-only gate is batch-aware** — a JSON-RPC batch (array) is inspected
  element-by-element, so a write hidden in a batch is still rejected.
- **Resource resolution fails closed** — an exact email match is preferred; a
  single loose match is accepted, but *multiple* loose matches with no exact
  match are rejected (403) rather than guessing a person. Lookups are cached
  with a short negative TTL so a missing user doesn't hammer Autotask.
- **Header sanitisation** — user-derived values are stripped of control chars
  and length-capped before going into a header.
- **Body size capped** at 10 MB (413 above that). **API calls time out** at
  30s so a slow zone can't hang a request.
- **S2S replay protection** is handled upstream: autotask-mcp rejects
  `x-gateway-s2s` headers whose timestamp is more than 5 minutes stale.

### What the proxy logs

One line per request:

```
2026-11-11T10:00:00Z POST /mcp user=tech@example.com resource=12345 → 200 (84ms)
```

That line *is* the audit trail for the identity layer.

## Deploying to production

The proxy runs as a container next to autotask-mcp in Azure Container Apps.
Secrets live in Key Vault; the container references them.

1. **Entra ID** — create the **"Autotask-MCP resource app"** registration with
   a delegated scope (e.g. `autotask_access`). Its client ID is the proxy's
   `AUDIENCE`.
2. **Key Vault** — store `AUTOTASK_USERNAME`, `AUTOTASK_SECRET`,
   `AUTOTASK_INTEGRATION_CODE`, `S2S_SECRET`, `TENANT_ID`, `AUDIENCE`,
   `REQUIRED_SCOPE`.
3. **Container Apps** — deploy autotask-mcp (`MCP_TRANSPORT=http`,
   `AUTH_MODE=gateway`, `LAZY_LOADING=true`, `CONDUIT_S2S_SECRET`) and this
   proxy (`UPSTREAM_URL` → autotask-mcp). Both share the `S2S_SECRET` (the
   proxy signs each request; autotask-mcp verifies it).
4. **M365 Agents Toolkit** — point the agent's `action_2` `RemoteMCPServer` at
   the proxy's `/mcp` URL, with the same work-sign-in OAuth registration as
   CIPP's `action_1`. Bump the manifest version and provision.

Operational notes:

- The `resourceCache` and `zoneUrl` are in-memory: a container restart just
  re-resolves (one API call per user). No database needed for the pilot.
- If Autotask ever returns 401 on the shared keycard, autotask-mcp invalidates
  its own zone cache; the proxy's `zoneUrl` cache is process-lifetime — a
  restart clears it.

## Troubleshooting

| Symptom | Meaning | Fix |
|---|---|---|
| `401` from `/mcp` | Token missing/invalid (signature, tenant, audience, scope, or expiry) | Check the token's `aud`/`scope`/`tid` match the proxy's `AUDIENCE`/`REQUIRED_SCOPE`/`TENANT_ID` |
| `403 no Autotask resource for …` | The user's work email isn't on an Autotask resource (or is ambiguous) | Add an `OVERRIDE_MAP` entry, or fix the resource's email |
| `502 Autotask zone lookup failed` | The shared keycard can't reach Autotask | Check `AUTOTASK_USERNAME` / `SECRET` / `INTEGRATION_CODE` |
| `502 upstream unreachable` | The proxy can't reach autotask-mcp | Check `UPSTREAM_URL` and that autotask-mcp is running |
| `Read-only mode: … is a write operation` | A write was attempted while `READ_ONLY=true` | Expected in phase 1; set `READ_ONLY=false` to enable writes |
| Won't start: `S2S_SECRET is a known placeholder` | A copied example value is in place | Set a real `S2S_SECRET` (`openssl rand -hex 32`) |
| `describe_entity failed: HTTP 401` | The keycard can't read that entity (or impersonation is denied) | Check the API user's security level and the user's permissions |

## Tests

Two dependency-free suites, both run with plain `node` (no test framework):

```bash
node test.mjs                # proxy: 94 assertions (tool gating incl. readOnlyHint,
                             #        docs search/get, live describe-entity, tools/list
                             #        merge, override normalisation, placeholder-secret
                             #        detection, loopback bind, header sanitisation)
node test/scrape.test.mjs    # scraper: 30 assertions (both Autotask HTML layouts,
                             #        field/type detection, with regression fixtures)
```

The one thing these can't cover is the full wire path (real token →
`tools/call` → JSON-RPC response through the proxy) — that needs a live
Autotask + Entra and is exercised in the pilot (see the plan doc's security
tests).

## Known limitations (low risk, documented)

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
