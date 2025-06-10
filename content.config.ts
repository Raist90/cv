import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        cover: z.string(),
        alt: z.string(),
      }),
    }),
    navigation: defineCollection({
      type: "data",
      source: "api/links.json",
      schema: z.object({
        links: z.array(
          z.object({
            label: z.string(),
            href: z.string().url(),
          }),
        ),
      }),
    }),
    experience: defineCollection({
      type: "data",
      source: "api/experiences.json",
      schema: z.object({
        experiences: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
            startDate: z.string(),
            endDate: z.string().url(),
            description: z.string(),
            technologies: z.array(z.string()),
          }),
        ),
      }),
    }),
  },
});
