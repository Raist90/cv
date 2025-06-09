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
    <div class="aspect-4/5 h-40 lg:size-25 shrink-0">
      <img
        v-if="post.cover"
        class="size-full object-cover"
        :src="post.cover"
        :alt="post.alt"
      />
    </div>

    <div>
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
  </NuxtLink>
</template>
