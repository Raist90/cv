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
    <div class="border border-stone-700 p-4 ml-2 w-full bg-stone-900">
      <div class="space-y-2">
        <h3
          :id="post.id"
          class="font-bold uppercase group-hover:underline group-hover:underline-offset-2"
          v-text="post.title"
        />
        <p
          class="mt-1 text-sm"
          v-text="post.description"
        />
      </div>

      <hr class="mt-2 mb-4 border-zinc-700" />

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
          class="text-blue-300 font-bold"
          v-text="tag"
        />
      </p>
    </div>
  </NuxtLink>
</template>
