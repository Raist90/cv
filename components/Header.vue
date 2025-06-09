<script setup lang="ts">
type Props = {
  links: {
    label: string;
    href: string;
  }[];
};
defineProps<Props>();
</script>

<template>
  <nav class="border border-stone-700 py-2 px-4 uppercase font-bold">
    <ul class="flex gap-x-8 justify-center">
      <li
        v-for="link in links"
        :key="link.href"
        class="list-none"
      >
        <NuxtLink
          class="hover:underline hover:underline-offset-2"
          :to="link.href"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
