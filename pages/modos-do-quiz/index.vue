<script setup lang="ts">
const categories: any = ref<CategoriesProps[]>([])

const getCategoriesData = async () => {
  const { data: _categories } = await useApiFetch('categories')
  categories.value = _categories.value as CategoriesProps[]
}

onMounted(() => {
  getCategoriesData()
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
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
