<script setup lang="ts">
defineProps<{
  id: string
  user: string
  image: string | null
  ranking: number
  quizzes: string
  totalScore: string | null
}>()
</script>

<template>
  <tr class="border-b border-gray-300 hover:bg-gray-200 duration-300">
    <td class="p-4 text-gray-800 align-middle">{{ ranking + 1 }}</td>
    <td class="p-4 text-gray-800 align-middle flex items-center gap-2">
      <ProfilePicture :image="image" size="1.5rem" />
      <NuxtLink :to="`/usuario/${id}`">{{ user }}</NuxtLink>
    </td>
    <td class="p-4 text-gray-800 align-middle">{{ quizzes }}</td>
    <td class="p-4 text-gray-800 align-middle">{{ totalScore }}</td>
  </tr>
</template>
