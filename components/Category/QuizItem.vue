<script setup lang="ts">
defineProps<{
  title: string
  slug: string
  image: string
}>()
</script>

<template>
  <div class="w-full h-auto shadow-[0_0_3px_1px] shadow-slate-400">
    <div>
      <img :src="image" alt="image" class="w-full h-36" />
    </div>

    <div class="p-3">
      <h4 class="text-base text-gray-900 font-bold mb-2">{{ title }}</h4>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600 flex items-center">
          <Icon name="material-symbols:help" size="1rem" class="mr-1" /> 10 perguntas</span
        >
        <NuxtLink
          :to="`/quiz/${slug}`"
          class="bg-gray-800 hover:bg-gray-600 duration-300 text-white text-sm p-1 rounded"
        >
          Iniciar Quiz
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
