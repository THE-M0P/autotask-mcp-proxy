// Unit tests for the read-only tool gating. Run: node test.mjs
process.env.READ_ONLY = 'true'; // must be set before proxy.mjs is evaluated
const { isWriteTool, writeToolInCall, searchDocs, mergeDocsToolIntoToolsList, DOCS_TOOL } = await import('./proxy.mjs');

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

// --- writeToolInCall: JSON-RPC inspection ---
const rpc = (name, args) =>
  Buffer.from(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } }));

check('direct read call passes', writeToolInCall(rpc('autotask_search_tickets', {})), null);
check('direct write call caught', writeToolInCall(rpc('autotask_create_ticket', {})), 'autotask_create_ticket');
check('raw_request caught', writeToolInCall(rpc('autotask_raw_request', {})), 'autotask_raw_request');
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
check('docs: checklist query hits core-objects doc', coreHits[0]?.name, 'autotask-core-objects.md');
const schedHits = searchDocs('recurring monthly schedule', 3);
check('docs: schedule query hits schedules doc', schedHits[0]?.name, 'schedules-and-recurring-work.md');
const timeHits = searchDocs('log time entry billable', 3);
check('docs: time query hits time-entries doc', timeHits[0]?.name, 'time-entries-and-billing.md');
check('docs: nonsense query returns nothing', searchDocs('zzzqqq xyy', 3).length, 0);

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
check('merge: JSON tools/list gains docs tool', mergedJson.result.tools.some((t) => t.name === 'autotask_docs_search'), true);
check('merge: original tools preserved', mergedJson.result.tools.some((t) => t.name === 'autotask_search_tickets'), true);

const sseList = 'event: message\ndata: ' + jsonList + '\n\n';
const mergedSse = await mergeDocsToolIntoToolsList(fakeUpstream('text/event-stream', sseList));
check('merge: SSE tools/list gains docs tool', mergedSse.includes('autotask_docs_search'), true);

const other = await mergeDocsToolIntoToolsList(fakeUpstream('application/json', '{"jsonrpc":"2.0","id":1,"result":{}}'));
check('merge: non-tools/list passes through (null)', other, null);

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
