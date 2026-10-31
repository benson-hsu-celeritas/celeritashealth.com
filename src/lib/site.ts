import site from '../../content/site.json';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'entries'>;
export type StageKey = 'strategy' | 'build-or-buy' | 'rules' | 'proof';

export { site };
export const stages = site.stages as Array<{ key: StageKey; name: string; question: string; background: string; frameworks?: string[] }>;
export const stageName = (k: StageKey) => stages.find((s) => s.key === k)?.name ?? k;

const dateKey = (d: string) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? d : '');

/** All entries, newest first; drafts (and undated entries) after the dated ones, by ID descending. */
export async function allEntries(): Promise<Entry[]> {
  const list = await getCollection('entries');
  return list.sort((a, b) => {
    const da = dateKey(a.data.date), db = dateKey(b.data.date);
    if (da && db) return db.localeCompare(da);
    if (da) return -1;
    if (db) return 1;
    return b.data.id.localeCompare(a.data.id);
  });
}

export async function publishedEntries(): Promise<Entry[]> {
  return (await allEntries()).filter((e) => !e.data.draft);
}

/** What the wall shows: everything on this branch while site.show_drafts is true. */
export async function wallEntries(): Promise<Entry[]> {
  const all = await allEntries();
  return site.site.show_drafts ? all : all.filter((e) => !e.data.draft);
}

/** Derived, never typed: the newest dated, non-draft entry. */
export async function lastUpdated(): Promise<string> {
  const dated = (await publishedEntries()).map((e) => e.data.date).filter(dateKey).sort();
  return dated[dated.length - 1] ?? 'TBD';
}

export const entryHref = (e: Entry) => `/lab/${e.data.id.toLowerCase()}/`;
export const findEntry = (list: Entry[], id: string) => list.find((e) => e.data.id === id);

export function fmtDate(d: string): string {
  if (!dateKey(d)) return d;
  const [y, m, day] = d.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[m - 1]} ${y}`;
}

/** Splits the identity line into the name sentence and the rest. */
export function identityParts() {
  const id = site.position.identity;
  const m = id.match(/^(.*?\bMBA\.)\s+([\s\S]*)$/);
  return m ? { name: m[1], rest: m[2] } : { name: id, rest: '' };
}

export function mailto(subject: string): string {
  const email = site.contact.email;
  if (!email || /TBD/.test(email)) return '';
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
