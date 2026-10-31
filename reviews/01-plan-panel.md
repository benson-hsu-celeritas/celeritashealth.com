# Panel 1 on the plan (Oct 29, 2026, before any code)

Two panels and a red team on BUILD_PROMPT.md sections 1 to 7, the plan of record (Claude Doc "Celeritas Health: Advisory and Labs Plan", Oct 28 to 29) and the content files. Decisions only. Where the plan doc and the repo disagreed, the doc won and the repo was changed; those rows say so.

## Panel A, design and craft

| Voice | Finding | Decision | Where it lands |
|---|---|---|---|
| Brand designer | The wordmark is a vector lockup with the rubric on the C and H; a header retyped in a webfont would break the brand rule | The master SVG is inlined once as a symbol sprite and referenced; light mode uses the master (rubric C and H), dark mode uses the reversed file; below 120 px the avatar replaces it | `Wordmark.astro`, `Header.astro`, `Footer.astro` |
| Brand designer | Twelve verdict chips in rubric would make the accent decoration | Chips are neutral ink; the rubric appears at most once per card, as the 2 px rule above the verdict, and in the reveal's catches; nowhere else | `VerdictChip.astro`, `Reveal.astro`, `tokens.css` |
| Brand designer | The signature block must never touch the wordmark | Name in Alegreya Sans, hairline, descriptor line "Advisory \| Clinical AI lab" beneath; wordmark sits on its own row | `SignatureBlock.astro` |
| Editorial typographer | "Editorial serif" is unnamed; the plan doc's brand board settled Newsreader | Newsreader for the identity line and promise, JetBrains Mono for IDs, dates and numbers (tabular figures), Alegreya Sans for everything else; self-hosted latin subsets, swap, two preloads | `fonts.css`, `BaseLayout.astro` |
| Editorial typographer | A 25-word identity line as the single largest text wraps to six lines on a phone | The name sentence is the largest line; the rest of the identity line follows at the next size; `clamp()` from 28 px at 390 px to 52 px at 1280 px; measure capped at 28 ch for the hero and 68 ch for body | `Hero.astro` |
| Information designer | Signatures for the scheduler and Aequitas have no data file; drawing them would be invented data | A signature is drawn only from a file or from numbers on the card itself: pathways line field (pathways.json), fabrication bars (CH-002 numbers), access-gap marks (CH-005), citation trace as a two-by-two of pathway by reviewer (CH-003), readiness scale (CH-006). CH-008 and CH-010 get the typographic treatment until a data file exists; the agent flow is drawn from CH-010's own named functions only | `Signature.astro`, `signatures/*.astro`, TBD.md |
| Information designer | The four-stage rail must read the same everywhere or it is not one device | One `StageRail` component, labels always visible, lit stages by the entry's `stages`; the same component heads the Advisory cells and the write-up sections | `StageRail.astro` |
| Information designer | Offers as a table scroll sideways on a phone | Offers render as a definition list on phones and a four-column grid from 760 px; no horizontal scroll anywhere | `Offers.astro` |
| Interaction and motion designer | Drag-to-reveal fails under a thumb and is invisible to a keyboard | The reveal is a native range slider over the excerpt lines, with Previous and Next catch buttons; arrow keys move it; drag is the slider; with JavaScript off the final annotated state is shown | `Reveal.astro` |
| Interaction and motion designer | "One motion moment per section" needs a rule or it drifts | Signatures draw once on entry (CSS stroke-dashoffset, class added by IntersectionObserver); cards lift 2 px on hover; GSAP ScrollTrigger is used for exactly one moment, the four-stage strip sweep on Home, loaded lazily after idle and skipped under reduced motion; nothing else animates | `motion.ts`, `StageStrip.astro` |
| Accessibility specialist | Rubric #B0482F on the charcoal canvas is about 3:1, below AA for text | In dark mode the alert token lightens to a rubric tint checked at or above 4.5:1 against the canvas; the rubric itself stays only on the master wordmark, which dark mode does not use | `tokens.css`, CI contrast check |
| Accessibility specialist | Filters, the reveal and the doors must work by tap, keyboard and with JavaScript off | Filter buttons carry `aria-pressed` and are hidden without JavaScript, where every card shows; the slider is a labelled native input with a live region; skip link; 2 px focus rings in both modes; 44 px targets | `Wall.astro`, `Reveal.astro`, `global.css` |
| Accessibility specialist | Phone over 4G: fonts and the headshot are the weight | Fonts swap, latin only; the headshot is served as 480 and 960 px WebP through `astro:assets`; no other raster image on the site | `BaseLayout.astro`, `Hero.astro` |
| Front-end performance engineer | A 150 KB script budget with GSAP and ScrollTrigger leaves about 35 KB | Zero JavaScript by default; three small island scripts (filters, reveal, motion) and GSAP only on Home, lazily; CI sums `dist/**/*.js` and fails above 150 KB | `astro.config.mjs`, `scripts/check-budget.mjs`, CI |
| Front-end performance engineer | Build-time inline SVG for 150 pathway lines is about 15 KB of HTML per page that shows it | Acceptable on Lab and the CH-001 write-up; the Home card uses the same drawing; no client-side drawing anywhere | `signatures/Pathways.astro` |
| Front-end performance engineer | OG images rendered from text need fonts the CI runner does not have | OG images are composed from the brand SVG only (reversed wordmark on slate) and rasterised with sharp at build; no text outside the vector | `scripts/og.mjs` |

## Panel B, market and message

| Voice | Finding | Decision | Where it lands |
|---|---|---|---|
| Healthcare marketing strategist | Two doors above the fold must say what is behind them or the wall reads as a portfolio | Lab door: "dated entries, each ending in a verdict", with the count derived from the entries; Advisory door: "decision memos and diligence reads, fixed fee"; both visible at 390 px before the first scroll | `Hero.astro`, `Doors.astro` |
| Advertising creative director | The three-second test is on a phone, from an emailed link | At 390 px the first screen holds the signature block, the identity line and the two doors; the promise and proof follow at once; the headshot moves below the doors on phones and beside them from 900 px | `Hero.astro`, Phase C screenshot at 390 px |
| Conversion and web analytics lead | The one action is email; everything else is reading | One `mailto:` with a prefilled subject per page and per tier, "Reply within two business days" beside it; no form, no backend; no analytics at launch (no banner, no script); sample downloads are TBD markers until the memos exist, never dead links | `Contact.astro`, `Offers.astro`, TBD.md |
| SEO and content strategist | The site should rank for the name and for "clinical AI advisory" and "clinical AI diligence", and not for pediatric protocol or product queries | Per-page titles and descriptions from `site.json`; JSON-LD Person, Organization and WebSite; write-ups at `/lab/ch-001/` with canonicals; drafts `noindex` and out of the sitemap; redirects for `/research` and `/codebluepeds` to the Lab; `headshot.jpg` kept at its path | `BaseLayout.astro`, `astro.config.mjs`, `public/` |
| Executive recruiter | Recruiters check scale, dates and currency, then look for a CV | About opens with the two-minute story; roles carry dates and scale; current roles sit beside the executive roles; a "CV (PDF)" link is a TBD marker until supplied; no "open to roles" line anywhere; dates on every card | `about.astro`, TBD.md |
| Health system CMIO | Wants to know what arrives: a verdict with governance requirements, and that nothing here is a clinical document | The Rules cell names the five frameworks and says the memo attaches governance requirements; a standing line on the Lab and every pathway card: "candidate, not clinical" | `advisory.astro`, `lab.astro`, CH-001 |
| PE operating partner | The red-flag read is the first call; the seat rule decides whether he can use you | Tier 1 listed first with turnaround leading; the seat rule and the will-not list sit directly under the offers; the sample diligence read is labelled hypothetical in its title and status | `Offers.astro`, `Rules.astro`, CH-012 |
| Consulting partner | Needs a forwardable method and a day rate he can quote without a price | The Advisory page prints cleanly (print stylesheet); the method section has its own anchor; the project tier reads "by the day or by the project" with the fee line; the audience is "consulting partners", never "firms" | `advisory.astro`, `print.css`, `site.json` |
| Pharma medical affairs lead | Looks for guideline standing, publication count and a verification standard for referenced content | The Evidence paragraph keeps its own anchor on About; papers list title, venue and status only; nothing is added that the content files do not hold | `about.astro` |

## Red team

Rows marked "doc wins" keep wording the plan of record fixed verbatim; the objection is recorded for Benson, not applied. Rows marked "applied" changed a content file or the build spec before any code.

| Attack | Decision | Where it lands |
|---|---|---|
| Both doors and both downloads point at unwritten draft entries (CH-011, CH-012) | Applied: doors link to the Advisory offer the entry samples; a draft never gets a download link; the "read first" entry shows as a visible TBD until it exists | `Doors.astro`, `Offers.astro`, site.json |
| No way to buy: email and LinkedIn are TBD everywhere | Rendered as styled TBD markers; the PR states the site is not shippable until TBD 5 closes | `Contact.astro`, PR |
| The definition of done wants twelve cards with chips; six are drafts and the prompt review hides drafts | Applied: all twelve render on this branch, drafts visibly labelled "Draft" with their TBDs, excluded from Home, the sitemap and indexing; `site.json.show_drafts` turns them off for launch; CH-011 and CH-012 show a TBD chip | `Wall.astro`, `Card.astro`, site.json, sitemap |
| The visible wall is four Papers, one Build, one Memo, no Decision, all pediatric: a research portfolio | Advisory door above the fold, verdict and value line on every card, the Decision filter states honestly how many are in preparation; a real Decision card before launch is Benson's open item | `Wall.astro`, To do |
| Pediatric-only evidence under a "clinical AI" promise | Applied with a flag: one line on the Lab and Advisory pages, "The lab's evidence to date is pediatric. The method is not." Added to site.json for Benson to approve or strike | site.json `lines.lab_scope` |
| "Five clinical AI tools" counts a scheduler, an education builder and a nonprofit back office | Doc wins; recorded for Benson | content/about.md, site.json pivot story |
| "Measured them" holds for one of five tools | Doc wins; recorded for Benson; the TBD numbers on CH-007 to CH-010 stay visible | TBD.md 8 |
| Disclosure line claims a filing that is not yet filed, next to employer names | Doc wins ("disclose, then proceed"); TBD 4 keeps the wording open; employers appear only in dated roles and the employers line | site.json, about.md |
| CH-001 text contradicts its own drawing: 160 approved dispositions, 150 released pathways, 106 of 217 passing gates, 79 of 150 passing phase 2 | Applied: each number now names its denominator; the signature legend states 150 released, phase 2 and phase 4 counts from pathways.json; a TBD asks why 160 approved became 150 released | CH-001.md, `Pathways.astro` |
| CH-004 prints six retired strings and would fail its own build check | Applied: the retired figures are described, never printed | CH-004.md |
| Self-graded verdicts, including Build on the author's own nonprofit | Applied: "How entries are written" defines a verdict as what a buyer should do, not a grade of the work; CH-010 stays (doc lists it as a launch card), objection recorded | site.json `how_entries_written` |
| "Equity in both" names a nonprofit | Applied: replaced with a TBD for the ownership and compensation wording of each organization | about.md Disclosures |
| The reveal's data file is entirely TBD and the source folder is not in the repo | Built on the structure; every TBD line renders as a visible TBD inside the reveal; a banner says the excerpt is pending from the deposit; the final state is static with JavaScript off | `Reveal.astro`, TBD.md 11 |
| Never-list hits: "Consulting firms" twice, "audit" twice in CH-002 | Applied: "Consulting partners"; "deployed library check", "the verification script" | site.json, CH-002.md |
| Hero too long for a phone with two doors above the fold | First screen at 390 px: signature block, name, identity line, two doors; promise and proof immediately after; all four lines verbatim on the page | `Hero.astro`, Phase C |
| "Pediatric intensivist" sits above "Clinical AI lab" in the signature block | The rule is read as the phrase "pediatric clinical AI" never appearing in a hero; the build check greps for that phrase | `scripts/check-content.mjs` |
| Recruiters as audience plus a CV link reads as a job seeker | Doc wins (About is the recruiter's page); no "open to roles" line; CV link stays a TBD; recorded | about.astro |
| "Moat" and the pivot story read as a retreat | Doc wins; recorded | site.json pivot_story |
| Framework name-dropping reads as a compliance vendor; DECIDE-AI was completed for a retired paper | Frameworks named once, in the Rules cell, as the frame a memo is written against; the about.md line stays as content; recorded for Benson | `advisory.astro` |
| Day rate contradicts "no hourly billing" | Doc wins (by the day or by the project, fee quoted in writing); recorded | site.json offers |
| "No current vendor ties" beside a promise to sell to companies | Content stays; past advisory is listed as past; the disclosure line is identical in site.json and about.md; recorded | about.md |
| "The practice sells decisions, not software" | Doc wins | site.json |
| A hypothetical diligence read as the fund product | Doc wins; the title and status say hypothetical and sample | CH-012.md |
| Papers under review read as settled findings | Status ("Preprint, under review") moves into the card header beside the type; numbers sit under the DOI link; CH-006 keeps its numbers with "no preprint posted" visible in the header | `Card.astro` |
| Numbers on cards outside the reconciled list | `reconciled_numbers_only` governs site copy; card numbers come from the card's own DOI or stated source and sit under it; the hard build failure is the retired list | `scripts/check-content.mjs` |
| The CH-002 before/after bar mixes denominators (460 identifiers vs 298 references) | Applied: two labelled measurements, no "0.4%" | `Fabrication.astro` |
| "First" and "only" claims; the former-employer anecdote | Doc wins (two-minute story draft 1); recorded for Benson | about.md |
| Tools "live" and "in use" beside "never used in patient care" | Content stays; CH-007 keeps "candidate, not clinical" in its Rules; recorded | CH-007.md |
| "Last updated" renders TBD | Applied: derived at build from the newest non-draft entry date; the site.json field is ignored | `lab.astro`, `Hero.astro` |
| Signatures demanded for cards without data | Panel A decision: typographic treatment without a file | `Signature.astro` |
| Dark canvas by default vs the prompt review's system-preference decision | Follow system preference, with a manual toggle stored locally; light is the print mode | `ThemeToggle.astro` |
| Eight filters over six cards, and JavaScript off | Filters stay (doc); counts shown; with JavaScript off every card shows and the filter bar is hidden | `Wall.astro` |
| Offers table at 390 px | Panel A decision: stacked on phones | `Offers.astro` |
| Two sets of doors on Home | Doc has both; the second set sits after the cards as "who this is for" | `index.astro` |
| "Four public Zenodo records" vs five DOIs listed | The fifth (21198499) is not linked until the median correction is uploaded; it prints unlinked with its TBD; removed from CH-005 frontmatter | CH-005.md, about.astro |
| Forward-looking lines ("Q1 2027 lab entry", "optional 2027 work") | Doc wins; "forthcoming" never appears; recorded | about.md |
| Section 1 item 4 has no single quotable line | The quotable line is `site.json.position.method`; it renders verbatim | `Hero.astro` |
| The one hard-coded PMID in the reveal is unverified | Added to TBD.md for the omit-then-verify check before the excerpt ships | TBD.md |
| TBD.md is incomplete | Regenerated in Phase D from the build's TBD grep | TBD.md |
| McKinsey and Bain named before clearance | Content stays (CV facts, doc lists them); TBD 13 stays open | about.md |
