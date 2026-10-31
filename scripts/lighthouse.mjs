// Lighthouse (mobile) on the five pages, using Playwright's Chromium. Prints the four category scores.
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { serve } from './serve.mjs';
const pages = ['/', '/lab/', '/lab/ch-001/', '/advisory/', '/about/'];
const srv = await serve('dist', 4324);
const chrome = await launch({ chromePath: process.env.CHROME_PATH || chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
const out = process.argv[2] || 'reviews/shots';
mkdirSync(out, { recursive: true });
const rows = [];
let min = 100;
for (const p of pages) {
  const r = await lighthouse(`http://localhost:4324${p}`, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] });
  const c = r.lhr.categories;
  const s = Object.fromEntries(Object.entries(c).map(([k, v]) => [k, Math.round(v.score * 100)]));
  rows.push([p, s.performance, s.accessibility, s['best-practices'], s.seo]);
  min = Math.min(min, s.performance, s.accessibility, s['best-practices'], s.seo);
  writeFileSync(`${out}/lh${p.replace(/\//g, '_')}.json`, r.report);
}
console.log('| Page | Performance | Accessibility | Best practices | SEO |\n|---|---|---|---|---|');
for (const r of rows) console.log(`| ${r.join(' | ')} |`);
await chrome.kill(); srv.close();
const floor = Number(process.env.LH_FLOOR || 90);
if (min < floor) { console.error(`FAILED: a Lighthouse score is below ${floor}`); process.exit(1); }
