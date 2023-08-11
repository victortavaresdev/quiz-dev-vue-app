<script setup lang="ts">
const { $authStore, $quizStore } = useNuxtApp()
const { categoria } = useRoute().query

const currentUser = computed(() => ($authStore.user ? $authStore.user.name : 'visitante'))

onMounted(() => {
  $quizStore.getRandomQuizByCategory(categoria as string)
})
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

      <QuizResult :category="(categoria as string)" :currentUser="currentUser" v-else />
    </div>
  </section>
</template>
