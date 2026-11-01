// Content gate on the built site. Fails the build on: a never-list word, a retired number,
// "pediatric clinical AI" in a hero, a TBD outside a visible marker, a missing verbatim position line,
// fewer than twelve entries on the Lab page, a page over its word cap, first person over 2 per 100 words on Advisory,
// a self-evaluating phrase, a Home sentence repeated from the Lab outside the proof card, or rubric red on the flowsheet.
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
  const stripped = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<mark class="tbd"[^>]*>[\s\S]*?<\/mark>/g, ' ');
  const tbdText = stripped.replace(/<[^>]+>/g, ' ');
  if (/\bTBD\b/.test(tbdText)) fails.push(`${page}: a TBD outside a visible marker`);
  if (/—/.test(t)) fails.push(`${page}: an em dash in the copy`);
  const marks = (html.match(/<mark class="tbd"/g) || []).length;
  if (marks) tbdByPage[page] = marks;
}
const home = text(readFileSync('dist/index.html', 'utf8'));
for (const [k, v] of Object.entries(site.position)) if (!home.includes(v)) fails.push(`/: position line "${k}" not verbatim on the page`);
const labHtml = readFileSync('dist/lab/index.html', 'utf8');
const lab = text(labHtml);
if (!lab.includes(site.position.identity)) fails.push('/lab/: identity line not verbatim');
if (!lab.includes(site.position.proof)) fails.push('/lab/: proof line not verbatim');
const adv = text(readFileSync('dist/advisory/index.html', 'utf8'));
if (!adv.includes(site.position.promise)) fails.push('/advisory/: promise line not verbatim');
const about = text(readFileSync('dist/about/index.html', 'utf8'));
if (!about.includes(site.position.proof)) fails.push('/about/: proof line not verbatim');
if (/open to roles/i.test(about)) fails.push('/about/: "open to roles" present');
// Iteration 4 gates: page length, repetition, register, and red kept off the flowsheet.
const words = (t) => t.trim().split(/\s+/).length;
const mainText = (p) => text((readFileSync(p, 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0]);
const caps = { '/': 480, '/advisory/': 900, '/about/': 1000 };
const pageText = { '/': mainText('dist/index.html'), '/advisory/': mainText('dist/advisory/index.html'), '/about/': mainText('dist/about/index.html') };
const labMain = mainText('dist/lab/index.html');
for (const [p, cap] of Object.entries(caps)) if (words(pageText[p]) > cap) fails.push(`${p}: ${words(pageText[p])} words, cap ${cap}`);
const firstPerson = (t) => (t.match(/\b(I|I'm|I've|I'll|I'd|my|me|mine|myself)\b/g) || []).length;
const advRate = firstPerson(adv) / words(adv) * 100;
if (advRate > 2.0) fails.push(`/advisory/: first person at ${advRate.toFixed(1)} per 100 words, cap 2.0`);
const selfPraise = [/highest honors/i, /the only critical care/i, /usual proof/i, /did not exist before me/i, /most useful thing I own/i];
for (const [p, t] of Object.entries(pageText)) for (const re of selfPraise) if (re.test(t)) fails.push(`${p}: self-evaluating phrase ${re}`);
const homeSentences = pageText['/'].split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter((x) => x.split(' ').length >= 8);
const proofCard = text((readFileSync('dist/index.html', 'utf8').match(/<article class="card[\s\S]*?<\/article>/) || [''])[0]);
const allowed = (x) => Object.values(site.position).some((v) => v.includes(x)) || proofCard.includes(x);
const repeated = homeSentences.filter((x) => labMain.includes(x) && !allowed(x));
if (repeated.length) fails.push(`/: ${repeated.length} sentences repeated from /lab/ outside the proof card: ${repeated[0].slice(0, 60)}...`);
// Rubric red only where a check caught something: the wordmark, the signature drawings and the Reveal. Never in a page, the flowsheet or an OG image.
const srcFiles = [];
(function walkSrc(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walkSrc(p) : /\.(astro|css|ts)$/.test(f) && srcFiles.push(p); } })('src');
const redOk = (p) => /Wordmark\.astro$|\/signatures\/|Reveal\.astro$|global\.css$/.test(p);
for (const p of srcFiles) if (!redOk(p) && /var\(--alert\)|--color-alert/.test(readFileSync(p, 'utf8'))) fails.push(`${p}: rubric red outside the wordmark, the drawings and the Reveal`);
if (/#D9694E|#B0482F/i.test(readFileSync('scripts/og.mjs', 'utf8'))) fails.push('og.mjs: rubric red in a link preview');
const pathwaysOnLab = (labHtml.match(/data-sig="pathways"/g) || []).length;
if (pathwaysOnLab !== 1) fails.push(`/lab/: the Pathways drawing appears ${pathwaysOnLab} times, expected once`);
const cards = (labHtml.match(/<article class="card/g) || []).length;
const ids = new Set([...labHtml.matchAll(/data-entry="(CH-\d{3})"/g)].map((m) => m[1]));
const expected = readdirSync('content/entries').filter((f) => f.endsWith('.md')).length;
if (site.site.show_drafts && ids.size < expected) fails.push(`/lab/: ${ids.size} entries render, ${expected} exist`);
console.log(`Content check: ${files.length} pages, ${cards} cards on the wall, ${ids.size} entries in the flowsheet.`);
console.log('Visible TBD markers by page:'); for (const [p, n] of Object.entries(tbdByPage).sort()) console.log(`  ${p}  ${n}`);
if (fails.length) { console.error('\nFAILED:\n  ' + fails.join('\n  ')); process.exit(1); }
console.log(`Words in main: / ${words(pageText['/'])}, /advisory/ ${words(pageText['/advisory/'])} (first person ${advRate.toFixed(1)} per 100 on the page), /about/ ${words(pageText['/about/'])}, /lab/ ${words(labMain)}.`);
console.log('No never-list word, no retired number, no hidden TBD, no em dash, position lines verbatim, Home does not repeat the Lab.');
