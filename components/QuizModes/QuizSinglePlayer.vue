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
  <div class="p-6 border-gray-400 border-2 rounded-xl">
    <Icon name="mdi:account" size="3rem" class="w-full mx-auto my-0 text-slate-800" />
    <h2 class="text-center text-3xl text-slate-800 font-['Bruno_Ace_SC']">Single player</h2>
    <p class="text-center text-gray-600 mb-4">Teste os seus conhecimentos com um quiz aleatório.</p>

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
        @click="getCategory"
        class="bg-emerald-600 hover:bg-emerald-800 duration-300 text-white rounded-lg p-2 w-full capitalize"
      >
        iniciar quiz
      </button>
    </div>
  </div>
</template>
