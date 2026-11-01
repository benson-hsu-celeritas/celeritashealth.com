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

export type RecordRow = { when: string; what: string; stage: string };

/** The "## Record" section as rows: "- when | what | stage" per line. Everything else in that section is its lede. */
export function recordRows(): { lede: string; rows: RecordRow[] } {
  const part = src.split(/^## /m).slice(1).find((p) => p.startsWith('Record'));
  if (!part) return { lede: '', rows: [] };
  const lines = part.split('\n').slice(1);
  const rows = lines.filter((l) => l.startsWith('- ')).map((l) => {
    const [when = '', what = '', stage = ''] = l.slice(2).split('|').map((s) => s.trim());
    return { when, what, stage };
  });
  const lede = lines.filter((l) => l.trim() && !l.startsWith('- ')).join(' ').trim();
  return { lede, rows };
}
