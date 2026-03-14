<script setup lang="ts">
import me from "~/public/me.jpg";
import { type Locale, useTranslation } from "~/composables/useTranslation";

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <section class="flex flex-col-reverse gap-y-4 md:flex-row gap-x-8">
    <header class="space-y-1">
      <h1
        class="font-bold text-3xl text-balance mb-3"
        v-text="t('banner.authorName')"
      />
      <p
        class="font-semibold uppercase text-sm text-blue-300 mb-2"
        v-text="t('banner.authorRole')"
      />
      <div class="space-y-2">
        <p v-text="t('banner.authorDescription')" />
        <p v-text="t('banner.authorAdditionalInfo', { date: String(new Date().getFullYear() - 1990) })" />
        <p v-text="t('banner.authorSkills')" />
      </div>
    </header>

    <div class="w-11/12 md:w-50 shrink-0 place-self-end">
      <img
        class="size-full aspect-video md:aspect-4/5 object-cover object-[top_-6rem_right_0] md:object-center"
        :alt="t('banner.authorName')"
        :src="me"
      >
    </div>
  </section>
</template>
