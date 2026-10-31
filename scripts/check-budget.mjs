// Script budget: every JS byte a browser can load, summed, under 150 KB.
// External bundles count once; inline scripts count for the heaviest page.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const LIMIT = 150 * 1024;
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
if (total > LIMIT) { console.error('FAILED: script budget exceeded'); process.exit(1); }
