<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="mb-4">
    <h2 class="text-center text-slate-800 dark:text-white text-xl font-bold">{{ text }}</h2>
  </div>
</template>
