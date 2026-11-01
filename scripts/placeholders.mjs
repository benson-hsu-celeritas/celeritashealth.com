// Colophon count: after the build and before the content gate, each page's footer states how many visible
// placeholders it carries, linked to the first one. Omitted when the only placeholders are the footer's own.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const site = JSON.parse(readFileSync('content/site.json', 'utf8'));
const label = site.microcopy.placeholders;
const SLOT = /\s*<span data-placeholders[^>]*><\/span>/;
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })('dist');
let touched = 0;
for (const f of files) {
  let html = readFileSync(f, 'utf8');
  if (!SLOT.test(html)) continue;
  const total = (html.match(/<mark class="tbd"/g) || []).length;
  const footer = (html.match(/<footer[\s\S]*<\/footer>/) || [''])[0];
  const own = (footer.match(/<mark class="tbd"/g) || []).length;
  if (total > own) {
    html = html.replace('<mark class="tbd"', '<mark class="tbd" id="tbd-first"');
    html = html.replace(SLOT, ` <a href="#tbd-first">${total} ${label}</a>.`);
    touched++;
  } else {
    html = html.replace(SLOT, '');
  }
  writeFileSync(f, html);
}
console.log(`Placeholder counts written on ${touched} pages.`);
