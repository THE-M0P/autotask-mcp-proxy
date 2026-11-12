// Unit tests for the read-only tool gating. Run: node test.mjs
process.env.READ_ONLY = 'true'; // must be set before proxy.mjs is evaluated
const { isWriteTool, writeToolInCall, searchDocs, mergeDocsToolIntoToolsList, DOCS_TOOL, DOCS_GET_TOOL, getDoc, isPlaceholder, readOnlyHints, sanitizeHeaderValue, isLoopbackBindHost, resolveBindHost, DESCRIBE_TOOL, renderFields, describeEntity } = await import('./proxy.mjs');

let failures = 0;
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  (got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)})`);
}

// --- config: OVERRIDE_MAP keys normalised to lowercase, null-safe ---
{
  const safeJson = (raw, fb) => { try { return raw ? JSON.parse(raw) : fb; } catch { return fb; } };
  const norm = (raw) => Object.fromEntries(Object.entries(safeJson(raw, {}) || {}).map(([k, v]) => [String(k).toLowerCase(), v]));
  check('override: mixed-case key normalised to lowercase', norm('{"Someone@Company.com": 12345}')['someone@company.com'], 12345);
  check('override: already-lowercase key unchanged', norm('{"other@company.com": 67890}')['other@company.com'], 67890);
  check('override: JSON "null" does not crash (returns {})', norm('null'), {});
  check('override: empty/undefined does not crash (returns {})', norm(undefined), {});
  check('override: non-object JSON ("123") does not crash (returns {})', norm('123'), {});
}

// --- config: placeholder-secret detection (fail-fast startup) ---
check('placeholder: changeme detected', isPlaceholder('changeme'), true);
check('placeholder: replace-me detected', isPlaceholder('replace-me'), true);
check('placeholder: case-insensitive', isPlaceholder('CHANGE_ME'), true);
check('placeholder: trimmed', isPlaceholder('  secret  '), true);
check('placeholder: real secret not flagged', isPlaceholder('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4'), false);
check('placeholder: non-string not flagged', isPlaceholder(12345), false);

// --- loopback bind host detection ---
check('loopback: 127.0.0.1', isLoopbackBindHost('127.0.0.1'), true);
check('loopback: 127.0.0.5 (127/8)', isLoopbackBindHost('127.0.0.5'), true);
check('loopback: localhost', isLoopbackBindHost('localhost'), true);
check('loopback: ::1', isLoopbackBindHost('::1'), true);
check('loopback: [::1] bracketed', isLoopbackBindHost('[::1]'), true);
check('loopback: ::ffff:127.0.0.1 mapped', isLoopbackBindHost('::ffff:127.0.0.1'), true);
check('loopback: 0.0.0.0 is NOT loopback', isLoopbackBindHost('0.0.0.0'), false);
check('loopback: 192.168.1.1 not loopback', isLoopbackBindHost('192.168.1.1'), false);
check('loopback: 256.0.0.1 invalid octet', isLoopbackBindHost('256.0.0.1'), false);
check('loopback: empty not loopback', isLoopbackBindHost(''), false);

// --- resolveBindHost: dev forces loopback, prod honors HOST ---
check('bind: dev (empty s2s) forces 127.0.0.1', resolveBindHost({ S2S_SECRET: '' }).host, '127.0.0.1');
check('bind: dev + loopback HOST ok', resolveBindHost({ S2S_SECRET: '', HOST: '127.0.0.1' }).errors.length, 0);
check('bind: dev + non-loopback HOST refused', resolveBindHost({ S2S_SECRET: '', HOST: '0.0.0.0' }).errors.length, 1);
check('bind: real s2s, no HOST → 0.0.0.0', resolveBindHost({ S2S_SECRET: 'a1b2c3d4' }).host, '0.0.0.0');
check('bind: real s2s + HOST honored', resolveBindHost({ S2S_SECRET: 'a1b2c3d4', HOST: '10.0.0.5' }).host, '10.0.0.5');
check('bind: placeholder s2s counts as no-real (dev)', resolveBindHost({ S2S_SECRET: 'changeme' }).host, '127.0.0.1');

// --- isWriteTool: prefix classification of the real 110-tool surface ---
check('search tool is read', isWriteTool('autotask_search_tickets'), false);
check('get tool is read', isWriteTool('autotask_get_ticket_details'), false);
check('list tool is read', isWriteTool('autotask_list_categories'), false);
check('test tool is read', isWriteTool('autotask_test_connection'), false);
check('router is read', isWriteTool('autotask_router'), false);
check('create tool is write', isWriteTool('autotask_create_ticket'), true);
check('update tool is write', isWriteTool('autotask_update_ticket'), true);
check('delete tool is write', isWriteTool('autotask_delete_ticket'), true);
check('raw_request is write', isWriteTool('autotask_raw_request'), true);
check('unknown tool defaults to write (fail-safe)', isWriteTool('autotask_something_new'), true);
check('null/empty is not a write', isWriteTool(null), false);

// --- readOnlyHint: vendor's own classification takes precedence ---
{
  const tool = 'autotask_experimental_thing'; // not a read prefix, not in READ_EXACT
  check('hint: unknown tool is write before tools/list (fail-safe)', isWriteTool(tool), true);
  readOnlyHints.add(tool); // as if harvested from a tools/list readOnlyHint:true
  check('hint: vendor readOnlyHint:true makes it a read', isWriteTool(tool), false);
  readOnlyHints.delete(tool);
  check('hint: removed again → write (fail-safe restored)', isWriteTool(tool), true);
}

// --- writeToolInCall: JSON-RPC inspection (takes a parsed message or batch) ---
const rpc = (name, args) => ({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } });

check('direct read call passes', writeToolInCall(rpc('autotask_search_tickets', {})), null);
check('direct write call caught', writeToolInCall(rpc('autotask_create_ticket', {})), 'autotask_create_ticket');
check('raw_request caught', writeToolInCall(rpc('autotask_raw_request', {})), 'autotask_raw_request');
check('batch with a write is caught', writeToolInCall([rpc('autotask_search_tickets', {}), rpc('autotask_create_ticket', {})]), 'autotask_create_ticket');
check('batch of reads passes', writeToolInCall([rpc('autotask_search_tickets', {}), rpc('autotask_get_ticket_details', {})]), null);
check('batch with write via execute_tool caught', writeToolInCall([rpc('autotask_execute_tool', { tool: 'autotask_delete_ticket' })]), 'autotask_delete_ticket');
check('non-tools/call in batch passes', writeToolInCall([{ jsonrpc: '2.0', id: 1, method: 'tools/list' }]), null);
check(
  'write smuggled via execute_tool caught',
  writeToolInCall(rpc('autotask_execute_tool', { tool: 'autotask_update_ticket' })),
  'autotask_update_ticket'
);
check(
  'read via execute_tool passes',
  writeToolInCall(rpc('autotask_execute_tool', { tool: 'autotask_search_tickets' })),
  null
);
check('non tools/call method passes', writeToolInCall(Buffer.from('{"jsonrpc":"2.0","id":1,"method":"tools/list"}')), null);
check('non-JSON body passes', writeToolInCall(Buffer.from('not json')), null);
check('empty body passes', writeToolInCall(Buffer.alloc(0)), null);

// --- docs-as-tools ---
const coreHits = searchDocs('checklist checkboxes ticket', 3);
check('docs: checklist query surfaces core-objects doc', coreHits.some((h) => h.name === 'autotask-core-objects.md'), true);
const schedHits = searchDocs('recurring monthly schedule', 3);
check('docs: schedule query hits schedules doc', schedHits[0]?.name, 'schedules-and-recurring-work.md');
const timeHits = searchDocs('log time entry billable', 3);
check('docs: time query surfaces time-entries doc', timeHits.some((h) => h.name === 'time-entries-and-billing.md'), true);
check('docs: nonsense query returns nothing', searchDocs('zzzqqq xyy', 3).length, 0);

// --- entity reference layer (scraped docs/entities/*.md) ---
const taskHits = searchDocs('task parent field subtask', 3);
check('docs: field query ranks Tasks entity doc first', taskHits[0]?.name, 'entities/Tasks.md');
const timeHits2 = searchDocs('time entry billable hours field', 3);
check('docs: field query ranks TimeEntries entity doc first', timeHits2[0]?.name, 'entities/TimeEntries.md');

// --- getDoc: resolve a doc by several name forms ---
const docBare = getDoc('Tasks');
check('getDoc: bare entity name resolves', docBare ? docBare.includes('parentTaskID') || docBare.includes('## Fields') : false, true);
const docRel = getDoc('entities/Tasks.md');
check('getDoc: relative path resolves to same doc', docRel === docBare, true);
const docMd = getDoc('Tasks.md');
check('getDoc: filename-with-md resolves to same doc', docMd === docBare, true);
check('getDoc: unknown name returns null', getDoc('NotARealEntity'), null);
check('getDoc: curated doc still resolvable', getDoc('autotask-core-objects.md') ? true : false, true);

// --- get tool is defined ---
check('DOCS_GET_TOOL has a name', DOCS_GET_TOOL.name, 'autotask_docs_get');

function fakeUpstream(ct, bodyStr) {
  let sent = false;
  return {
    status: 200,
    headers: { get: (k) => (k === 'content-type' ? ct : '123') },
    body: {
      getReader: () => ({
        read: async () =>
          sent ? { done: true } : (sent = true, { done: false, value: Buffer.from(bodyStr) }),
      }),
    },
  };
}

const jsonList = JSON.stringify({
  jsonrpc: '2.0', id: 1, result: { tools: [{ name: 'autotask_search_tickets' }] },
});
const mergedJson = JSON.parse(await mergeDocsToolIntoToolsList(fakeUpstream('application/json', jsonList)));
check('merge: JSON tools/list gains search tool', mergedJson.result.tools.some((t) => t.name === 'autotask_docs_search'), true);
check('merge: JSON tools/list gains get tool', mergedJson.result.tools.some((t) => t.name === 'autotask_docs_get'), true);
check('merge: original tools preserved', mergedJson.result.tools.some((t) => t.name === 'autotask_search_tickets'), true);

const sseList = 'event: message\ndata: ' + jsonList + '\n\n';
const mergedSse = await mergeDocsToolIntoToolsList(fakeUpstream('text/event-stream', sseList));
check('merge: SSE tools/list gains search tool', mergedSse.includes('autotask_docs_search'), true);
check('merge: SSE tools/list gains get tool', mergedSse.includes('autotask_docs_get'), true);

const other = await mergeDocsToolIntoToolsList(fakeUpstream('application/json', '{"jsonrpc":"2.0","id":1,"result":{}}'));
check('merge: non-tools/list passes through (null)', other, null);

// --- merge harvests the upstream's readOnlyHint annotations ---
{
  const hinted = 'autotask_hinted_read';
  const hintedList = JSON.stringify({ jsonrpc: '2.0', id: 1, result: { tools: [{ name: hinted, annotations: { readOnlyHint: true } }] } });
  await mergeDocsToolIntoToolsList(fakeUpstream('application/json', hintedList));
  check('merge: readOnlyHint harvested into the gate', readOnlyHints.has(hinted), true);
  check('gate: harvested hint tool is a read', isWriteTool(hinted), false);
  readOnlyHints.delete(hinted);
}

// --- sanitizeHeaderValue: control chars stripped, length capped ---
check('sanitize: strips control chars', sanitizeHeaderValue('abc\x00def\x1fghi'), 'abcdefghi');
check('sanitize: trims whitespace', sanitizeHeaderValue('  padded  '), 'padded');
check('sanitize: caps length', sanitizeHeaderValue('x'.repeat(300), 10).length, 10);
check('sanitize: null → empty string', sanitizeHeaderValue(null), '');

// --- live describe-entity tool ---
check('DESCRIBE_TOOL has a name', DESCRIBE_TOOL.name, 'autotask_describe_entity');
check('DESCRIBE_TOOL requires entityName', DESCRIBE_TOOL.inputSchema.required[0], 'entityName');

// renderFields: flags, picklist values, empty case
{
  const fields = [
    { name: 'id', dataType: 'integer', isRequired: false, isPickList: false, isQueryable: true },
    { name: 'name', dataType: 'string', isRequired: true, isPickList: false, isQueryable: true },
    { name: 'status', dataType: 'string', isRequired: false, isPickList: true, isQueryable: true, picklistValues: [{ value: 'Open', isActive: true }, { value: 'Closed', isActive: false }] },
    { name: 'internalNote', dataType: 'string', isRequired: false, isPickList: false, isQueryable: false },
  ];
  const md = renderFields('Tasks', fields);
  check('renderFields: header + count', md.startsWith('# Tasks — live field schema (4 fields)'), true);
  check('renderFields: required flag', md.includes('**name** `string` — required'), true);
  check('renderFields: picklist flag', md.includes('picklist(2)'), true);
  check('renderFields: active picklist value shown', md.includes('values: Open'), true);
  check('renderFields: inactive picklist value excluded', !md.includes('Closed'), true);
  check('renderFields: not-queryable flag', md.includes('**internalNote** `string` — not-queryable'), true);
  check('renderFields: plain field has no flags', /\*\*id\*\* `integer`(?![ —])/.test(md), true);
  check('renderFields: empty list', renderFields('Tasks', []), 'No fields returned for entity "Tasks".');
}

// merge: tools/list gains the describe tool
{
  const merged = await mergeDocsToolIntoToolsList(fakeUpstream('application/json', '{"jsonrpc":"2.0","id":1,"result":{"tools":[]}}'));
  const names = JSON.parse(merged).result.tools.map((t) => t.name);
  check('merge: includes describe tool', names.includes('autotask_describe_entity'), true);
}

// describeEntity: correct URL + headers + response parsing (mocked fetch)
{
  const origFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, opts) => {
    calls.push({ url, headers: opts?.headers });
    if (url.includes('zoneInformation')) return { ok: true, json: async () => ({ url: 'https://na1.autotask.net/atservicesrest/api' }) };
    if (url.includes('entityInformation/fields')) return { ok: true, json: async () => ({ fields: [{ name: 'id', dataType: 'integer', isRequired: false }] }) };
    return { ok: false, status: 404, json: async () => ({}) };
  };
  try {
    const fields = await describeEntity('Tasks', 12345);
    check('describeEntity: returns parsed fields', fields.length, 1);
    check('describeEntity: field name', fields[0].name, 'id');
    const fieldCall = calls.find((c) => c.url.includes('entityInformation/fields'));
    check('describeEntity: correct field URL (with /v1.0)', fieldCall.url, 'https://na1.autotask.net/atservicesrest/api/v1.0/Tasks/entityInformation/fields');
    check('describeEntity: native impersonation header', fieldCall.headers['ImpersonationResourceId'], '12345');
    check('describeEntity: native keycard headers', fieldCall.headers['UserName'] !== undefined && fieldCall.headers['Secret'] !== undefined && fieldCall.headers['ApiIntegrationcode'] !== undefined, true);
    check('describeEntity: NOT the gateway headers', fieldCall.headers['x-api-key'] === undefined, true);
  } finally {
    globalThis.fetch = origFetch;
  }
}

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
