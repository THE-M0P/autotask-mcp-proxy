#!/usr/bin/env node
/**
 * scrape-entities.mjs — build-time scraper for the Autotask REST API entity docs.
 *
 * Fetches every `*Entity.htm` page from the official Autotask Developer Help,
 * converts each to clean markdown (description, path, capabilities, parent/child,
 * URLs, non-queryable fields, and the full field table), and writes them to
 * docs/entities/<Entity>.md so `autotask_docs_search` / `autotask_docs_get` can
 * serve them.
 *
 * Zero dependencies. Node 18+. Re-runnable (overwrites output).
 *
 *   node scripts/scrape-entities.mjs                  # scrape all entities
 *   node scripts/scrape-entities.mjs Tasks TimeEntries  # scrape a subset
 *
 * Output: docs/entities/*.md  (committed to the repo — the searchable corpus)
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

// Exported for test.mjs (parsing is pure — no network in the unit tests).
export { stripTags, rawCellAfterLabel, capabilities, description, children, urls, fields, toMarkdown };

const BASE = 'https://autotask.net/DeveloperHelp/Content/APIs/REST';
const OVERVIEW = `${BASE}/Entities/_EntitiesOverview.htm`;
const OUT_DIR = fileURLToPath(new URL('../docs/entities/', import.meta.url));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { 'User-Agent': 'autotask-mcp-proxy-docs/1.0 (build-time scrape)' };

async function get(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

// ------------------------------------------------------------- html helpers
function stripTags(s, noSpace = false) {
  return String(s ?? '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, noSpace ? '' : ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#160;/g, noSpace ? '' : ' ')
    .replace(/[\u200B\uFEFF]/g, '') // zero-width spaces Autotask embeds in URLs
    .replace(noSpace ? /[ \t]+/g : /\s+/g, ' ')
    .trim();
}

/**
 * Raw HTML of the cell that follows a label row in a 2-col table.
 * Anchored on the label being a COMPLETE cell (">Label</td>" or
 * ">Label:</p></td>") so body text that mentions the word (e.g. "Parent
 * relationship") doesn't false-match. Colon and <p> wrapper are optional.
 */
function rawCellAfterLabel(html, label) {
  // Label cell may be bare (">Parent</td>"), colon-suffixed (">Can Create: </td>"),
  // or <p>-wrapped ("><p>Entity Path:</p></td>"). Allow all three.
  const re = new RegExp(`>\\s*(?:<p[^>]*>)?\\s*${label}\\s*:?\\s*(?:</p>)?\\s*</td>[\\s\\S]*?<td[^>]*>([\\s\\S]*?)</td>`, 'i');
  const m = html.match(re);
  return m ? m[1] : '';
}

function hasCheckmark(cellHtml) {
  return /CheckMark\.png/i.test(cellHtml);
}

/**
 * Capability flags. Two layouts exist:
 *   A (most entities): "Can Create:" label in a <td>, value cell has CheckMark.png
 *   B (a few, e.g. Companies/Resources): "Can Create" in a <th> header row, with a
 *     values row below holding the text "true"/"false"
 */
function capabilities(html) {
  const caps = { create: false, delete: false, query: false, update: false };
  // Layout A
  for (const cap of ['Create', 'Update', 'Query', 'Delete']) {
    if (hasCheckmark(rawCellAfterLabel(html, `Can ${cap}`))) caps[cap.toLowerCase()] = true;
  }
  // Layout B (only if A found nothing)
  if (!Object.values(caps).some(Boolean)) {
    const headerRe = /<tr[^>]*>\s*(?:<th[^>]*>[\s\S]*?<\/th>\s*)+<\/tr>/gi;
    for (const hm of html.matchAll(headerRe)) {
      const headers = [...hm[0].matchAll(/<th[^>]*>\s*Can (Create|Delete|Query|Update)\s*<\/th>/gi)]
        .map((m) => m[1].toLowerCase());
      if (!headers.length) continue;
      const after = html.slice(hm.index + hm[0].length);
      const rowMatch = after.match(/<tr[^>]*>([\s\S]*?)<\/tr>/i);
      if (!rowMatch) continue;
      const cells = [...rowMatch[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => stripTags(c[1]));
      headers.forEach((h, i) => {
        if (i < cells.length && /^true/i.test(cells[i])) caps[h] = true;
      });
      break;
    }
  }
  return caps;
}

/** The first descriptive paragraph after the H1 title. */
function description(html) {
  const m = html.match(/<h1[\s\S]*?<\/h1>\s*(?:<p[^>]*>)?([\s\S]*?)(?:<\/p>|<div|<table)/i);
  if (!m) return '';
  return stripTags(m[1])
    .replace(/^About this entity\s*/i, '')
    .replace(/^This entity describes/i, 'Describes');
}

/** Child entity names: anchor links in the cell after "Children". */
function children(html) {
  const cell = rawCellAfterLabel(html, 'Children');
  return [...cell.matchAll(/<a[^>]*>([^<]+)<\/a>/gi)].map((a) => stripTags(a[1])).filter(Boolean);
}

/** Access URLs: <br>-delimited entries in the cell after "URLs". */
function urls(html) {
  return rawCellAfterLabel(html, 'URLs')
    .split(/<br\s*\/?>/i)
    .map((u) => stripTags(u))
    .filter((u) => u && /\(/.test(u));
}

// A cell is a field TYPE if it is EXACTLY one of Autotask's type tokens
// (anchored both ends, so a description that merely starts with a type word
// — e.g. "Currency on the Details panel…" — is not misread as the type).
const TYPE_RE = /^(integer|decimal|long|boolean|datetime|double|float|picklist|text|longtext|currency|percent|time|date|string(\s*\(\d+\))?)$/i;

/**
 * Field tables. Autotask uses up to TWO tables per entity, with two column
 * layouts:
 *   - [name, type, (padding…)]            → Layout A
 *   - [name, description, type, (pad…)]   → Layout B
 *   - a narrow [name, description]        → note/condition
 * Detect the type cell by pattern (works for both layouts); any other
 * non-padding cell is the note. Merge by field name.
 */
function fields(html) {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
  const byName = new Map();
  for (const r of rows) {
    const cells = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((c) => stripTags(c[1]));
    if (cells.length < 2) continue;
    const name = cells[0];
    if (!/^[a-z][a-zA-Z0-9]{2,}$/.test(name)) continue;
    if (/^(true|false)$/.test(name)) continue; // capabilities values row, not a field
    const rec = byName.get(name) || { name, type: '', notes: '' };
    for (let i = 1; i < cells.length; i++) {
      const c = cells[i];
      if (!c) continue;
      if (!rec.type && TYPE_RE.test(c)) rec.type = c;
      else if (!rec.notes && c !== rec.type) rec.notes = c;
    }
    byName.set(name, rec);
  }
  return [...byName.values()];
}

// ------------------------------------------------------------- markdown out
function toMarkdown(name, html) {
  const caps = capabilities(html);
  const capLine =
    `create ${caps.create ? '✓' : '—'} · update ${caps.update ? '✓' : '—'} · ` +
    `query ${caps.query ? '✓' : '—'} · delete ${caps.delete ? '✓' : '—'}`;
  const parent = stripTags(rawCellAfterLabel(html, 'Parent'));
  const childList = children(html);
  const urlList = urls(html);
  const noQuery = stripTags(rawCellAfterLabel(html, 'Fields that cannot be queried'))
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  const fieldList = fields(html);

  let md = `# ${name}\n\n`;
  const desc = description(html);
  if (desc) md += `${desc}\n\n`;
  const entityPath = stripTags(rawCellAfterLabel(html, 'Entity Path'), true);
  if (entityPath) md += `- **Entity path:** \`${entityPath}\`\n`;
  md += `- **Capabilities:** ${capLine}\n`;
  if (parent) md += `- **Parent:** ${parent}\n`;
  if (childList.length) md += `- **Children:** ${childList.join(', ')}\n`;
  if (urlList.length) {
    md += `\n## Access URLs\n\n`;
    md += urlList.map((u) => `- \`${u}\``).join('\n') + '\n';
  }
  if (noQuery.length) {
    md += `\n## Fields that cannot be queried\n\n`;
    md += noQuery.map((f) => `- \`${f}\``).join('\n') + '\n';
  }
  if (fieldList.length) {
    const anyNotes = fieldList.some((f) => f.notes);
    md += `\n## Fields (${fieldList.length})\n\n`;
    md += anyNotes ? '| Field | Type | Notes |\n|---|---|---|\n' : '| Field | Type |\n|---|---|\n';
    for (const f of fieldList) {
      if (anyNotes) {
        const notes = f.notes.replace(/\|/g, '\\|').replace(/\n/g, ' ');
        md += `| \`${f.name}\` | ${f.type} | ${notes} |\n`;
      } else {
        md += `| \`${f.name}\` | ${f.type} |\n`;
      }
    }
  }
  return md + '\n';
}

// ------------------------------------------------------------- main
async function main() {
  const only = process.argv.slice(2); // optional subset of entity names
  console.log(`Fetching entity overview: ${OVERVIEW}`);
  const overview = await get(OVERVIEW);

  // (name, filename) pairs from the overview's entity list
  const pairs = [...overview.matchAll(/<a[^>]+href="([A-Za-z0-9_]+Entity\.htm)"[^>]*>([^<]+)<\/a>/gi)]
    .map((m) => ({ file: m[1], name: stripTags(m[2]) }))
    .filter((p) => p.name && !p.name.includes(' ')); // entity names have no spaces
  const uniq = [...new Map(pairs.map((p) => [p.name, p])).values()];
  console.log(`Found ${uniq.length} entities.`);

  const targets = only.length ? uniq.filter((e) => only.includes(e.name)) : uniq;
  if (!targets.length) {
    console.log(`None of [${only.join(', ')}] matched. Available (first 20): ${uniq.map((e) => e.name).slice(0, 20).join(', ')}…`);
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  let ok = 0;
  const failed = [];
  const CONC = 4;

  for (let i = 0; i < targets.length; i += CONC) {
    const batch = targets.slice(i, i + CONC);
    await Promise.all(
      batch.map(async (e) => {
        try {
          const html = await get(`${BASE}/Entities/${e.file}`);
          const md = toMarkdown(e.name, html);
          writeFileSync(path.join(OUT_DIR, `${e.name}.md`), md);
          ok++;
        } catch (err) {
          failed.push(`${e.name}: ${err.message}`);
        }
      })
    );
    if (i + CONC < targets.length) await sleep(120); // be polite
  }

  console.log(`\nWrote ${ok}/${targets.length} entity docs to ${OUT_DIR}`);
  if (failed.length) {
    console.log(`Failed (${failed.length}):`);
    failed.forEach((f) => console.log(`  - ${f}`));
  }
}

// Only scrape when run directly (not when imported by test.mjs).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
