// Unit tests for the entity-doc scraper's HTML parsing. Run: node test/scrape.test.mjs
//
// The scraper is a build-time tool, but it generates the searchable corpus — so
// its parsing is worth testing. These tests use small fixtures capturing both
// entity layouts Autotask uses (checkmark capabilities vs th-based true/false).
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const { capabilities, fields, description, toMarkdown, children, urls } =
  await import('../scripts/scrape-entities.mjs');

const FIX = (n) => readFileSync(path.join(fileURLToPath(import.meta.url), '../fixtures', n), 'utf8');
const layoutA = FIX('layout-a.html'); // checkmark capabilities, wide field table
const layoutB = FIX('layout-b.html'); // th-based true/false, "About this entity", no path

let failures = 0;
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  (got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)})`);
}

// --- capabilities: Layout A (checkmark images) ---
const capA = capabilities(layoutA);
check('capA: create', capA.create, true);
check('capA: update', capA.update, true);
check('capA: query', capA.query, true);
check('capA: delete (no checkmark)', capA.delete, false);

// --- capabilities: Layout B (th header + true/false values row) ---
const capB = capabilities(layoutB);
check('capB: create (true)', capB.create, true);
check('capB: delete (false)', capB.delete, false);
check('capB: query (true)', capB.query, true);
check('capB: update (true)', capB.update, true);

// --- fields: wide table gives types, narrow table gives notes, merged by name ---
const fA = fields(layoutA);
const proj = fA.find((f) => f.name === 'projectID');
check('fieldsA: projectID type from wide table', proj?.type, 'integer');
check('fieldsA: projectID note from narrow table', proj?.notes, 'On update, projectID cannot be changed.');
check('fieldsA: estimatedHours type', fA.find((f) => f.name === 'estimatedHours')?.type, 'decimal');

// --- fields: the capabilities values row (true/false) is NOT a field ---
const fB = fields(layoutB);
check('fieldsB: no "true" field', fB.some((f) => f.name === 'true'), false);
check('fieldsB: name field present', fB.some((f) => f.name === 'name'), true);
check('fieldsB: name type', fB.find((f) => f.name === 'name')?.type, 'string (100)');

// --- fields: a description that STARTS with a type word is not the type ---
const currencyHtml = `<table><tr><td>currencyID</td><td>Currency on the Details panel. A long description.</td><td>integer</td><td>&#160;</td></tr></table>`;
const curField = fields(currencyHtml).find((f) => f.name === 'currencyID');
check('fields: type-word-prefixed desc → type is integer', curField?.type, 'integer');
check('fields: type-word-prefixed desc → note is the description', curField?.notes, 'Currency on the Details panel. A long description.');

// --- description: prefix stripping ---
check('descA: "This entity describes" → "Describes"', description(layoutA).startsWith('Describes an Autotask Task'), true);
check('descB: "About this entity" stripped', description(layoutB).startsWith('The Companies entity describes'), true);

// --- children + urls ---
check('childrenA', children(layoutA), ['ProjectNotes', 'Tasks']);
check('childrenB', children(layoutB), ['CompanyAlerts', 'CompanyNotes']);
check('urlsA', urls(layoutA), ['Tasks/query (GET, POST)', 'Tasks/{id} (GET)']);

// --- toMarkdown: structure ---
const mdA = toMarkdown('Tasks', layoutA);
check('mdA: has title', mdA.startsWith('# Tasks'), true);
check('mdA: has clean entity path (no stray spaces)', mdA.includes('`/atservicesrest/v1.0/Tasks`'), true);
check('mdA: has capabilities line', mdA.includes('create ✓ · update ✓ · query ✓ · delete —'), true);
check('mdA: has parent', mdA.includes('**Parent:** Projects'), true);
check('mdA: has field table', mdA.includes('## Fields (2)'), true);
check('mdA: field row has type + note', mdA.includes('| `projectID` | integer | On update, projectID cannot be changed. |'), true);

const mdB = toMarkdown('Companies', layoutB);
check('mdB: no entity path line (source has none)', mdB.includes('Entity path'), false);
check('mdB: capabilities from th layout', mdB.includes('create ✓ · update ✓ · query ✓ · delete —'), true);
check('mdB: description cleaned', mdB.includes('The Companies entity describes an organization'), true);

console.log(failures === 0 ? '\nALL PASS (scraper)' : `\n${failures} FAILURES (scraper)`);
process.exit(failures === 0 ? 0 : 1);
