<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <li class="hover:bg-emerald-500 duration-300 p-2 cursor-pointer">{{ name }}</li>
</template>
