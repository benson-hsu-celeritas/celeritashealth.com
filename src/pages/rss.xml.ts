import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site, publishedEntries, entryHref } from '../lib/site';

/** The Lab as a feed: published entries only, newest first. Drafts never appear. */
export async function GET(context: APIContext) {
  const entries = await publishedEntries();
  return rss({
    title: site.seo.lab_title,
    description: site.seo.lab_description,
    site: context.site!,
    items: entries.map((e) => ({
      title: `${e.data.id} ${e.data.title}`,
      pubDate: new Date(e.data.date),
      description: `${e.data.verdict}. ${e.data.reasoning}`,
      link: entryHref(e),
    })),
  });
}
