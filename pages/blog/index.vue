<script setup lang="ts">
import PostCard from "~/components/PostCard.vue";
import PostList from "~/components/PostList.vue";
import { usePosts } from "~/composables/usePosts";
import { type Locale, useTranslation } from "~/composables/useTranslation";

const posts = await usePosts();

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <PostList
    :title="t('blog.allPosts')"
    :posts
  >
    <template #post="{ post }">
      <PostCard :post />
    </template>
  </PostList>
</template>
