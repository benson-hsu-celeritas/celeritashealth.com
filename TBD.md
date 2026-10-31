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

## Visible markers by page (build of Oct 31, 2026)

| Page | Markers |
|---|---|
| / | 5 |
| /lab/ | 11 |
| /lab/ch-001/ | 14 |
| /lab/ch-002/ to /lab/ch-006/ | 3 to 4 each (footer email, LinkedIn, employers line) |
| /lab/ch-007/ to /lab/ch-012/ | 8 to 13 each (draft fields) |
| /advisory/ | 11 |
| /about/ | 20 |