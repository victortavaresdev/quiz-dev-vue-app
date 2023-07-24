<script setup lang="ts">
defineProps<{
  user: string
  quizzes: string
  average: string
  score: string
}>()
</script>

<template>
  <tr class="border-b border-gray-400 hover:bg-gray-300 duration-300">
    <td class="p-4 text-gray-800 align-middle">{{ user }}</td>
    <td class="p-4 text-gray-800 align-middle">{{ quizzes }} jogados</td>
    <td class="p-4 text-gray-800 align-middle">{{ average }}%</td>
    <td class="p-4 text-gray-800 align-middle">{{ score }}</td>
  </tr>
</template>
