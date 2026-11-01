# Iteration 3: buyer panel and red team on "it feels like AI made it" (Oct 31, 2026, on the merged iteration 2 build)

Conclusions only. Reviewers read the rendered text and full-page captures of the live site, not the source.

## Buyer panel (four buyers, independent)

- **CMIO, 12-hospital system, chairs AI governance.** No email this week; bookmark until the sample sepsis memo (CH-011) exists. Everything on the site is the owner grading his own work; the one artifact a committee needs is dated Dec 31. Governance blockers: employer TBD, "disclosed to my employer" is not "approved", McKinsey and Bain TBD reads as an unresolved conflict, two of four papers self-retired will be framed as an error rate, "Why 160 became 150: TBD" on CH-001 is the exact question a committee asks.
- **Partner, healthcare growth equity.** Forwards the lab URL to an associate with "call him", not the offer table. The lab is credible (CH-004, "$55.31 tracked API spend; about 38 hours", "a WHO guideline, a drug monograph, a 1944 article"); the advisory page reads as a template. Wants a table of contents of a read, a price range, turnaround from data-room access, follow-up questions for 30 days instead of "one revision round", the 90-day credit as a row not a footnote, a reason for refusing expert-network calls, and a live-deal response commitment instead of "two business days".
- **Partner, strategy consultancy.** Conditional yes, pending a call and one unedited writing sample. CH-004 plus the first About paragraph decide it. Nearly stopped by: no rate basis, no availability, the Project row printing its scope twice. Wants "your template, my judgment" rather than "run on the four-stage method", CH-004 as a two-page memo PDF now, the CV PDF, "references on request", conflict check and NDA if true.
- **CEO, 3-hospital community system, on a phone.** Forwards to the CMO, barely, on the strength of the regression-to-the-mean story and "I retired them". The first screen nearly lost him: did not understand what is for sale, and "Newest verdict Wait CH-003" was the first thing after the name. The About story is the only place that sounds like a person.

## Where all six reviewers agree
1. The identity sentence printed on every card and ledger row (seven times on Home, eight on Lab) is the loudest single machine tell.
2. The site narrates its own template ("Every entry ends in a verdict", "runs in the same four sections", "written against these five"); "verdict" appeared 10 times on Home and 11 on Lab.
3. Nearly every paragraph outside the About story closes on an epigram or an "X, not Y" pair.
4. The Offers table's Project row printed "Clinical judgment on a client engagement." twice (render bug).
5. The About story's first two paragraphs are the register the site should match. Keep them.

## Red team: prose fingerprints (32 rows, applied where listed under "What changed")
Three mechanisms: closing-epigram cadence with uniform sentence length and no hedge; self-narration of the format; the repetition machine (byline, identical card anatomy, "not addressed" 35 times on Lab, four stage questions on three pages). Already human and kept: the About story, "Seven had no file", "a WHO guideline, a drug monograph, a 1944 article", "which came from the deck?", "the night it is made", "Why 160 approved became 150 released: TBD".

## Red team: visual tells (19 items)
Loudest: the repeated byline; the tracked uppercase mono label used for everything, so the verdict device marks nothing; six equal-weight Home modules at identical gaps; the scroll-reveal fade and hover lift (the fade blanked the pivot section in a full-page capture); the one component-library button on Advisory; the Cells bento grid; About opening as a 96 px staff-directory card. Keep: stage squares, the flowsheet, the CH-001 figure and excerpt, the ledger rows, the verdict words, the signature block, the TBD marks, paper canvas and Newsreader.

## Murder board: decisions
- **Byline off cards and ledger rows.** The identity line now appears once per page: Home hero, Lab header, entry header. This departs from the plan of record's card anatomy; TBD 25 records it for the owner to confirm or reverse.
- **"Worth to a buyer" off cards**, kept on entry pages as "If you are buying".
- **Stage rail on cards shows only the stages addressed**, in lower-case sans; the full four-column rail stays on write-ups and in the flowsheet.
- **Verdict as a word**: serif italic with a period, under a 1 px ink rule, on cards, rows and the hero. Rubric red now appears only on the wordmark's C and H and in "What the checks caught".
- **Eyebrow labels** in italic sans, sentence case; tracked mono caps remain for table column heads and IDs.
- **No scroll fade, no hover lift.** Signatures still draw once.
- **Section rhythm**: the automatic hairline between sections is gone; one 2 px ink rule on the section that matters per page (Home wall, Advisory offers, About bio).
- **About** opens on the portrait with the proof line in the header and a drop initial on the story; the proof line no longer sits under Disclosures.
- **Advisory**: the button is a link; the method stages are a ruled column with the stage name in the margin; the pediatric-scope line appears once, on Lab.
- **Footer** carries a colophon with the typefaces and the build date.
- **Rejected**: cutting the Lab card grid for the flowsheet alone (the drawings are the one asset no one else has); moving the engagement flowsheet above the fold on Advisory; replacing the hero (brief section 1 fixes the first screen); "built by hand" in the colophon (a false signal).

## What changed (copy)
Stage questions (all four) and the Strategy and Proof backgrounds; Home headings ("What I ask about any tool, vendor or company", "The wall so far", "Who hires me"); door lines for health systems, funds and consulting partners ("Your template, my judgment"); the pivot story as one paragraph with a hedge; the Lab door line ("Start with CH-004 if you want to watch me get something wrong"); the Advisory door line; "Latest" for "Newest verdict"; how_i_write; lab_scope; verdict_definition; rules.sells; rules.seat under "Which side I sit on"; offers_summary; fee_line; the four engagement steps; the tier 1 scope now defines what a clean read says; "For" column order unified; the Project row has a turnaround cell; rules_frame; published_memo; CH-011 and CH-012 value lines; reasoning on CH-001, CH-002, CH-003, CH-005 and CH-006; CH-004's status date format; About paragraph 3 closer, the medical affairs paragraph, the Disclosures seat line.

## Owner decisions recorded, not applied (TBD 43 to 50)
The four protected position lines (alternatives below); terms of business raised by the fund partner (price range, follow-up window, turnaround start, the 90-day credit as a row, rush option, IC call); rate basis and availability for consulting partners; the expert-network refusal; the response-time promise; "disclosed" versus "approved" by the employer; CH-004 as a two-page memo PDF now; whether Home opens on the story instead of the position lines.

### Protected position lines: the red team's alternatives (brief section 1 fixes the current wording)
- Identity: "Benson S. Hsu, MD, MBA. Pediatric intensivist and former health system executive. I build things with current models and then check, with data, whether they deserved building."
- Promise: "Health systems, investors and companies ask me the same question about clinical AI: is this one real, and what will it take to run it safely? I answer in writing, with a recommendation."
- Proof: "Behind each recommendation is an experiment I ran myself, with the date, the model, the numbers that held and the ones that did not."
- Method: "I ask four questions, always in the same order: is it worth doing, should you build or buy it, what rules will it have to meet, and does it actually work. Then I say one of four things: Build, Buy, Skip or Wait."

## Ten rules for the next copy pass
1. No paragraph ends on a sentence shorter than eight words unless it carries a number.
2. One "X, not Y" construction per page.
3. Lists of exactly three are rewritten unless the three are real named things.
4. The site never describes its own format.
5. The identity line appears once per page.
6. Every page carries at least one hedge, admitted gap or aside in the owner's voice.
7. Headings are noun phrases without periods; questions carry a question mark.
8. "Verdict" in chips and at most three sentences per page; "in writing" at most once per page.
9. Microcopy is written as the owner would say it on the phone.
10. Read new copy aloud against the About story's second paragraph; if the register changes, rewrite.

## Gates on this build
21 pages; 12 entries on the Lab page; no never-list word, retired number, hidden TBD or em dash; position lines verbatim; script 114.6 KB of 150; figures 12 to 20 KB; axe clean in both modes. Lighthouse not re-run (copy and CSS changes only).
