# celeritashealth.com

The storefront for Celeritas Health: a one-person clinical AI advisory practice with a public lab. Start with `CLAUDE.md`, then `BUILD_PROMPT.md`.

- `content/` is the source of truth for copy and cards: `site.json`, `about.md`, `entries/*.md`, `data/*`. Components never hard-code copy.
- `brand/` holds the final wordmark (SVG), avatar and palette. The site inlines the vector; it is never retyped.
- `src/` is the Astro site: `pages/` (Home, Lab wall, write-ups, Advisory, About), `components/` (SignatureBlock, Wordmark, StageRail, VerdictChip, Card, Wall with its flowsheet, Signature drawings, Figure, EngagementFlowsheet, Reveal, Offers, Doors, Cells), `lib/` (content helpers, TBD markers).
- `scripts/` run in `npm run build`: one OG image per page in the site's fonts, the content gate (never-list words, retired numbers, hidden TBDs, em dashes, verbatim position lines, twelve entries on the Lab page, word caps per page, first person on Advisory, self-evaluating phrases, Home repeating the Lab) and the script and raster budgets. `npm run audit:a11y` (axe), `npm run audit:lh` (Lighthouse), `npm run shots` (Panel screenshots).
- `public/figures/` holds the two drawn figures (CH-001's pipeline, CH-002's omit-then-verify), made in the Canva design "Celeritas figures" and exported as transparent PNGs; `node scripts/figures-dark.mjs` derives the dark variants from the light files.
- `TBD.md` lists every visible placeholder and who closes it. `reviews/` holds panel and red team conclusions (04 is the buyer panel and the "AI made it" red team; 05 is the voice panel behind iteration 4).
- Deploy: GitHub Pages through `.github/workflows/pages.yml` on push to `main`; `public/CNAME` carries the domain. The Pages source must be switched to GitHub Actions when the rebuild merges.

```bash
npm ci && npm run build && npm run preview
```
