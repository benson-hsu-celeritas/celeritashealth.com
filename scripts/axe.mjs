// axe-core on every built page, both colour schemes. Fails on serious or critical violations.
import { chromium } from 'playwright';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { serve } from './serve.mjs';
const axe = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const pages = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : f === 'index.html' && !/http-equiv="refresh"/.test(readFileSync(p, 'utf8')) && pages.push('/' + p.slice(5, -10)); } })('dist');
const srv = await serve('dist', 4323);
const browser = await chromium.launch();
let bad = 0;
for (const scheme of ['light', 'dark']) {
  const ctx = await browser.newContext({ colorScheme: scheme, viewport: { width: 390, height: 844 } });
  for (const p of pages) {
    const page = await ctx.newPage();
    await page.goto(`http://localhost:4323${p}`, { waitUntil: 'networkidle' });
    await page.addScriptTag({ content: axe });
    const r = await page.evaluate(() => axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] } }));
    const v = r.violations.filter((x) => ['serious', 'critical'].includes(x.impact));
    const minor = r.violations.filter((x) => !['serious', 'critical'].includes(x.impact));
    console.log(`${scheme} ${p}: ${v.length} serious/critical, ${minor.length} minor${minor.length ? ' (' + minor.map((m) => m.id).join(', ') + ')' : ''}`);
    for (const x of v) { bad++; console.log(`  ${x.impact} ${x.id}: ${x.help} — ${x.nodes.slice(0, 3).map((n) => n.target.join(' ')).join('; ')}`); }
    await page.close();
  }
  await ctx.close();
}
await browser.close(); srv.close();
if (bad) { console.error(`FAILED: ${bad} serious/critical axe violations`); process.exit(1); }
console.log('axe: no serious or critical violations.');
