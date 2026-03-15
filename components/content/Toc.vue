<script setup lang="ts">
</script>

<template>
  <div class="border mb-6 border-stone-700 max-w-xs">
    <div class="border-b border-stone-700 py-2 pl-4 bg-stone-900">
      <p
        class="font-bold"
        v-text="'Table of contents'"
      />
    </div>

    <nav class="[&>ul]:space-y-2 [&_li]:text-sm [&_a]:text-blue-300 p-4 pb-5">
      <slot />
    </nav>
  </div>
</template>
