<script setup lang="ts">
import type { Experience } from "~/composables/useExperiences";
import { type Locale, useTranslation } from "~/composables/useTranslation";

type Props = {
  experiences: Experience[];
};
defineProps<Props>();

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
const sectionId = useId();
</script>

<template>
  <section
    :aria-labelledby="sectionId"
    class="space-y-4"
  >
    <h2
      :id="sectionId"
      class="font-bold text-2xl"
      v-text="t('experience.title')"
    />

    <ul class="space-y-8 pb-8 border-l border-dashed border-stone-700">
      <li
        v-for="(experience, index) in experiences"
        :key="experience.name"
        class="list-none"
      >
        <div class="flex flex-row gap-x-2 space-y-2">
          <div
            aria-hidden
            class="-ml-1 size-2 rounded-full shrink-0 inline-block"
            :class="[index === 0 ? 'bg-blue-300' : 'bg-white']"
          />

          <slot
            name="experience"
            :experience
          />
        </div>
      </li>
    </ul>
  </section>
</template>
