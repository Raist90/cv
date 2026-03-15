import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
  ],
  components: false,
  imports: {
    scan: false,
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "one-dark-pro",
        },
        toc: {
          depth: 3,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:3000",
      locale: "en",
    },
  },
  compatibilityDate: "2025-05-15",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    defaults: {
      weights: ["400", "600", "700"],
      styles: ["italic", "normal"],
    },
  },
});
