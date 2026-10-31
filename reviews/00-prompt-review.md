# Review of BUILD_PROMPT.md before the build (Oct 29, 2026)

Two panels and a red team on the prompt itself. Conclusions only; every row was applied to the prompt, CLAUDE.md or the content files.

## Panel A, design and craft

| Finding | Decision |
|---|---|
| No typeface named; "editorial serif" leaves the hero to chance | Newsreader (the brand board's serif), JetBrains Mono, Alegreya Sans; all self-hosted and subset |
| A 25-word identity line cannot be the largest text on a phone | The name is the largest text; identity, promise, proof follow; 390 px screenshot required |
| Signatures and the reveal would die with JavaScript off | Signatures are build-time inline SVG with CSS draw-on; the reveal has a static annotated fallback |
| Dark canvas by default hurts emailed-link readers and print | Follow system preference; light is the print mode; rubric accent checked for AA on both |
| Samples as downloads need a print path | Print stylesheet; samples are build-time PDFs of CH-011 and CH-012 |

## Panel B, market and message

| Finding | Decision |
|---|---|
| A public wall with TBD cards reads as unfinished to a CMIO or a fund | `draft: true` hides an entry from the wall and sitemap until its required fields are real |
| Old URLs are in LinkedIn posts and emails | Redirects for /research and /codebluepeds; headshot path kept |
| Nothing for search or link previews | Per-page titles, JSON-LD Person and Organization, OG images from the brand, favicon from the avatar; rank for the name, "clinical AI advisory", "clinical AI diligence" |
| Recruiters want a CV | "CV (PDF)" link on About, TBD until supplied |
| Forms add a backend and a privacy question | mailto and LinkedIn only; no analytics or Plausible only; no cookie banner |

## Red team

| Attack | Resolution |
|---|---|
| A build phase quietly rewords the position to fit a layout | Section 1 is immutable; definition of done requires verbatim |
| The never-list grep fails on "Citation-verification audit", a real deposit title | Exemption for verbatim citations and deposit titles only |
| The Pages deploy breaks the live site mid-rebuild | Pages source switches to Actions only at merge; main keeps serving the old pages; noted in the PR |
| Claude Code fills a TBD to make a card look finished | Forbidden in CLAUDE.md; drafts hidden; grep for TBD in shipped pages in the PR |
| The rubric accent fails contrast on the dark canvas | AA check on both canvases in the definition of done |
