<script setup lang="ts">
import Banner from "~/components/Banner.vue";
import Experience from "~/components/Experience.vue";
import ExperienceList from "~/components/ExperienceList.vue";
import PostCard from "~/components/PostCard.vue";
import PostList from "~/components/PostList.vue";
import { usePosts } from "~/composables/usePosts";
import { type Locale, useTranslation } from "~/composables/useTranslation";
import { useExperiences } from "~/composables/useExperiences";

const experiences = await useExperiences();
const posts = await usePosts();

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);

// useSeoMeta({
//   title: t("banner.authorName"),
//   description: t("banner.authorDescription"),
// });
</script>

<template>
  <div class="space-y-12">
    <Banner />

    <ExperienceList :experiences>
      <template #experience="{ experience }">
        <Experience :experience="experience" />
      </template>
    </ExperienceList>

    <PostList
      :title="t('blog.latestPosts')"
      :posts
    >
      <template #post="{ post }">
        <PostCard :post />
      </template>
    </PostList>
  </div>
</template>
