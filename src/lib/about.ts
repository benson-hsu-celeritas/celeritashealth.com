import src from '../../content/about.md?raw';
import { marked } from 'marked';
import { tbdHtml } from './tbd';

export type AboutSection = { heading: string; slug: string; html: string };

/** Parses content/about.md into its H2 sections, rendered to HTML with TBD markers. */
export function aboutSections(): AboutSection[] {
  const parts = src.split(/^## /m).slice(1);
  return parts.map((p) => {
    const nl = p.indexOf('\n');
    const heading = p.slice(0, nl).trim();
    const body = p.slice(nl + 1).trim();
    const slug = heading.toLowerCase().replace(/\(.*?\)/g, '').trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { heading, slug, html: tbdHtml(marked.parse(body, { async: false }) as string) };
  });
}
