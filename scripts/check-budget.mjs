// Script budget: every JS byte a browser can load, summed, under 150 KB.
// External bundles count once; inline scripts count for the heaviest page.
// Raster budget: every drawn figure under 80 KB, so a phone over 4G is not asked to wait for a picture.
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const LIMIT = 150 * 1024, FIG_LIMIT = 80 * 1024;
let total = 0; const rows = []; let inlineMax = 0, inlinePage = '';
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); const s = statSync(p);
  if (s.isDirectory()) walk(p);
  else if (p.endsWith('.js') && p.startsWith('dist/_astro')) { rows.push([p, s.size]); total += s.size; }
  else if (p.endsWith('.html')) { const n = (readFileSync(p, 'utf8').match(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g) || []).reduce((a, m) => a + m.length, 0); if (n > inlineMax) { inlineMax = n; inlinePage = p; } }
} })('dist');
for (const [p, s] of rows.sort((a, b) => b[1] - a[1])) console.log(`  ${String(s).padStart(7)}  ${p}`);
console.log(`  ${String(inlineMax).padStart(7)}  inline scripts on the heaviest page (${inlinePage})`);
total += inlineMax;
console.log(`Script total: ${total} bytes (${(total / 1024).toFixed(1)} KB) of ${LIMIT / 1024} KB`);
let bad = total > LIMIT;
if (existsSync('dist/figures')) for (const f of readdirSync('dist/figures')) {
  const s = statSync(join('dist/figures', f)).size;
  console.log(`  ${String(s).padStart(7)}  dist/figures/${f}${s > FIG_LIMIT ? '  OVER' : ''}`);
  if (s > FIG_LIMIT) bad = true;
}
if (bad) { console.error('FAILED: budget exceeded'); process.exit(1); }
