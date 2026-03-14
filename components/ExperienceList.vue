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
  >
    <h2
      :id="sectionId"
      class="font-bold text-2xl mb-6"
      v-text="t('experience.title')"
    />

    <ul class="space-y-8 pb-8 border-stone-700">
      <li
        v-for="experience in experiences"
        :key="experience.name"
        class="list-none"
      >
        <div class="flex flex-row gap-x-2 space-y-2">
          <slot
            name="experience"
            :experience
          />
        </div>
      </li>
    </ul>
  </section>
</template>
