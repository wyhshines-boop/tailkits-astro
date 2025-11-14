import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    lang: z.enum(['zh', 'en']).default('zh'),
    translationKey: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
