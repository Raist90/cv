<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

const { data: navigation } = await useAsyncData("navigation", () => {
  return queryCollection("navigation").first();
});
</script>

<template>
  <main>
    <div class="w-full lg:max-w-2xl mx-auto py-12 px-4 lg:px-0 space-y-12">
      <Header
        v-if="navigation?.links"
        :links="navigation.links"
      />

      <slot />
    </div>

    <Footer />
  </main>
</template>
