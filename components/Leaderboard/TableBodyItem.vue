<script setup lang="ts">
defineProps<{
  id: string
  user: string
  image: string | null
  ranking: number
  totalQuizzes: number
  totalScore: number
}>()
</script>

<template>
  <tr
    class="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 duration-300"
  >
    <td class="p-4 text-gray-800 align-middle dark:text-white">{{ ranking + 1 }}</td>
    <td class="p-4 text-gray-800 align-middle flex items-center gap-2">
      <ProfilePicture :image="image" class="w-[1.5rem] h-[1.5rem]" />
      <NuxtLink :to="`/usuario/${id}`" class="capitalize dark:text-white">{{ user }}</NuxtLink>
    </td>
    <td class="p-4 text-gray-800 align-middle dark:text-white">{{ totalQuizzes }}</td>
    <td class="p-4 text-gray-800 align-middle dark:text-white">{{ totalScore }}</td>
  </tr>
</template>
