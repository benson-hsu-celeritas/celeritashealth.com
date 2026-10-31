# Build prompt: celeritashealth.com rebuild

Run this in Claude Code from the repo root on branch `rebuild-2026-12`. Phases run in order. Each panel phase writes one file to `reviews/` with conclusions only.

## 0. Read first
`CLAUDE.md`, `content/site.json`, `content/about.md`, `content/entries/*.md`, `content/data/*`, `brand/palette.json`, `TBD.md`, and the current `index.html` (to understand what is being replaced, not to keep it).

## 1. The position (verbatim, in this order, visible in the first three seconds)
1. Identity: "Benson S. Hsu, MD, MBA. Pediatric intensivist and former health system executive. I build with AI, run the data, and decide what's worth it."
2. Promise: "I help health systems, investors and companies decide which clinical AI to trust, invest in and build on, and how to get it adopted and grow it safely."
3. Proof: "Every decision is backed by a lab: builds with current models, dated, with the results reported, including what broke, and a verdict on each."
4. Method: four stages (Strategy, Build or buy, Rules, Proof); every entry and memo ends in Build, Buy, Skip or Wait.

## 2. Audience
Health system CMIOs, CEOs and CFOs; PE and VC partners; consulting partners; AI company clinical and evaluation leads; payer clinical strategy leads; pharma medical affairs and digital health leads; executive recruiters and hiring managers for senior roles. Many arrive on a phone from an emailed link. Senior, precise, honest. Never an AI startup, never a compliance or validation vendor.

## 3. Concept
"Every experiment ends in a decision." The Lab is an evidence wall of dated cards. Advisory is the verdict. The four-stage lens connects them. Three governing ideas:
1. Design the AI without designing "AI": the visual language clinicians and executives already read (guideline pages with numbered recommendations, pathway algorithms, flowsheet grids, margin annotations, citation footnotes). Editorial and spacious; never an EHR.
2. Show what validation caught: one red-family alert accent, used only where validation caught something or a verdict was reached. On CH-001 only, tap, arrow keys or drag across a real excerpt (`content/data/error-log-excerpt.json`) reveals what was caught. Tap and keyboard first.
3. One structural device: the four-stage rail on every card, the layout of the Advisory page, the section order of every write-up.

## 4. Pages (skeletons; copy comes from `content/`)
- Home: signature block; identity line largest; promise; proof; headshot; two doors (Clinical AI Lab, Advisory) above the fold; four-stage strip with the buyer's question; six newest cards; pivot story; "who this is for" doors; footer with email, disclosure, Aequitas separation, employers line, LinkedIn.
- Clinical AI Lab: identity line and "last updated"; filters (Build, Paper, Memo, Decision; four stages); the wall of 12 cards newest first; card anatomy: ID and date, type, title, identity line first, data signature, finding with numbers, stage rail, verdict chip + reasoning + value line, link to write-up; the reveal on CH-001; "how entries are written".
- Advisory: promise line; "the practice sells decisions, not software"; four cells each linking its lab cards, the Rules cell naming the regulatory frame; offers as structure (tiers 1 to 3 and the day rate: for whom, turnaround, inclusions) with no prices and the fee line; how an engagement runs in four steps; sample memos (CH-011, CH-012) as downloads; the seat rule and the will-not list; contact.
- About: two-minute story first; bio by the four stages; Now; Papers and deposits (title, venue, status; findings live on the cards); Evidence paragraph; Disclosures; contact and headshot. No "open to roles" line anywhere.

## 5. Data signatures
Small drawings from each card's own data file: `content/data/pathways.json` as a line field (one line per pathway, shaded by phase-2 pass/fail and phase-4 result); scheduler as a calendar grid; Aequitas as an agent flow; CH-002 as a before/after bar (0.4% to 93.6%); CH-005 as 150 marks with 43 lit; papers as a citation trace. Cards without data use a plain typographic treatment. Never a decorative drawing.

## 6. Type, color, motion
Viewport-scaled editorial serif for the identity line; monospace for IDs, dates, numbers, annotations; Alegreya Sans for secondary type. Palette from `brand/palette.json`: slate #2E3A47 primary, rubric #B0482F only on the master lockup's C and H and as the alert accent, neutrals as listed; deep charcoal canvas with light mode. Motion is timing: signatures draw once on entry; one motion moment per section; 2 px lift on hover; static under reduced motion.

## 7. Never
Brains, hands, globes, robots, gears, neon, glowing blobs, WebGL, stock or AI-generated images, simulated or "live" data, matrix text, the words audit / firm / wing / studio / forthcoming, any claim of certification or compliance, "pediatric" before "clinical AI" in a hero, retired numbers, the alert accent as decoration, hidden TBDs.

## 8. Phases

### Phase A. Panel 1 on the plan (before any code)
Convene two panels and a red team on sections 1 to 7 and the content files. Write `reviews/01-plan-panel.md`: decisions only, one table per panel, one for the red team, each row = finding, decision, where it lands in the build. Then apply the decisions.

Panel A, design and craft (each a distinct voice): brand designer; editorial typographer; information designer (data signatures, tables, rails); interaction and motion designer; accessibility specialist (AA, keyboard, reduced motion, phone over 4G); front-end performance engineer.

Panel B, market and message (each a distinct voice): healthcare marketing strategist; advertising creative director (does the hero stop the right person in three seconds); conversion and web analytics lead (what a visitor does next, on a phone); SEO and content strategist (what the site should rank for and what it should not); executive recruiter for senior healthcare and AI roles; a health system CMIO, a PE operating partner and a consulting partner as buyers; a pharma medical affairs lead.

Red team (hostile): finds every way the plan reads as an AI startup, a compliance vendor, a research portfolio instead of a practice, a generalist, or a job seeker; every number that is not in the reconciled list; every word on the never list; every place a phone user is lost; every claim a competitor or journalist could dispute.

### Phase B. Build
Astro scaffold; content collections for entries; components: SignatureBlock, Wordmark, StageRail, VerdictChip, Card, Wall with filters, Signature (SVG per type), Reveal, Offers, Steps, TBD marker. Light and dark modes. `public/CNAME`. GitHub Actions workflow that builds and deploys to GitHub Pages on push to `main` (do not merge). Lighthouse and axe pass in CI.

### Phase C. Panel 2 on the result (screenshots at 390 px and 1280 px, both modes)
Same two panels and red team, now on the rendered pages. Write `reviews/02-build-panel.md` (conclusions only). Apply the fixes. Repeat the red team once more on the fixed build and append its result.

### Phase D. Hand-off
Update `TBD.md` with anything new. Open a PR to `main` titled "Rebuild: lab as brand, advisory as verdict" with: what was built, the two review files, the TBD list, Lighthouse scores, and how to deploy. Stop there.

## 9. Definition of done
- Every line of section 1 appears verbatim where section 4 says.
- Twelve cards render from `content/entries`, each with a verdict chip; CH-004 shows Skip.
- No never-list word, no retired number, no hidden TBD (grep both; include the grep output in the PR).
- JS off: every page readable and navigable. Script under 150 KB. AA in both modes. Reduced motion static.
- CNAME preserved; Pages workflow green on the branch.
