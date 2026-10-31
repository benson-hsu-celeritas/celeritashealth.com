// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, readdirSync } from 'node:fs';
import { rehypeTbd } from './src/lib/rehype-tbd.mjs';

// Draft entries never enter the sitemap.
const draftIds = readdirSync('./content/entries')
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /^draft:\s*true/m.test(readFileSync(`./content/entries/${f}`, 'utf8')))
  .map((f) => f.replace(/\.md$/, '').toLowerCase());

export default defineConfig({
  site: 'https://celeritashealth.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  redirects: {
    '/research': '/lab/',
    '/research.html': '/lab/',
    '/codebluepeds': '/lab/ch-007/',
    '/codebluepeds.html': '/lab/ch-007/',
  },
  markdown: { rehypePlugins: [rehypeTbd] },
  integrations: [
    sitemap({
      filter: (page) => !draftIds.some((id) => page.includes(`/lab/${id}/`)) && !page.includes('/404'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
