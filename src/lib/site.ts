import site from '../../content/site.json';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'entries'>;
export type StageKey = 'strategy' | 'build-or-buy' | 'rules' | 'proof';

export { site };
export const stages = site.stages as Array<{ key: StageKey; name: string; question: string; background: string; frameworks?: string[] }>;
export const stageKeys = stages.map((s) => s.key) as StageKey[];
export const stageName = (k: StageKey) => stages.find((s) => s.key === k)?.name ?? k;
export const nav = site.nav as Array<{ label: string; href: string }>;
export const headings = site.headings as Record<string, string>;
export const micro = site.microcopy as Record<string, string>;
export const figures = site.figures as { method: Record<string, string>; engagement: Record<string, string> };

const dateKey = (d: string) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? d : '');
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

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
  const partial = d.match(/^(\d{4})-(\d{2})-TBD$/);
  if (partial) return `${MONTHS[Number(partial[2]) - 1]} ${partial[1]}, day TBD`;
  if (!dateKey(d)) return d;
  const [y, m, day] = d.split('-').map(Number);
  return `${day} ${MONTHS[m - 1]} ${y}`;
}

/** "Feb to Jul 2026", derived from the dated entries in a list. */
export function monthRange(list: Entry[]): string {
  const dated = list.map((e) => e.data.date).filter(dateKey).sort();
  if (!dated.length) return 'TBD';
  const [y1, m1] = dated[0].split('-').map(Number);
  const [y2, m2] = dated[dated.length - 1].split('-').map(Number);
  if (y1 === y2 && m1 === m2) return `${MONTHS[m1 - 1]} ${y1}`;
  if (y1 === y2) return `${MONTHS[m1 - 1]} to ${MONTHS[m2 - 1]} ${y1}`;
  return `${MONTHS[m1 - 1]} ${y1} to ${MONTHS[m2 - 1]} ${y2}`;
}

/** Small counts spelled out, as in running text. */
export const spell = (n: number, capital = false) => {
  const w = WORDS[n] ?? String(n);
  return capital ? w.charAt(0).toUpperCase() + w.slice(1) : w;
};

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
