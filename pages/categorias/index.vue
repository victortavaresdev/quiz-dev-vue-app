<script setup lang="ts">
interface QuizProps {
  title: string
  slug: string
  image: string
}

const { data: categories }: any = await useApiFetch('categories')

const quizzes: any = ref<QuizProps[]>([])

const quizzesByCategory = async (categorySlug: string) => {
  const { data } = await useApiFetch(`categories/${categorySlug}/quizzes`)
  if (data) quizzes.value = data.value as QuizProps[]
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="px-8 py-16">
      <div class="mb-4">
        <h2 class="text-emerald-600 text-4xl uppercase">categorias</h2>
        <p class="text-gray-600">Escolha sua categoria preferida</p>
      </div>

      <div class="w-full bg-emerald-600 mb-8">
        <ul class="flex items-center gap-4 text-white text-sm">
          <CategoryItem
            v-for="{ id, name, slug } in categories?.data"
            :name="name"
            :key="id"
            @click="quizzesByCategory(slug)"
          />
        </ul>
      </div>

      <div class="w-full grid grid-cols-4 gap-x-4 gap-y-8 mb-6">
        <QuizItem
          v-for="{ id, title, slug, image } in quizzes?.data"
          :title="title"
          :slug="slug"
          :image="image"
          :key="id"
        />
      </div>

      <PaginationBox />
    </div>
  </section>
</template>
