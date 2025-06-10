<script setup lang="ts">
import type { Experience } from "~/composables/useExperiences";
import { type Locale, useTranslation } from "~/composables/useTranslation";

type Props = {
  experiences: Experience[];
};
defineProps<Props>();

const { public: { locale } } = useRuntimeConfig();
const { t } = await useTranslation(locale as Locale);
</script>

<template>
  <section class="space-y-4">
    <h2
      class="font-bold text-2xl"
      v-text="t('experience.title')"
    />

    <ul class="space-y-8 pb-8 border-l border-dashed border-stone-700">
      <li
        v-for="experience in experiences"
        :key="experience.name"
        class="list-none"
      >
        <div class="flex flex-row gap-x-2 space-y-2">
          <div
            aria-hidden
            class="-ml-1 size-2 rounded-full shrink-0 inline-block bg-blue-300"
          />

          <div class="w-full ml-2 bg-stone-900 px-4 pb-2 pt-3 bg-linear-to-r from-stone-900 to-stone-800">
            <h3
              class="font-bold text-lg"
              v-text="experience.name"
            />

            <div class="flex gap-x-1 items-center text-sm">
              <p
                class="text-gray-300"
                v-text="experience.startDate"
              />

              <span v-text="'-'" />

              <p
                :class="[experience.endDate === 'Present' ? 'text-blue-300' : 'text-gray-300']"
                v-text="experience.endDate"
              />
            </div>

            <p v-text="experience.description" />

            <p
              class="-ml-5 uppercase text-xs font-semibold mt-2 p-2 border border-stone-700 inline-block bg-stone-950"
              v-text="experience.role"
            />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
