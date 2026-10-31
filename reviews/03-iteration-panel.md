# Iteration 2 panels, murder board and red team (Oct 31, 2026, on the merged Phase C build)

Owner's brief for this pass: remove every sign of machine-made prose or template structure; make structure and strategy his own; add figures made in Canva; cut the formalities so the site puts its best foot forward. Four panels reviewed the merged build, a murder board resolved their proposals into one surviving set, a hostile red team attacked that set before it was built, and the red team ran once more on the fixed build. Conclusions only. The four position lines were not touched. Rows marked "record" are wording the plan of record fixed; they are listed for Benson in `TBD.md` and not applied.

## Panel: speechwriting and storytelling (speechwriter, narrative editor, plain-English editor)

| Finding | Decision | Where it landed |
|---|---|---|
| One voice in two places (the story's second paragraph, the pivot lines) and a committee everywhere else; every section clears its throat with an eyebrow and a heading that restates it | Applied: eyebrows survive only as data labels (ID, type, Verdict, Worth to a buyer); section headings carry content | every page |
| The identity line repeated seven times on Home | Applied as a byline on rows and cards (the line is first on every card, doc rule); the repetition is recorded | `Card.astro`, `Ledger.astro`, TBD 25 |
| "The practice", "adjudication", "research artifacts", "placeholders", house rules printed as reader copy | Applied: first person where the fact is his; builder vocabulary removed; the six-rule list replaced by one paragraph (`how_i_write`) | `site.json`, Lab page |
| The best scene (the two a.m. call) is on the fourth page behind a TBD; the story should open on it and Home should carry it | Recorded (depends on TBD 2) | TBD 31 |
| Card reasoning and value lines are conclusions with the moment removed | Applied: CH-001 to CH-006 reasoning, value and body sections rewritten in the past tense with a subject, merged line by line with the tells panel and corrected by the red team | `content/entries` |
| Offers, steps and the will-not list written as signage | Applied: steps and will-not as sentences with a subject; offer scopes as sentences | `site.json` |
| Headings: "What you can buy", "How an engagement runs", "Same evidence, different door", "Why this practice", "Bio by the four stages" | Applied: "Three reads and a day rate", "From first call to memo", "If you run a health system, a fund, or an engagement", "How I got here", "What I have done, by stage" | `site.json.headings` |
| Entry section headings as four questions | Recorded (structural device named in `how_entries_written`) | TBD 29 |
| "No clock runs inside an engagement" for the fee line | Killed: reads against the day rate; the current line is precise | |
| Cut the Aequitas separation line from the footer | Recorded (brief section 4 lists it) | TBD 37 |

## Panel: marketing (positioning strategist, creative director, conversion lead, three buyers)

| Finding | Decision | Where it landed |
|---|---|---|
| The site is organised by the conventions of a consultant's site, not by its own instrument, the verdict; the first verdict appears four phone screens down | Applied: the newest verdict sits in the first screen; Home's six newest entries are a summary of verdicts (ruled rows, CH-001 in its full card); the Lab opens with a flowsheet of every entry by date, stage and verdict | `Hero.astro`, `Ledger.astro`, `Wall.astro` |
| Doors as outlined boxes, three persona cards, four offer cards with a button each, a four-column footer | Applied: doors as two ruled rows; who-for as three ruled rows; offers as one table with one call in the fold and one contact block; footer as a three-row colophon carrying every item the brief lists | Home, Advisory, `Footer.astro` |
| The same missing email rendered nine times on Advisory | Applied: once in the contact block and once in the colophon | Advisory |
| Drafts as compact cards with "Provisional verdict" chips are the loudest machine signal on the site | Applied: six greyed rows in the flowsheet under "In progress", provisional verdict in muted mono, no chips, no cards; twelve entries still render with a verdict each | `Wall.astro` |
| Disclaimers in the fold of Lab and Advisory before the first proof | Applied: `lab_scope` moves under the wall and to the end of the method section; the candidate line leaves the Lab fold and the sidebars of entries that are not about pathways | Lab, Advisory, entry pages |
| CH-004 is the closest thing on the site to what a memo reads like and nothing points the CMIO at it | Applied: one line under the samples (`microcopy.published_memo`), worded by the red team | Advisory |
| Nav "Lab · Advisory · About" without Home | Modified: "Home · Lab · Advisory · About" (the red team: the signature block is not a recognisable home link on a phone) | `Header.astro` |
| The lab flowsheet doubles as the filter | Modified: the filters stay as an underlined mono index above the table, hidden without JavaScript; the table is static HTML and collapses to stacked rows under 760 px | `Wall.astro` |
| Four stages moved below the ledger; pivot above the cards; "Not yet on this site" blocks; a format specimen; the About bio as a flowsheet; the Advisory algorithm with lab IDs | Killed or deferred by the murder board (brief order, mock risk, hard-coded labels, desktop-only cost) | |

## Panel: machine-prose tells and template chrome (forensic editor, senior web designer)

| Finding | Decision | Where it landed |
|---|---|---|
| 93 tells across the pages: reflexive tricolons, "not X but Y", colon-chained fragments, the "For a health system: ... For a fund: ..." mould on five cards, summarising last sentences, self-narration ("This site is how I do that", "This card reports") | Applied where the line is repo content (two stage questions, three stage backgrounds, doors, offers, steps, will-not, the two TBD 21 lines, card and body copy on CH-001 to CH-006, CH-011 and CH-012 value lines, About bullets); recorded where doc-fixed (pivot story, proof line, method line, rules.sells, disclosure, story closings) | `site.json`, `about.md`, `content/entries`, TBD 30 to 34, 39 |
| Twenty chrome tells: eyebrow + H2 + grid, 3 px radii, pills, 01 to 04 bento cells three times, identical section spacing, dashed sample cards, the pill toggle, the four-column footer, documentation-site entry layout | Applied: zero radius everywhere; the toggle as mono text "Light / Dark"; the stage rail as filled and empty squares; cards with a 2 px top rule separated by the grid's hairlines; numbered findings; numerals 01 to 04 only inside the method figure; samples as hairline rows; colophon footer. Deferred: margin section numbering, the two-column document grid, the case-report entry layout | `global.css`, components |
| Formality: the same "candidate, not clinical" sentence three times on the Lab page; the six-rule style guide published as content; "shown with their placeholders"; the footer's five sentences | Applied as above; the footer keeps the brief's five items in two short rows plus a Disclosures link | |
| British "Colour mode" | Applied: "Color mode" | `site.json.microcopy` |

## Panel: graphic design (editorial art director, information designer, brand designer)

| Finding | Decision | Where it landed |
|---|---|---|
| Every unit of content poured into the same container; no figure explains a mechanism; the one drawing no one else has (the pathways field) sits inside one card | Applied: four figures (below) and the ledger, flowsheet and colophon devices | |
| Figure 1, the method as a pathway algorithm: four numbered boxes, a decision diamond, four exits | Applied as inline SVG with HTML labels from `site.json`, under the method line on Home, horizontal from 900 px and vertical below; the GSAP moment draws its connectors; static under reduced motion. The rubric rule under the diamond was removed (red team: no verdict is reached in a legend) | `MethodAlgorithm.astro` |
| Figure 2, the fail-closed pipeline (CH-001): Canva, two exports | Applied in Canva (design `DAHZm3dxXfg`, page 2), light export; the dark variant is derived from the light file by `scripts/figures-dark.mjs` so there is one source. Gate order corrected per the red team: three internal gates, disposition, 150 released, then peer comparison on the released set; escalation column in rule colour with rubric arrows only; counts beyond the front matter live in the HTML notes; the 160 to 150 step carries its TBD in the notes | `public/figures/ch-001-pipeline-*.png`, CH-001 front matter, `Figure.astro` |
| Figure 3, the engagement as a flowsheet: four steps, a day axis, one bar per read ending in a page glyph | Applied as inline SVG from `site.json`; ink only; single page per read; the tier 1 credit as a footnote; caption "Turnaround in business days from the written scope." | `EngagementFlowsheet.astro` |
| Figure 4, omit-then-verify (CH-002): Canva, two exports | Applied in Canva (page 4); title "Omit, then verify"; the naive path as a muted box marked "not used" (no strike-through, no rubric, per the red team); the 458 of 460 and 279 of 298 figures in the HTML notes | `public/figures/ch-002-omit-then-verify-*.png`, CH-002 front matter |
| Figure 5, the annotated card | Deferred: callout geometry in two layouts; on a phone it degrades to the list it replaces | |
| Chrome: section numerals in the margin, a 240 px margin column, DOIs as footnotes, the verdict chip in the margin | Deferred (desktop-only, large) | |
| Refuse list (icons, stat tiles, logo rows, timelines, mock memo pages, red as decoration, generated imagery) | Held | |

## Murder board: decisions on the conflicts

1. Home after the identity line: newest verdict row, two ruled doors, promise, proof, method with the rail, then the four-stage figure, then the summary of verdicts with CH-001 as the full card, then the pivot paragraph, then the who-for rows. The brief's order holds.
2. Drafts: greyed rows in the Lab flowsheet, no chips, no cards. TBD 22 stays Benson's switch.
3. Headings as listed above; "The seat rule" rather than "Where I sit" (red team: plain nouns, "I" only where he reports something he did).
4. Entry section headings unchanged.
5. Card copy merged line by line; the red team's corrections taken on CH-001 Rules and value, CH-002 reasoning, Worth doing and Is it working, CH-003 reasoning and value, CH-004 Worth doing and value, CH-005 value, CH-006 value and Is it working.
6. `lab_scope` out of both folds; `candidate_not_clinical` only on CH-001, CH-003 and CH-005 sidebars and in the footer line "Nothing on this site is a clinical document."
7. Footer as a colophon with every brief item.
8. Figures: four this pass, two in Canva, two inline SVG.
9. Nav keeps Home; the toggle is mono text in the header.
10. Offers as one table with a fold line (`offers_summary`).
11. Stage questions 2 and 4 rewritten; 1 and 3 keep the phrases that tie to the promise.
12. Numerals 01 to 04 live only inside Figure 1.
13. Rubric in figures: Figure 2's catch arrows only.
14. About opens as a byline over the story; one stage rail as section nav; bullets stay.

## Red team, third pass, on the proposals (applied before the build)

| Attack | Decision |
|---|---|
| The rewrites introduce their own tells: folksy register, "Then I looked at mine", "the week someone checks one", "No clock runs", "Two manuscripts went", "A Haiku reviewing a Sonnet", "that is your finding", "anyone can rerun it" | Applied: each replaced with the red team's line or the current line |
| Over-claims: "both missed" on CH-003; a cause for blind spots; retirement attributed to the pipeline; "re-test every quarter" as a habit; "the model never supplies an identifier" as a figure title; "$55.31 as the cost of a validated library" | Applied: CH-003 names who omitted, who missed and who caught; no cause asserted; "I checked my own papers against their files and retired two"; "Verdicts are re-tested quarterly"; figure title "Omit, then verify"; value line "API dollars and reviewer hours, not platform spend" |
| Figure 2 drew peer comparison as a gate before disposition on all 217; "43 no source found" read as a failure; "approved" read as clinical approval | Applied: order corrected; "43 had no comparator at 18 peer sources (CH-005)"; the note "Approved is a pipeline disposition, released as a candidate for physician adjudication. No pathway is approved for clinical use." |
| Figure 4's strike-through generalised one measurement to a class | Applied: a muted "not used" box; the number and status in the notes |
| Rubric on Figure 1's diamond and Figure 3's page glyphs | Applied: removed |
| A Lab flowsheet with eight columns cannot render at 390 px | Applied: stacked rows under 760 px with the stage cells labelled |
| A verdict chip in the first screen without an object | Modified: the hero row carries the verdict, ID, date and the title; the ledger rows carry the reasoning |
| Nav without Home; toggle in the footer | Applied: Home stays; the toggle stays in the header |
| Identity line as 11.5 px mono | Applied: Alegreya Sans at 14 px, one paragraph |
| Link previews were a wordmark on slate with no text | Applied: one OG image per page in the site's own fonts (identity line on Home, proof on the Lab, promise on Advisory, name on About, ID, date, verdict and title on each published entry), rendered by `scripts/og.mjs` |
| Image weight on a phone | Applied: a raster budget in `scripts/check-budget.mjs` (80 KB per figure); the four figures are 12 to 20 KB |
| Canva PNG labels cannot be linted | Held as a known cost: labels are three words or fewer, numbers only those in front matter, alt text and notes restate them |

## What the iteration changed

Content: `site.json` (two stage questions, four stage backgrounds, three door lines, three offer lines, steps, will-not, two TBD 21 lines, contact reply, new `nav`, `headings`, `microcopy`, `offers_summary`, `how_i_write`, `figures` keys), `about.md` (five bullets, the papers sentence, the medical-affairs heading and paragraph), CH-001 to CH-006 (reasoning, value, body sections; figure front matter on CH-001 and CH-002), CH-011 and CH-012 (value lines). Structure: hero with the newest verdict and ruled doors; method algorithm; summary of verdicts; who-for rows; Lab flowsheet with draft rows; offers table; seat rule; engagement flowsheet; sample rows; byline About with a rail nav; colophon; dated 404. Chrome: zero radius, text toggle, square rail, top-rule cards in a hairline grid, numbered findings. Figures: two Canva PNGs with derived dark variants, two inline SVGs. Gates: the content check now also fails on an em dash and on fewer than twelve entries on the Lab page; the budget check adds the raster limit.

## Red team, fourth pass, on the rendered build

Verified holding from the third pass: the newest verdict in the first phone screen; ruled doors; the position lines verbatim where section 4 places them; the method algorithm; the summary of verdicts with CH-001 as the full card; the Lab flowsheet with greyed draft rows; one offers table, one call, one contact block; the colophon; the two Canva figures beside their notes with the TBD visible; the OG images; twelve entries, no never-list word, no retired number, no em dash; axe clean; Lighthouse 100 on five pages in both modes.

| Attack | Decision |
|---|---|
| "Verdicts are re-tested quarterly." on a lab whose last entry is July | Applied: "A verdict is dated, and a re-test gets its own entry." |
| CH-003 Rules still drew a general law from one case | Applied: "Here the reviewer and the generator came from the same model family. One case cannot say whether that is why." |
| "I published a verification standard": a preprint under review is not published and one person's method is not a standard; "Two of three briefs" had no card and no deposit; the Q1 2027 entry written as a fact | Applied: "I wrote omit-then-verify, a verification method ... the paper is under review"; the briefs sentence cut until the entry exists; the 2027 entry as a due date |
| "A lab number goes on this site only if a deposited file regenerates it" (so the CV counts on About are not read as rule breaks) | Applied in CH-004 Rules |
| McKinsey and Bain cleared on Advisory, held as TBD on About | Applied: the same marker on the Advisory line until TBD 13 closes |
| The CH-004 pointer promised a memo with a cost and a governance list | Applied: "It will not show you a cost or a governance list; it shows how a verdict is reasoned." |
| The "Funds" door blended the five-day and ten-day reads | Applied: "A diligence read in ten business days, or a red-flag read in five." |
| Residual tells: a trailing-participle close on CH-005, the colon-label mould on CH-006 and a CH-002 note, a verbless numeral sentence on CH-002, "without favor", questions included twice, "by the day or by the project" twice in one row, "Two sample memos" over a memo and a read, a stacked tricolon in stage question 2, three counts of six on one Lab screen, a floating dollar sign before a TBD on About, "a real group" in a draft title | Applied, each with the red team's line |
| The hero rail with all four squares filled posed as data; CH-004's signature printed a number at display size (a stat tile); "The whole wall" dressed as a call to action; the method line set as a second hero on Advisory; a type filter that could only produce an empty state; the figure caption repeating the status line; the four tiers listed three times on Advisory | Applied: rail removed from the hero; the typographic signature at text size; a ruled-row link; the method line at lede size; zero-count type filters not rendered and the live region quiet until a filter is used; caption carries the title only; one footnote under the table and the project line hidden under 760 px |
| Phone: the chart's unit label collided with the 15 tick; "Build or buy" wrapped on every rail; no face on Home; the first figure lazy-loaded into a blank; twelve stacked flowsheet rows with the drafts as tall as the evidence | Applied: unit label removed (the caption carries it); natural-width rail columns with no wrapping; a 72 px headshot beside the identity line below 900 px; the first figure eager with high priority; draft rows drop their stage cells under 760 px |
| Desktop: the diamond sat under box 01; the CH-001 signature stretched to 600 px in the ledger; the dashed project rule ran past 15 days; the entry prose ran in the centre column with both margins empty | Applied: the exit block sits under box 04 with a stub from the box; the signature capped at the text measure; the dashed rule stops at 15; the prose starts at the left margin below the figure row |
| Dark mode: `theme-color` followed the OS, not the toggle; "Draft" set in the alert colour; the lockup's rubric lightens with the page | Applied: a media-less theme-color meta set by the toggle; "Draft" in muted. Recorded: the lockup's accent in dark mode (TBD 42) |
| Validity: the offers table named "Includes"; duplicate `id="rules"` on Advisory; the wordmark symbols defined twice per page; footnote links named "1"; the axis SVG not hidden from assistive tech | Applied: caption from `headings.advisory_offers`; the seat rule section is `#seat`; `<defs>` only in the header's lockup; `aria-label="Note 1"`; `aria-hidden` on the axis |
| Formality: the reveal link under three rules; the seat rule before the engagement and the samples | Applied: the reveal link directly under the wall; the seat rule between the samples and the contact block, as the brief orders |
| The thread flashed drawn, hidden, drawn on Home load; the entry label floated above box 01 at 390 px | Applied: CSS hides the thread only while the script can run and reveals it if the import fails; the vertical thread starts above the label |
| The "Preprint" links, the Advisory cells' repeated IDs, the CH-003 check marks, the offers as a stacked list, the hero first screen, the colophon, the reveal placeholders | Held as built |
