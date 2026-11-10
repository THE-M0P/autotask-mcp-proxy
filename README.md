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
   return the 4 lazy-loading meta-tools, and `tools/call` on
   `autotask_list_categories` should return live Autotask data attributed to
   the token's user (check the proxy log line: `user=... resource=... → 200`)

### Minting a test token

Any Entra token for the resource app works, e.g. via MCP Inspector's own
OAuth flow once the "Autotask-MCP resource app" registration exists with a
`http://127.0.0.1:<port>/callback` redirect (dev only — remove before prod,
same rule as the CIPP Inspector redirect).

## Docs-as-tools (autotask_docs_search)

autotask-mcp has no documentation tool (CIPP's MCP has `SearchDocs`/`GetDoc`).
The proxy closes that gap: it injects an `autotask_docs_search` tool into the
upstream `tools/list` response (JSON and SSE) and answers calls for it
locally — a keyword search over the markdown corpus in `./docs/` (no deps,
no model). The agent can now consult Autotask semantics (tickets vs service
calls, checklists, schedules, time entries) and your team's MSP conventions
before calling other tools. Add/edit docs by dropping `.md` files in `docs/`
— no restart needed for search quality, one restart to pick up new files.

Starter corpus: `autotask-core-objects.md`, `schedules-and-recurring-work.md`,
`time-entries-and-billing.md`, `team-conventions.md` (the last one is a
scaffold — fill it with your team's real conventions).

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
