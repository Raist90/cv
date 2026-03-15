<script setup lang="ts">
import { type Locale, useTranslation } from "~/composables/useTranslation";

const slug = String(useRoute().params.slug);
const { data: post } = await useAsyncData(`blog-${slug}`, () => queryCollection("content").path(`/${slug}`).first());

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <article class="space-y-8">
    <header
      v-if="post"
      class="space-y-2"
    >
      <h1
        class="font-bold text-2xl uppercase"
        v-text="post.title"
      />

      <p
        class="text-xs text-zinc-300 uppercase"
      >
        <NuxtTime
          :datetime="post.date"
          month="short"
          year="numeric"
          locale="en"
        />
        with tags

        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-blue-300"
          v-text="tag"
        />
      </p>
    </header>

    <ContentRenderer
      v-if="post"
      class="[&>p]:mt-2 [&>p]:text-zinc-300 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mt-4"
      :value="post"
    />
    <div
      v-else
      v-text="t('blog.postNotFound')"
    />
  </article>
</template>
