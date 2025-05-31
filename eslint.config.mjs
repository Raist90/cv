import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  // Your custom configs here
  features: {
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
  },
})
  .override("nuxt/vue/rules", {
    rules: {
      "vue/attribute-hyphenation": ["error", "never"],
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  });
