// Unit tests for the read-only tool gating. Run: node test.mjs
process.env.READ_ONLY = 'true'; // must be set before proxy.mjs is evaluated
const { isWriteTool, writeToolInCall, searchDocs, mergeDocsToolIntoToolsList, DOCS_TOOL, DOCS_GET_TOOL, getDoc } = await import('./proxy.mjs');

let failures = 0;
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  (got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)})`);
}

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

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
