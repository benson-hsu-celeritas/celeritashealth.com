import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/entries' }),
  schema: z.object({
    id: z.string(),
    date: z.string(),
    type: z.enum(['Build', 'Paper', 'Memo', 'Decision']),
    title: z.string(),
    stages: z.array(z.enum(['strategy', 'build-or-buy', 'rules', 'proof'])),
    verdict: z.string(),
    reasoning: z.string(),
    value: z.string(),
    signature: z.string(),
    status: z.string(),
    numbers: z.array(z.string()),
    doi: z.string().optional(),
    deposit: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { entries };
