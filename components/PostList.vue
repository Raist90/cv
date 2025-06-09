<script setup lang="ts">
import type { Post } from "~/composables/usePosts";

type Props = {
  posts: Post[];
  title: string;
};
defineProps<Props>();
</script>

<template>
  <section class="space-y-6">
    <h2
      class="font-bold text-2xl"
      v-text="title"
    />

    <ul class="space-y-8">
      <li
        v-for="post in posts"
        :key="post.id"
        class="list-none"
      >
        <slot
          name="post"
          :post="post"
        />
      </li>
    </ul>
  </section>
</template>
