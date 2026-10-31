# celeritashealth.com

The storefront for Celeritas Health: a one-person clinical AI advisory practice with a public lab. Start with `CLAUDE.md`, then `BUILD_PROMPT.md`.

- `content/` is the source of truth for copy and cards: `site.json`, `about.md`, `entries/*.md`, `data/*`. Components never hard-code copy.
- `brand/` holds the final wordmark (SVG), avatar and palette. The site inlines the vector; it is never retyped.
- `src/` is the Astro site: `pages/` (Home, Lab wall, write-ups, Advisory, About), `components/` (SignatureBlock, Wordmark, StageRail, VerdictChip, Card, Wall, Signature drawings, Reveal, Offers, Steps, Doors), `lib/` (content helpers, TBD markers).
- `scripts/` run in `npm run build`: the OG image, the content gate (never-list words, retired numbers, hidden TBDs, verbatim position lines) and the script budget. `npm run audit:a11y` (axe), `npm run audit:lh` (Lighthouse), `npm run shots` (Panel screenshots).
- `TBD.md` lists every visible placeholder and who closes it. `reviews/` holds panel and red team conclusions.
- Deploy: GitHub Pages through `.github/workflows/pages.yml` on push to `main`; `public/CNAME` carries the domain. The Pages source must be switched to GitHub Actions when the rebuild merges.

```bash
npm ci && npm run build && npm run preview
```
