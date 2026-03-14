<script setup lang="ts">
import type { Experience } from "~/composables/useExperiences";

type Props = {
  experience: Experience;
};
defineProps<Props>();
</script>

<template>
  <article
    class="w-full ml-2 bg-stone-900 px-4 pb-2 pt-3 bg-linear-to-r from-stone-900 to-stone-800"
  >
    <h3
      class="font-bold text-lg"
      v-text="experience.name"
    />

    <div class="flex gap-x-1 items-center text-sm">
      <p
        class="text-gray-300"
        v-text="experience.startDate"
      />

      <span
        aria-hidden
        v-text="'-'"
      />

      <p
        :class="[experience.endDate === 'Present' ? 'text-blue-300' : 'text-gray-300']"
        v-text="experience.endDate"
      />
    </div>

    <p v-text="experience.description" />

    <ul class="text-sm space-y-2 mt-2 pl-2">
      <li
        v-for="(item, index) in experience.achievements"
        :key="index"
        class="list-disc list-inside"
        v-text="item"
      >
      </li>
    </ul>

    <p
      class="-ml-5 uppercase text-xs font-semibold mt-4 p-2 border border-stone-700 inline-block bg-stone-950"
      v-text="experience.role"
    />
  </article>
</template>
