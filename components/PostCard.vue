<script setup lang="ts">
import type { Post } from "~/composables/usePosts";

type Props = {
  post: Post;
};
defineProps<Props>();
</script>

<template>
  <NuxtLink
    :aria-labelledby="post.id"
    class="group flex gap-x-4 lg:items-center"
    :to="`/blog${post.path}`"
  >
    <div class="space-y-2">
      <div class="pb-1">
        <h3
          :id="post.id"
          class="font-bold uppercase text-lg group-hover:underline group-hover:underline-offset-2"
          v-text="post.title"
        />
        <p
          class="mt-1"
          v-text="post.description"
        />
      </div>

      <p class="text-sm">
        <NuxtTime
          :datetime="post.date"
          month="short"
          year="2-digit"
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
    </div>
  </NuxtLink>
</template>
