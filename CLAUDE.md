# celeritashealth.com — project instructions

Read `BUILD_PROMPT.md` first. It carries the position, the panels, the red team and the phases.

## What this repo is
The storefront for Celeritas Health: a one-person clinical AI advisory practice with a public lab, run by Benson S. Hsu, MD, MBA. The lab is the brand; advisory is how it earns. Plan of record: the Claude Doc "Celeritas Health: Advisory and Labs Plan" (https://claude.ai/artifact/FxaFkeCZrGNcaMaMwh3Apk). Where this repo and the doc disagree, the doc wins; say so and fix the repo.

## Working rules
- Work on branch `rebuild-2026-12`. Never push to `main`; open a PR and stop.
- Deploy target is GitHub Pages at celeritashealth.com (`CNAME` must survive the build; keep it in `public/`).
- Content lives in `content/` (site.json, about.md, entries/*.md, data/*). The site renders from these files; do not hard-code copy in components.
- `TBD` is a visible marker, styled, never hidden and never replaced with an invented value. `TBD.md` lists every one.
- Numbers: only those in `site.json.reconciled_numbers_only`. Anything in `retired_numbers_never` is a build failure.
- Words never used on the site: audit, firm, wing, studio, forthcoming. "Pediatric" never precedes "clinical AI" in a hero. Employers are named as employers, never as endorsers.
- Brand: `brand/` holds the final wordmark (SVG), avatar and `palette.json`. Never retype the wordmark in a font. Rubric red only on the C and H of the master lockup and as the single alert accent.
- The old site (`index.html`, `research.html`, `codebluepeds.html`) is replaced; archive it under `_archive_2026-07/` (gitignored) and keep `headshot.jpg`.
- Stack: Astro static site, Tailwind, GSAP ScrollTrigger (light), content collections. No WebGL, no scroll-jacking, works with JavaScript off, script under about 150 KB, WCAG AA in both color modes, reduced-motion honored.
- Run the panels and the red team as `BUILD_PROMPT.md` specifies and write their conclusions to `reviews/` (conclusions only, no deliberation).
- Commit messages: plain, present tense, one line.
