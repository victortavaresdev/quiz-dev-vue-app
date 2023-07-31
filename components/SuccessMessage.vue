<script setup lang="ts">
defineProps<{
  successMessage: string
}>()
</script>

<template>
  <div class="w-full py-1 bg-green-100 rounded">
    <p class="text-green-500 text-sm text-center">
      {{ successMessage }}
    </p>
  </div>
</template>
