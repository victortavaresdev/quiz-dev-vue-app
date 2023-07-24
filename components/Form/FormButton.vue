<script setup lang="ts">
defineProps<{
  text: string
  class?: string
}>()
</script>

<template>
  <button
    class="w-full block bg-emerald-600 hover:bg-emerald-500 duration-300 text-white text-center text-base py-2 rounded"
    :class="class"
  >
    {{ text }}
  </button>
</template>
