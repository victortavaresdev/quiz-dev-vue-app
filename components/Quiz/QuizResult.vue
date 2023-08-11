<script setup lang="ts">
const props = defineProps<{
  category: string
  currentUser: string
}>()

const { $quizStore } = useNuxtApp()

const getNewQuiz = () => {
  $quizStore.currentIndex = 0
  $quizStore.selectedOption = null
  $quizStore.score = 0
  $quizStore.questionsLeft = 5
  $quizStore.timeLeft = 15
  $quizStore.isFinished = false
  $quizStore.loading = true

  $quizStore.getRandomQuizByCategory(props.category)
}
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 w-full max-w-lg p-4 shadow-[0_0_3px_1px] shadow-slate-200 dark:shadow-[0_0_2px_1px] dark:shadow-gray-700 mx-auto y-0 flex flex-col gap-4"
  >
    <div class="p-4 bg-gray-200 dark:bg-gray-800">
      <h2 class="text-center text-2xl dark:text-white">Resultado do Quiz</h2>
    </div>

    <div>
      <h2 class="text-center dark:text-white mb-1">
        Parabéns <span class="font-bold capitalize">{{ currentUser }}</span
        >. Você completou o quiz.
      </h2>
      <p class="text-center text-xl dark:text-white">
        Sua pontuação:
        <span class="font-bold text-emerald-800 dark:text-emerald-400 p-2">{{
          $quizStore.score.toString().padStart(2, '0')
        }}</span>
      </p>
    </div>

    <div class="flex gap-2 justify-center">
      <button
        @click="getNewQuiz"
        class="p-2 bg-emerald-600 hover:bg-emerald-500 duration-300 rounded capitalize text-white"
      >
        novo quiz
      </button>
      <NuxtLink
        to="/modos-do-quiz"
        class="p-2 border-gray-300 bg-white hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700 border dark:hover:bg-gray-800 duration-300 rounded capitalize text-slate-900"
      >
        voltar
      </NuxtLink>
    </div>
  </div>
</template>
