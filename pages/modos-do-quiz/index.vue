<script setup lang="ts">
const categories = ref<CategoriesProps[]>([])

const getCategoriesData = async () => {
  const { data: _categories }: any = await useApiFetch('categories')
  categories.value = _categories.value?.data
}

onMounted(() => {
  getCategoriesData()
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-white dark:bg-gray-900">
    <div class="px-8 py-12 flex flex-col gap-8">
      <TheHeading
        title="escolha um modo do Quiz"
        subtitle="Escolha uma categoria do quiz para praticar sozinho ou com outros devs online."
        class="text-center"
      />

      <div class="flex gap-8 w-full max-w-4xl mx-auto my-0">
        <QuizSinglePlayer :categories="categories" />
        <QuizMultiPlayer />
      </div>
    </div>
  </section>
</template>
