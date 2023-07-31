<script setup lang="ts">
defineProps<{
  errorMessage: string
}>()
</script>

<template>
  <div class="w-full py-1 bg-red-100 rounded">
    <p class="text-red-500 text-sm text-center">{{ errorMessage }}</p>
  </div>
</template>
