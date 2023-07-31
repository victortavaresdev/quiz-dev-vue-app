<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div>
    <h2 class="text-emerald-600 text-3xl uppercase font-bold font-['Bruno_Ace_SC']">
      {{ title }}
    </h2>
    <p class="text-gray-600">
      {{ subtitle }}
    </p>
  </div>
</template>
