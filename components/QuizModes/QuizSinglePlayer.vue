<script setup lang="ts">
defineProps<{
  categories: any
}>()

const { push } = useRouter()
const categoryChosen = ref('')

const getCategory = async () => {
  if (categoryChosen.value === '') {
    return
  }

  push(`quiz/singleplayer?categoria=${categoryChosen.value}`)
}
</script>

<template>
  <div
    class="p-6 bg-gray-100 border-gray-400 dark:border-gray-600 dark:bg-gray-800 border-2 rounded-xl"
  >
    <Icon
      name="mdi:account"
      size="3rem"
      class="w-full mx-auto my-0 text-slate-800 dark:text-white"
    />
    <h2 class="text-center text-3xl text-slate-800 dark:text-white font-['Bruno_Ace_SC']">
      Single player
    </h2>
    <p class="text-center text-gray-600 dark:text-gray-400 mb-4">
      Teste os seus conhecimentos com um quiz aleatório.
    </p>

    <div class="flex items-center justify-between gap-2">
      <select
        name="quizzes"
        id="quizzes"
        v-model="categoryChosen"
        class="bg-white border-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white border cursor-pointer duration-300 rounded-lg p-2 outline-none w-full"
      >
        <option disabled value="" class="dark:text-white">Selecione</option>
        <option
          v-for="{ id, name, slug } in categories"
          :key="id"
          :value="slug"
          class="dark:text-white"
        >
          {{ name }}
        </option>
      </select>

      <button
        @click="getCategory"
        class="bg-emerald-600 hover:bg-emerald-500 duration-300 text-white rounded-lg p-2 w-full capitalize"
      >
        iniciar quiz
      </button>
    </div>
  </div>
</template>
