<script setup lang="ts">
import { type Locale, useTranslation } from "~/composables/useTranslation";

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <div class="border border-yellow-500/50 bg-yellow-500/10 p-4 mb-8 space-y-1 rounded-lg">
    <h4
      class="font-bold text-amber-200"
      v-text="t('misc.warning')"
    />

    <div class="text-sm text-zinc-300">
      <slot />
    </div>
  </div>
</template>
