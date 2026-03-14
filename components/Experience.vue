<script setup lang="ts">
import type { Experience } from "~/composables/useExperiences";

type Props = {
  experience: Experience;
};
defineProps<Props>();
</script>

<template>
  <article
    class="w-full bg-stone-900 px-5 pb-5 pt-4 bg-linear-to-r from-stone-900 to-stone-800 rounded-xl border border-stone-700"
  >
    <h3>
      <span v-text="`${experience.role}, `" />
      <span
        class="text-blue-300"
        v-text="experience.name"
      />
    </h3>

    <hr class="mt-2 mb-4 border-zinc-700" />

    <div class="flex gap-x-1 items-center mb-2 text-xs">
      <p
        class="text-zinc-200"
        v-text="experience.startDate"
      />

      <span
        aria-hidden
        v-text="'-'"
      />

      <p
        :class="[experience.endDate === 'Present' ? 'font-bold text-blue-300' : 'text-zinc-200']"
        v-text="experience.endDate"
      />
    </div>

    <p
      class="text-sm"
      v-text="experience.description"
    />

    <ul class="text-xs space-y-1 mt-2">
      <li
        v-for="(item, index) in experience.achievements"
        :key="index"
        class="list-none"
      >
        <span
          class="text-green-500"
          v-text="'&check; '"
        />
        <span v-text="item" />
      </li>
    </ul>
  </article>
</template>
