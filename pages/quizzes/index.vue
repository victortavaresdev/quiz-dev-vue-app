<script setup lang="ts">
const categories: any = ref<CategoriesProps[]>([])

const getCategoriesData = async () => {
  const { data: _categories } = await useApiFetch('categories')
  categories.value = _categories.value as CategoriesProps[]
}

onMounted(() => {
  getCategoriesData()
})

const router = useRouter()

const categoryChosen = ref('')
const randomQuiz = ref('')
const errorMessage = ref('')

const getRandomQuizByCategory = async () => {
  if (categoryChosen.value === '') {
    errorMessage.value = 'Selecione uma categoria para iniciar o quiz.'

    return
  }

  const { data: _quiz }: any = await useApiFetch(`categories/${categoryChosen.value}/random-quiz`)
  randomQuiz.value = _quiz.value.data.slug

  router.push(`quiz/${randomQuiz.value}`)
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="px-8 py-12">
      <div class="mb-12">
        <h2 class="text-emerald-600 text-3xl text-center uppercase font-bold font-['Bruno_Ace_SC']">
          escolha um modo do Quiz
        </h2>
        <p class="text-gray-600 text-center">
          Escolha uma categoria do quiz para praticar sozinho ou com outros devs online.
        </p>
      </div>

      <div class="text-center bg-red-200 mb-4 rounded w-96 mx-auto my-0" v-show="errorMessage">
        <span class="text-red-500">{{ errorMessage }}</span>
      </div>

      <div class="flex gap-8 w-full max-w-4xl mx-auto my-0">
        <div class="p-6 border-gray-400 border-2 rounded-xl">
          <Icon name="mdi:account" size="3rem" class="w-full mx-auto my-0 text-slate-800" />
          <h2 class="text-center text-3xl text-slate-800 font-['Bruno_Ace_SC']">Single player</h2>
          <p class="text-center text-gray-600 mb-4">
            Teste os seus conhecimentos com um quiz aleatório.
          </p>
          <div class="flex items-center justify-between gap-2">
            <select
              name="quizzes"
              id="quizzes"
              v-model="categoryChosen"
              class="border-gray-400 border rounded-lg p-2 outline-none w-full"
            >
              <option disabled value="">Selecione</option>
              <option v-for="{ id, name, slug } in categories?.data" :key="id" :value="slug">
                {{ name }}
              </option>
            </select>
            <button
              @click="getRandomQuizByCategory"
              class="bg-emerald-600 hover:bg-emerald-800 duration-300 text-white rounded-lg p-2 w-full capitalize"
            >
              iniciar quiz
            </button>
          </div>
        </div>

        <div class="p-6 border-gray-400 border-2 rounded-xl">
          <Icon
            name="mdi:account-multiple"
            size="3rem"
            class="w-full mx-auto my-0 text-slate-800"
          />
          <h2 class="text-center text-3xl text-slate-800 font-['Bruno_Ace_SC']">Multi player</h2>
          <p class="text-center text-gray-600 mb-4">
            Teste os seus conhecimentos com outros devs online.
          </p>
          <div class="flex items-center justify-between gap-2">
            <div
              class="bg-emerald-600 opacity-80 text-white text-center rounded-lg p-2 w-full capitalize"
            >
              em breve
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
