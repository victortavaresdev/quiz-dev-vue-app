<script setup lang="ts">
const { $authStore, $quizStore } = useNuxtApp()

const { categoria } = useRoute().query

const currentUser = computed(() => ($authStore.user ? $authStore.user.name : 'visitante'))

onMounted(() => {
  $quizStore.getRandomQuizByCategory(categoria as string)
})

const getNewQuiz = () => {
  $quizStore.currentIndex = 0
  $quizStore.selectedOption = null
  $quizStore.score = 0
  $quizStore.questionsLeft = 5
  $quizStore.timeLeft = 15
  $quizStore.isFinished = false
  $quizStore.loading = true

  $quizStore.getRandomQuizByCategory(categoria as string)
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 dark:bg-gray-900">
    <LoadingBar v-if="$quizStore.loading" />

    <div class="pt-16" v-else>
      <div
        v-if="!$quizStore.isFinished"
        class="bg-white dark:bg-gray-900 w-full max-w-2xl shadow-[0_0_3px_1px] shadow-slate-200 dark:shadow-[0_0_2px_1px] dark:shadow-gray-700 mx-auto my-0"
      >
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center gap-2 text-slate-900">
            <ProfilePicture :image="$authStore.user?.image" class="w-[1.5rem] h-[1.5rem]" />
            <span class="capitalize text-sm dark:text-white"> {{ currentUser }} </span>
          </div>
          <div>
            <p class="text-slate-900 dark:text-white text-sm">
              Pontuação: <span class="font-bold">{{ $quizStore.score }}</span>
            </p>
          </div>
        </div>

        <div class="p-4">
          <div class="flex items-center justify-between mb-6">
            <div>
              <p class="text-sm uppercase font-bold text-gray-600 dark:text-gray-400">
                {{ $quizStore.questionsLeft }} respostas restantes
              </p>
            </div>
            <div>
              <span class="text-sm uppercase font-bold text-gray-600 dark:text-gray-400"
                >Tempo restante:
                <span class="text-2xl text-emerald-600 dark:text-emerald-400">
                  {{ $quizStore.timeLeft.toString().padStart(2, '0') }}
                </span>
              </span>
            </div>
          </div>

          <div class="mb-4">
            <span class="text-gray-700 dark:text-white text-lg">{{
              $quizStore.currentQuestion?.question
            }}</span>
          </div>

          <ul class="flex flex-col gap-2 mb-4">
            <li
              v-for="{ id, optionText } in $quizStore.currentQuestion?.options"
              :key="id"
              class="w-full p-2 bg-slate-200 hover:bg-slate-300 duration-300 text-slate-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <label>
                <input type="radio" :value="optionText" v-model="$quizStore.selectedOption" />
                {{ optionText }}
              </label>
            </li>
          </ul>

          <button
            class="text-white w-44 p-2"
            :class="
              $quizStore.selectedOption
                ? 'bg-emerald-600 dark:bg-emerald-400 dark:text-slate-900 cursor-pointer'
                : 'bg-gray-500'
            "
            @click="$quizStore.submitAnswer"
            :disabled="!$quizStore.selectedOption"
          >
            {{ $quizStore.buttonText }}
          </button>
        </div>
      </div>

      <div
        v-else
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
    </div>
  </section>
</template>
