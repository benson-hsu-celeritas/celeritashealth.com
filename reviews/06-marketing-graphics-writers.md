# 06. Marketing, graphics and writers panels, red-teamed

Date: 1 Nov 2026. Subject: iteration 4 as built (commit 997a494, PR 3, unmerged). Three panels, then two red teams over the panels and the site, then the murder board. Conclusions only.

Panel: a marketing strategist whose practice is one-person expert consultancies; a web designer briefed for one or two distinctive ideas rather than a tasteful average; three writers in one brief (nonfiction editor, expert-services copywriter, plain-language editor). Red team: one on copy and marketing against the repo's facts and gates, one on the design ideas against the components and the brand rules.

## Verdicts

**Marketing.** The site informs and does not convert: who and to whom land on screen two, what is sold on screen three, the kind of price never, and the only action on any page is "Write to me at TBD". The offer shape (three reads and a day rate) is what solo advisors who close publish; silence on price is its one fault, and that is owner decision TBD 44. The Lab is an asset for funds (it is why the link gets forwarded), a secondary asset for consulting partners (it does not answer rate, availability or references), and mixed for health systems (a committee can read two retired papers as an error rate; CH-003 is the entry that converts a CMIO). Three TBDs to close before anything else: the email address (5), CH-004 as a two-page PDF so a writing sample exists before December (49), and fee floors with the consulting terms (44 and 45).

**Graphics.** "Clean, not yet distinctive." Two ideas offered: a specimen sheet opening the Lab on the six drawings, and "red means caught", one inline rubric tick wherever a check found an error. Three smaller moves: the verdict word at the size of the title on entry pages, a stage glyph that collapses the flowsheet's four columns on phones, and the colophon as a dated row carrying the page's placeholder count.

**Writers.** Iteration 4 broke its own rules in seven places: two commitments in the passive (the footer disclosure on 21 pages, "Conflicts disclosed"), three fragments, "in writing" twice on Advisory, a Record lede that narrates its own format, and stage backgrounds that read as CV shorthand. Ten line edits, one verdict sentence (CH-001), ten microcopy strings, and a must-not-touch list that matches review 05's.

**Red team, copy.** The word caps sit two to eleven words above the build, so every addition needs a budget. A prefilled mailto cannot exist while the email is TBD. The positioning statement is rejected on four counts: "ten business days" is tier 2 only, "built the same kind of tool" is false for most tools a buyer brings, "unlike a consulting team" attacks the Project row's buyer, and it is the Moore template. "A sepsis alert, an ambient scribe, a deterioration score" implies lab evidence on scribes that does not exist. "Questions answered for 30 days" and "the same day" are terms the owner has not given. The Fee column of TBDs contradicts the plan's "no prices". One identical call to action on ten pages is the repetition tell from review 04. Five things neither panel saw: McKinsey and Bain print on Home with no marker while Advisory and About carry one on the same fact; the offers table has no row a company can buy though the seat rule names companies; "Celeritas Health LLC" is hard-coded in the footer and absent from content; the Home sample markers do not link to the December dates; the story's "sixty" and "four billion" are covered only by the TBD line beneath it.

**Red team, design.** The specimen sheet invents an asset: of six drawn entries, one (Pathways, CH-001) reads a data file; the others carry constants typed into the component. Each panel would repeat a drawing already on the same page, Pathways' stroke falls under one pixel at six across, and the flowsheet drops a screen. Rejected. The inline red tick fails its own test (a 2px bar reads as a cursor, the only legend is on CH-001, and one mark would carry two meanings: machine catches and the owner's reconciliation). The rule behind it is right, and the leaks are elsewhere: every OG image sets the verdict over a red rule, and the CSS token comment still calls red a verdict colour. The one thing to promote before adding anything: the Pathways field, the only drawing with 150 data points behind it, sits as the last card on the wall, below the fold.

## Decisions

Adopted for iteration 5, ranked by effect:

1. The Pathways field to the Lab's first screen under the proof line, at text-column width, with its figcaption and a link to CH-001; the CH-001 card drops its drawing so nothing appears twice on a page.
2. Red only where a check caught something: recolour the OG verdict rule, fix the token comment, and gate `var(--alert)` to the wordmark, the signature drawings and the Reveal.
3. Copy: "retiring two of my own papers" for "the retractions"; CH-006's title gains "that"; the Funds door and the offers summary get their verbs, the summary ending "consulting partners by the day or by the project"; the three stage backgrounds open on their year; "I disclose conflicts on every engagement."; the Record lede loses its format sentence; the medical-affairs line as two sentences; tier 2 scope "The four-stage memo: a verdict, what it will cost you, and what the committee will want before it signs. One revision round."; CH-001's reasoning without the cleft; the project row as "A physician on your project".
4. Advisory: the 90-day credit as a row under the red-flag read, Tier and For columns kept, no Fee column; the method line as a paragraph under the heading "How a read runs"; the lede reordered to lead with the deliverable; page titles that name what is sold.
5. Home: "You name the tool: a sepsis alert, say."; a scope-call line under "Email me" linking to the Advisory contact block; the sample markers linked to the samples section; the McKinsey and Bain marker added to the person block; the Home cap raised to 480 for those lines.
6. Lab: "Newest entry" for "Last updated"; screen-reader stage names on lit cells only; the stage glyph on the flowsheet under 760px in CSS only, DOM unchanged, with one visible key line; the verdict word with its period in the flowsheet; the verdict on entry pages at the title's size.
7. Microcopy: "Six more entries are in progress"; the no-match line; periods on all scope cells; CH-005's venue as TBD; the legal entity name moved from the footer component to content.
8. An RSS feed of published entries, named in the pace sentence.
9. Colophon: "N placeholders on this page", computed after the build and before the gate, omitted when the count is the footer's own three.

Rejected: the positioning statement and its short form; the Fee column; the 30-day term; dropping Tier and For; "From the lab" and "Two samples, due in December" as headings; plural filter labels; "Nearest thing: CH-003"; the "live before launch" parenthesis; "the same day"; the inline red tick; the stage glyph on entry pages; the specimen sheet; a call to action on every page.

## Owner decisions raised

- TBD 39 stands: the footer disclosure is doc-fixed in the passive; the writers want it first person. Amend the doc, or keep.
- TBD 43: the marketing positioning statement is recorded in the panel file as an alternative; rejected as copy.
- TBD 44, 45, 49, 5: fees and terms, consulting terms, the CH-004 PDF, the email address, in that order of commercial effect.
- TBD 56: which offer a company buys, or a sentence saying it buys none.
- TBD 57: the verb for the fifteen guidelines (co-author or panel member), used in all three places.
- TBD 17: the legal entity name, now read from content.

## Gates for iteration 5

All iteration 4 gates; Home cap 480; `var(--alert)` only in Wordmark, signatures and Reveal; no drawing twice on one page (CH-001 on /lab/); the RSS feed lists only published entries; axe clean both modes.

## What iteration 5 changed (built 1 Nov 2026)

Lab: the Pathways field (150 released pathways, 71 rubric ticks where an internal gate caught something) opens the page under the proof line, with its figcaption and a link to CH-001; the CH-001 card drops its drawing; the flowsheet collapses its four stage columns into a four-square glyph under 760px with a visible key line, carries the verdict word with its period, and reads the stage name to a screen reader only where lit; "Newest entry"; an RSS feed at /rss.xml named in the pace sentence. Red: the OG verdict rule is slate, the token comment no longer names a verdict, and the gate restricts `var(--alert)` to the wordmark, the drawings and the Reveal. Copy: the ten writers' edits as ruled (the footer disclosure excepted, TBD 39), CH-001's reasoning, the project row as "A physician on your project", the method line as a paragraph under "How a read runs", the Advisory lede leading with the deliverable, page titles naming what is sold, the 90-day credit as a table row, periods on every scope cell, CH-005's venue as TBD. Home: "a sepsis alert, say", the Funds door with its verb, the McKinsey and Bain marker, the sample markers linked to the samples section, a scope-call line under "Email me"; 476 words in the main column, cap raised to 480 (Advisory to 900) for those lines. Entry pages set the verdict at the title's size. The colophon counts the page's placeholders after the build, linked to the first, and says nothing when the footer's own three are all there are. Gates and axe pass in both modes; Lighthouse not re-run. Owner decisions in TBD 56 to 58.
