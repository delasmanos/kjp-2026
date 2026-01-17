import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// refactor in the end
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/blog/posts" }),
  schema: z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.date(),
    published: z.boolean(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/data/projects" }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

// Since singletons in Keystatic are just 1-file collections in Astro usually, or specific file paths.
// But for Astro Content Collections, 'homepage' isn't a collection in the same way if it's just one file.
// However, we can define it as a collection and just have one entry, or just import it directly if it's data.
// For consistency with Keystatic 'src/content/homepage/index', let's define it as a collection.
const homepage = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/data/homepage" }),

  schema: z.object({
    headline: z.string(),
    subheadline: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/data/about" }),
  schema: z.object({
    headline: z.string(),
    skills: z.array(z.string()),
    experience: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        duration: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = {
  posts,
  projects,
  homepage,
  about,
};
