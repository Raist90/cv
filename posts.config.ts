import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        excerpt: z.string(),
        cover: z.string(),
        alt: z.string(),
      }),
    }),
  },
});
