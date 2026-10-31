# TBD checklist (every item is a visible marker on the site until closed)

The build fails on a TBD that is not rendered as a visible marker (`scripts/check-content.mjs`); the per-page counts below come from that check. Nothing here may be closed with an invented value.

| # | Item | File | Owner |
|---|---|---|---|
| 1 | Team size, budget and system revenue "at the time": the story says sixty and four billion; the bios say 70+ staff, $8M+ budget, $6B+ revenue today. Confirm which may appear with the employer named; the bio bullets say TBD until then | content/about.md | Benson |
| 2 | Current transport role wording: "I still fly. I direct a pediatric transport team" or "I take the transport calls" (the CV shows the flight program ending in 2018) | content/about.md | Benson |
| 3 | Employer names as they should appear in the footer line and the Now section; employers only, never endorsers | content/site.json, content/about.md | Benson |
| 4 | Outside-activity disclosure wording once filed | content/site.json | Benson |
| 5 | Email and LinkedIn URL (the site has no working call to action until this closes) | content/site.json | Benson |
| 6 | Paper E and F venues | content/about.md, CH-005, CH-006 | Benson |
| 7 | Zenodo deposit 21198499 median correction uploaded, then link (prints unlinked until then) | CH-005, content/about.md | Benson |
| 8 | CH-007 to CH-010: dates, build hours, cost vs commercial alternative, one number each | content/entries | Benson |
| 9 | CH-011 sample decision memo (write); its download link renders only once `draft: false` | content/entries/CH-011.md | Benson + Claude |
| 10 | CH-012 sample diligence read (write); same rule | content/entries/CH-012.md | Benson + Claude |
| 11 | Error-log excerpt for the reveal, verbatim from the deposit; the reveal runs on the structure until then | content/data/error-log-excerpt.json | Claude (from AI Paper folder) |
| 12 | Review minutes per protocol | CH-001 | Benson |
| 13 | What may be said publicly about McKinsey and Bain | content/about.md | Benson |
| 14 | USPTO search, classes 35, 42, 44, before the site goes public | n/a | Benson |
| 15 | Governance work scope wording | content/about.md | Benson |
| 16 | Why 160 approved dispositions became 150 released pathways (CH-001 numbers vs pathways.json) | content/entries/CH-001.md | Benson |
| 17 | Ownership and compensation wording for Aequitas (nonprofit) and Celeritas | content/about.md | Benson |
| 18 | CV (PDF) for the About page, or strike the link | src/pages/about.astro | Benson |
| 19 | Current team roles (transport, governance, service line committee) | content/about.md | Benson |
| 20 | Verify PMID 19289450 (Bradley et al., Pediatrics 2009) with the omit-then-verify lookup before the excerpt ships | content/data/error-log-excerpt.json | Claude |
| 21 | Approve or strike the three lines added in Phase A: `lines.lab_scope`, `lines.candidate_not_clinical`, `lines.verdict_definition`, and `how_entries_written` | content/site.json | Benson |
| 22 | Set `site.show_drafts` to false for launch (hides CH-007 to CH-012 from the wall; they stay out of the sitemap either way) | content/site.json | Benson |
| 23 | Switch the GitHub Pages source from the `main` branch to GitHub Actions when the PR merges; main keeps serving the old site until then | repository settings | Benson |
| 24 | Analytics: none at launch (no script, no banner); decide whether to add a cookieless counter later | n/a | Benson |
| 25 | The identity line opens every card and every Home ledger row (doc rule). Six repetitions in one scroll on Home is the loudest machine tell the panels found. Set as a byline until decided; option: let the H1 stand for it on Home rows | content/site.json, Card.astro, Ledger.astro | Benson |
| 26 | Figures made in Canva: design `DAHZm3dxXfg` ("Celeritas figures"; edit at https://www.canva.com/d/ozcFJ92vG9QCB5G), page 2 is CH-001's pipeline, page 4 is CH-002's omit-then-verify; pages 3 and 5 are empty placeholders. The dark variants are derived from the light exports by `scripts/figures-dark.mjs`. To change a figure: edit in Canva, export the page as a transparent PNG to `public/figures/*-light.png`, run the script | public/figures, scripts/figures-dark.mjs | Benson + Claude |
| 27 | Figure labels inside the PNGs (three words or fewer each) are set in Canva's default sans, not JetBrains Mono; approve, or replace with a Canva font closer to the site's mono | Canva design | Benson |
| 28 | `lines.lab_scope` (folds into TBD 21): both copy panels want a reason for the pediatric scope ("because that is where I work" / "where I practice"). The reason is not in any source file; approve one, keep the current line, or strike. The line now sits under the wall and at the end of the Advisory method section, not in the folds | content/site.json | Benson |
| 29 | Entry section headings as four questions ("Is it worth doing / Build it or buy it / What keeps it safe / Is it working"), changing every write-up and `how_entries_written[0]`; or keep "Worth doing / Build or buy / Rules / Is it working" | content/entries, site.json | Benson |
| 30 | `pivot_story` (doc-fixed): "moat" is investor vocabulary in a physician's mouth; alternatives for lines 3 and 4: "I learned the hard part is not building. It is deciding whether the thing is safe and worth it, and then proving that." and "Now I do it to other people's tools as well as my own." | content/site.json | Benson |
| 31 | The two a.m. scene (About, paragraph 2) reused on Home before the pivot paragraph, and the About story reordered to open on it with the bridge "I learned to distrust the numbers earlier." Depends on TBD 2 | content/about.md, index.astro | Benson |
| 32 | Two-minute story closings (doc draft 1): cut "The job did not exist before me."; end paragraph 3 on "I retired them."; alternatives for the three closings are in reviews/03 | content/about.md | Benson |
| 33 | "and measured them the way I measured those analytics programs" holds for one of five tools; "and measured the first one the way I measured those analytics programs" | content/about.md | Benson |
| 34 | `rules.sells` (doc-fixed) "The practice sells decisions, not software."; both panels: "I sell the decision, not the software." | content/site.json | Benson |
| 35 | `stages[0].background` in first person once TBD 13 clears what may be said about McKinsey and Bain; it now reads "I was a health system vice president and worked on the payer side. Duke MBA. Advisory roles at McKinsey and Bain." | content/site.json | Benson |
| 36 | `offers[3].name` "Clinical AI expert on a project" to "The clinician on your engagement" | content/site.json | Benson |
| 37 | Footer contents (brief section 4): the three copy panels want the two disclosure sentences on About only, the footer carrying "Disclosures" as a link and "Employers: TBD."; the colophon keeps all five items until decided | Footer.astro, BUILD_PROMPT.md | Benson |
| 38 | Three cards on Home instead of six (story panel: thirty seconds on a phone ends inside the second card); the ledger rows now fit six in about two phone screens, which may settle it | Ledger.astro | Benson |
| 39 | `disclosure` (doc-fixed) passive: "Tools were built on my own time with no institutional data." to "I built the tools on my own time with no institutional data." | content/site.json | Benson |
| 40 | `lines.candidate_not_clinical` and `lines.verdict_definition` reworded (plainer, same meaning) while TBD 21 is open; `how_entries_written` is no longer rendered as a list and `how_i_write` carries the same six facts in one paragraph. Approve with TBD 21, or strike | content/site.json | Benson |
| 41 | Link previews: `scripts/og.mjs` now renders one OG image per page with the site's fonts; check one in iMessage, Mail and LinkedIn after deploy | scripts/og.mjs | Benson |
| 42 | The master lockup's C and H are filled with the alert token, which is #D9694E in dark mode, so the wordmark's rubric lightens with the page. Brand call: keep it tied to the alert token, or hold it at #B0482F in both modes (a glyph, not text, so contrast rules do not bind) | src/components/Wordmark.astro | Benson |

## Visible markers by page (build of Oct 31, 2026, iteration 2)

| Page | Markers |
|---|---|
| / | 5 |
| /lab/ | 11 |
| /lab/ch-001/ | 15 |
| /lab/ch-002/ to /lab/ch-006/ | 3 to 4 each (footer email, LinkedIn, employers line; the CH-005 deposit) |
| /lab/ch-007/ to /lab/ch-012/ | 8 to 13 each (draft fields) |
| /advisory/ | 8 |
| /about/ | 19 |
| /404 | 3 |
