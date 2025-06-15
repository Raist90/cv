<script setup lang="ts">
import me from "~/public/me.jpg";
import { type Locale, useTranslation } from "~/composables/useTranslation";

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <section class="flex flex-col-reverse gap-y-4 md:flex-row gap-x-8">
    <header class="space-y-2">
      <h1
        class="font-bold text-3xl text-balance"
        v-text="t('banner.authorName')"
      />

      <p
        class="font-semibold uppercase text-xs italic -rotate-1 text-blue-300"
        v-text="t('banner.authorRole')"
      />

      <div>
        <p
          class="mt-1"
          v-text="t('banner.authorDescription')"
        />
      </div>
      <p
        class="text-sm"
        v-text="t('banner.authorAdditionalInfo', { date: String(new Date().getFullYear() - 1990) })"
      />
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
