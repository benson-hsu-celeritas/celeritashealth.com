// Link previews: one OG image per page, set in the site's own self-hosted fonts, rendered by the same Chromium the audits use.
// Home carries the identity line; the Lab the proof line; Advisory the promise; About the name; each published entry its ID, date, verdict and title.
import { chromium } from 'playwright';
import { readFileSync, readdirSync, mkdirSync } from 'node:fs';
import { serve } from './serve.mjs';
const site = JSON.parse(readFileSync('content/site.json', 'utf8'));
const wm = readFileSync('brand/wordmark-reversed.svg', 'utf8').replace(/<metadata>[\s\S]*?<\/metadata>/, '').replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const fm = (f) => { const y = readFileSync(f, 'utf8').split('---')[1]; const g = (k) => (y.match(new RegExp(`^${k}: "(.*)"$`, 'm')) || [])[1] ?? ''; return { id: g('id'), date: g('date'), title: g('title'), verdict: g('verdict'), draft: /^draft: true$/m.test(y) }; };
const entries = readdirSync('content/entries').filter((f) => f.endsWith('.md')).map((f) => fm(`content/entries/${f}`)).filter((e) => !e.draft);
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const fmt = (d) => { const m = d.match(/^(\d{4})-(\d{2})-(\d{2})$/); return m ? `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}` : d; };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const pages = {
  home: { big: site.position.identity, small: site.site.domain },
  lab: { eyebrow: 'Clinical AI Lab', big: site.position.proof, small: site.site.domain + '/lab/' },
  advisory: { eyebrow: 'Advisory', big: site.position.promise, small: site.site.domain + '/advisory/' },
  about: { eyebrow: 'About', big: site.signature_block.name + '. ' + site.signature_block.line, small: site.site.domain + '/about/' },
};
for (const e of entries) pages[e.id.toLowerCase()] = { eyebrow: `Clinical AI Lab · ${e.id} · ${fmt(e.date)}`, big: e.title, verdict: e.verdict, small: site.site.domain + `/lab/${e.id.toLowerCase()}/` };
const html = (p) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Newsreader;src:url(/fonts/newsreader-latin-wght-normal.woff2) format("woff2-variations");font-weight:200 800}
@font-face{font-family:"JetBrains Mono";src:url(/fonts/jetbrains-mono-latin-wght-normal.woff2) format("woff2-variations");font-weight:100 800}
@font-face{font-family:"Alegreya Sans";src:url(/fonts/alegreya-sans-latin-400-normal.woff2) format("woff2");font-weight:400}
html,body{margin:0}body{width:1200px;height:630px;background:#2E3A47;color:#F6F4EE;font-family:Newsreader,serif;display:grid;grid-template-rows:auto 1fr auto;padding:64px 72px;box-sizing:border-box}
.wm{width:420px}.eyebrow{font:500 20px/1.3 "JetBrains Mono",monospace;letter-spacing:.06em;text-transform:uppercase;color:#C9D1DB;margin-top:28px}
.big{font-weight:400;font-size:${p.big.length > 110 ? 44 : p.big.length > 70 ? 52 : 60}px;line-height:1.12;letter-spacing:-.012em;margin:0;align-self:center;max-width:1056px;text-wrap:balance}
.foot{display:flex;justify-content:space-between;align-items:flex-end;font:20px/1 "JetBrains Mono",monospace;color:#C9D1DB}
.v{font-weight:700;color:#F6F4EE;border-top:3px solid #D9694E;padding-top:10px;font-size:26px}
</style></head><body>
<div><svg class="wm" viewBox="0 -20 11506 760" xmlns="http://www.w3.org/2000/svg">${wm}</svg>${p.eyebrow ? `<div class="eyebrow">${esc(p.eyebrow)}</div>` : ''}</div>
<h1 class="big">${esc(p.big)}</h1>
<div class="foot"><span>${esc(p.small)}</span>${p.verdict ? `<span class="v">Verdict: ${esc(p.verdict)}</span>` : ''}</div>
</body></html>`;
mkdirSync('dist/og', { recursive: true });
const srv = await serve('dist', 4329);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.route('**/__og/*', (route) => route.fulfill({ contentType: 'text/html', body: html(pages[route.request().url().split('/__og/')[1]]) }));
for (const key of Object.keys(pages)) {
  await page.goto(`http://localhost:4329/__og/${key}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `dist/og/${key}.png`, type: 'png' });
}
await browser.close(); srv.close();
console.log(`OG images written: ${Object.keys(pages).join(', ')}`);
