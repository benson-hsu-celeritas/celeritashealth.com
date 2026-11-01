# 05. Voice panel: first person, bragging, length, feel, and the weight of Home

Date: 1 Nov 2026. Subject: iteration 3 as built (PR 3, unmerged). Owner's note: "too much 'I' statement. Too much bragging? Be data driven, event driven. Be short, succinct. More modern/clean feel?" Then: Home feels heavy on Lab and repeats Advisory and the bio; it should lead with advisory and bio, with the Lab as evidence, and not repeat.

Panel: a CMIO who chairs an AI governance committee; an evidence-first editor; a design director; a dissent brief. Conclusions only.

## Measurements

| page | words | first person per 100 words | first-person sentences | of which brag | credential claims, any grammar | screens at 1280 / 390 |
|---|---|---|---|---|---|---|
| / | 1005 | 2.2 | 18 | 1 | 4 | 6.9 / 7.9 |
| /advisory/ | 1050 | 3.0 | 20 | 3 | 11 | 7.4 / 8.5 |
| /about/ | 1243 | 2.3 | 20 | 3 | about 55 | 6.6 / 9.0 |
| /lab/ | 1302 | 1.0 | 11 | 0 | 2 | 5.2 / 10.6 |

Of Home's 50 sentences, 20 also print on /lab/ (289 words; the five cards and the CH-001 ledger come to 602 of 1005 words with their stat lines), 4 on /advisory/, 0 on /about/ verbatim; the pivot story and the three doors paraphrase About and the offers. Home renders 28 distinct type styles; JetBrains Mono carries 39 percent of its text nodes. The `68ch` measure renders at about 83 characters per line because `ch` is the zero width. Rubric red appears on the wordmark, under six flowsheet verdicts (`Wall.astro`), and in three drawings.

## Verdict, four to nothing

The owner is partly right and the diagnosis is off by one word. The problem is CV register and repetition, not the pronoun. Of 58 first-person sentences on Home, Advisory and About, 32 own a commitment, a decision or a mistake, and 7 brag. All 7 sit in two places: the four stage backgrounds on Advisory (six consecutive credential sentences, one job stated three times) and About's by-stage inventory, which carries about 55 claims and all six evaluative words on the site ("first", "did not exist before me", "highest honors", "the only critical care physician in North or South Dakota", "the most useful thing I own", "the usual proof that I can write to a reporting standard") and almost no "I". Removing "I" would not remove the bragging. The sentences that made yesterday's buyers forward the link are all first person.

## Rules adopted

1. Keep first person when the predicate is a commitment, a decision or a mistake. Recast to year, thing, number when it is a title, a count or an award. The adjective leaves with the credential. A mistake is never passive. Never "we" for Celeritas.
2. Any sentence that already opens on a number or a date stays as written.
3. No stat strips, no fragment copy, no removal of hedges, no category nouns ("data-driven", "rigorous", "evidence-based"). Each feeds a machine tell named in review 04.
4. Each fact appears at full length on one page and is linked from the others.
5. The four position lines keep their grammar. A third-person recast is a headline fragment and loses the sentence that says who does the work. Recorded as owner decision TBD 43.

## Home: decision

Rebuilt in the owner's order, about 420 words, 3 screens at 1280 and about 4.5 at 390:

1. Hero: the four position lines (protected), portrait. No "Latest" strip.
2. The offer, as terms, not adjectives: three doors with the days and the fixed fee in one block, one sentence naming the four stages and linking to the method. No Cells, no Offers table, no stage questions.
3. The person, four lines of year, thing, number, linking to the two-minute story. The pivot story leaves Home; About carries it.
4. The evidence: one card, CH-004, with its verdict block as written (the one thing a vendor would never publish about itself; two of four reviewers chose it unprompted), then one line of counts (six entries, 25 Feb to 10 Jul 2026, six in progress; Build 3, Wait 2, Skip 1; latest CH-003, Wait) and the link to the wall. The other four cards and the CH-001 ledger leave Home. CH-011 takes the proof slot when it exists.
5. Contact.

Rejected: offer-first with no proof item (a brochure); keeping the Lab first (the owner's instruction is newer than the plan); two cards instead of one.

This reverses the plan of record's Home order (two doors, stage strip, six newest cards, story) and reads CLAUDE.md's "the lab is the brand" as: the brand is an advisor whose claims can be checked, and the Lab is the receipt. Owner decision TBD 51: amend the plan, or reverse.

## Advisory: decision

Target about 850 words from 1050. The four stage backgrounds become year, thing, number (merged from the buyer's and editor's drafts; the McKinsey and Bain TBD stays visible). The third statement of the data job goes. "From the lab" lists cite two entries per stage. The sample paragraph drops to two sentences. Terms of business keep their "I": the fund partner asked for more of them. The promise line stays (gate).

## About: decision

Target about 950 words from 1243. The two-minute story keeps its first person and its two-in-the-morning sentence as written. Cut: "The job did not exist before me"; the Dakota clause; "highest honors (Fuqua Scholar)"; the "usual proof" sentence; the 110 publications, 55 talks and fellowships lines, which move to the CV PDF (TBD) with the NIH P20 line kept. "What I have done, by stage" and "Now" become one dated ledger: year, event, number, stage in the margin, about 320 words from 506. Medical affairs becomes one line under Papers.

## Lab: decision

CH-001's card drops to the same stat count as the others (194 to about 90 words). "How I write these" becomes "Sources and pace", 59 words. Cards go from ten elements to six: meta, title, drawing, three findings, verdict with its sentence, link. The red rule under flowsheet verdicts goes. Entries unchanged.

## Design: decision

"Modern and clean" does not conflict with the editorial register. Adopted: two typefaces on a five-step scale with mono only for IDs, dates and numerals; one text column at 60ch (fixing the `ch` bug); rules only inside tables plus one 2px rule per page; rubric red only on the wordmark and the catches; no eyebrow labels; quiet Offers and engagement tables; one TBD style; method as a numbered list without the diamond. Kept: serif, paper canvas, drawings, photograph, verdict as a word, visible TBD, colophon. Deferred as owner decision TBD 52: a one-row header with the name moved into the hero (the plan prescribes the signature block in the header). Rejected: everything in the template list (gradients, glass, shadowed cards, icon rows, centred hero with two buttons, pills, logo strip, hover lifts, fade-ins) and any stat strip. References for the owner: Works in Progress, Our World in Data, Stripe Press.

## Owner decisions raised

- TBD 43 stands: position lines keep first person unless the owner rules otherwise.
- TBD 51: Home order reversed from the plan of record; amend the doc or reverse.
- TBD 52: header as one row, name into the hero.
- TBD 53: About's publication, talk and fellowship counts move to the CV PDF, which is TBD.
- TBD 54: the year of the return to the bedside is not on the site; the story cannot open on it without one.

## Gates for iteration 4

Home under 450 words and no sentence repeated from /lab/ except the CH-004 card; Advisory under 900; About under 1000; first person per 100 words at or below 2.0 on Advisory; zero evaluative adjectives on the owner's own work; rubric red in `Wall.astro` removed; measure at 60ch; type styles on Home at or under 12; all iteration 3 gates unchanged.

## What iteration 4 changed (built 1 Nov 2026)

Home: hero with the four position lines and portrait; the offer as three rows in terms; the person in four lines linking to the story; one proof card (CH-004, CH-011 once published) with the counts, the latest entry and the link to the wall; contact. 452 words in the main column from 1005; 3.4 screens at 1280, 4.5 at 390. Advisory: stage backgrounds as year, thing, number; two entries per stage; offers scope, seat rule, will-not list, fee line and engagement step 3 without first person where the sentence was a scope rather than a commitment; 869 words, first person 1.5 per 100 on the whole page. About: story kept in the owner's voice minus "did not exist before me" and "the most useful thing I own"; the by-stage prose and "Now" replaced by a dated record of 25 lines; counts, fellowships and committee roles deferred to the CV; 998 words. Lab: cards cut to six elements, CH-001's card to the same length as the others, "Sources and pace", no red under flowsheet verdicts. Design: five-step type scale, measure at 60ch, rules only in tables plus one 2px rule per page, no italic eyebrows, plain TBD style, GSAP and the method diamond removed (script 114.6 KB to 2.4 KB). Gates added to `scripts/check-content.mjs`: word caps per page, first person on Advisory, five self-evaluating phrases, Home sentences repeated from the Lab outside the proof card, red in the flowsheet. axe clean in both modes. Lighthouse not re-run. Owner decisions in TBD 51 to 55.
