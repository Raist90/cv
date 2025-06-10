<script setup lang="ts">
import Banner from "~/components/Banner.vue";
import ExperienceList from "~/components/ExperienceList.vue";
import PostCard from "~/components/PostCard.vue";
import PostList from "~/components/PostList.vue";
import { usePosts } from "~/composables/usePosts";
import { type Locale, useTranslation } from "~/composables/useTranslation";
import { useExperiences } from "~/composables/useExperiences";

const experiences = await useExperiences();
const posts = await usePosts();

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.excerpt,
// });

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <div class="space-y-12">
    <Banner />

    <ExperienceList :experiences />

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
