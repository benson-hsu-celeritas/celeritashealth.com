// Content gate on the built site. Fails the build on: a never-list word, a retired number,
// "pediatric clinical AI" in a hero, a TBD outside a visible marker, or a missing verbatim position line.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const site = JSON.parse(readFileSync('content/site.json', 'utf8'));
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })('dist');
const text = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');
const fails = [];
const tbdByPage = {};
const never = site.never_words.map((w) => new RegExp(`\\b${w}s?\\b`, 'i'));
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  if (/http-equiv="refresh"/i.test(html)) continue; // redirect stubs
  const t = text(html);
  const page = f.replace(/^dist/, '').replace(/index\.html$/, '') || '/';
  never.forEach((re, i) => { const m = t.match(re); if (m) fails.push(`${page}: never-list word "${m[0]}" (${site.never_words[i]})`); });
  for (const n of site.retired_numbers_never) if (t.includes(n)) fails.push(`${page}: retired number "${n}"`);
  const hero = (html.match(/<h1[\s\S]*?<\/h1>/i) || [''])[0];
  if (/pediatric\s+clinical\s+AI/i.test(text(hero))) fails.push(`${page}: "pediatric clinical AI" in a hero`);
  // Hidden TBD: any TBD in text that is not inside <mark class="tbd">
  const stripped = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<mark class="tbd"[^>]*>[\s\S]*?<\/mark>/g, ' ');
  const tbdText = stripped.replace(/<[^>]+>/g, ' ');
  if (/\bTBD\b/.test(tbdText)) fails.push(`${page}: a TBD outside a visible marker`);
  const marks = (html.match(/<mark class="tbd"/g) || []).length;
  if (marks) tbdByPage[page] = marks;
}
const home = text(readFileSync('dist/index.html', 'utf8'));
for (const [k, v] of Object.entries(site.position)) if (!home.includes(v)) fails.push(`/: position line "${k}" not verbatim on the page`);
const lab = text(readFileSync('dist/lab/index.html', 'utf8'));
if (!lab.includes(site.position.identity)) fails.push('/lab/: identity line not verbatim');
if (!lab.includes(site.position.proof)) fails.push('/lab/: proof line not verbatim');
const adv = text(readFileSync('dist/advisory/index.html', 'utf8'));
if (!adv.includes(site.position.promise)) fails.push('/advisory/: promise line not verbatim');
const about = text(readFileSync('dist/about/index.html', 'utf8'));
if (!about.includes(site.position.proof)) fails.push('/about/: proof line not verbatim');
if (/open to roles/i.test(about)) fails.push('/about/: "open to roles" present');
const cards = (readFileSync('dist/lab/index.html', 'utf8').match(/<article class="card/g) || []).length;
console.log(`Content check: ${files.length} pages, ${cards} cards on the wall.`);
console.log('Visible TBD markers by page:'); for (const [p, n] of Object.entries(tbdByPage).sort()) console.log(`  ${p}  ${n}`);
if (fails.length) { console.error('\nFAILED:\n  ' + fails.join('\n  ')); process.exit(1); }
console.log('No never-list word, no retired number, no hidden TBD, position lines verbatim.');
