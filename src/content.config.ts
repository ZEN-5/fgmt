import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			cover: image(),
			tags: z.array(z.string()).default([]),
			date: z.coerce.date(),
			featured: z.boolean().default(false),
		}),
});

const deliveries = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/deliveries' }),
	schema: ({ image }) =>
		z.object({
			client: z.string(),
			title: z.string(),
			images: z.array(image()),
		}),
});

export const collections = { projects, deliveries };
