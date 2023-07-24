<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const { slug } = useRoute().params
const { user } = useAuthStore()

const { data: questions }: any = await useApiFetch(`quizzes/${slug}/questions`)

const currentIndex = ref(0)
const selectedOption = ref(null)
const score = ref(0)
const isFinished = ref(false)

const currentQuestion = computed(() => questions.value.data[currentIndex.value])
const totalQuestions = computed(() => questions.value.data.length)

const postUserScore = async () => {
  await useApiFetch('scores', {
    method: 'POST',
    body: {
      total_points: score.value,
      user_id: user?.id
    }
  })
}

const checkAnswer = () => {
  if (selectedOption.value === currentQuestion.value.correctAnswer) {
    score.value++
  }

  if (currentIndex.value + 1 < totalQuestions.value) {
    currentIndex.value++
    selectedOption.value = null
  } else {
    isFinished.value = true
    postUserScore()
  }
}

const restartQuiz = () => {
  currentIndex.value = 0
  selectedOption.value = null
  score.value = 0
  isFinished.value = false
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="pt-12">
      <div class="mb-8">
        <h2 class="text-center text-2xl">Quiz</h2>
      </div>

      <div
        v-if="!isFinished"
        class="bg-white rounded w-full max-w-2xl p-2 shadow-[0_0_3px_1px] shadow-slate-300 mx-auto my-0 flex flex-col gap-4"
      >
        <div class="flex items-center justify-between">
          <span class="text-gray-700 text-lg">{{ currentQuestion.question }}</span>
          <p class="text-gray-700">
            <span class="font-bold">Pontuação: </span>
            {{ score }}/{{ totalQuestions }}
          </p>
        </div>

        <ul class="flex flex-col gap-2">
          <li
            v-for="{ id, optionText } in currentQuestion.options"
            :key="id"
            class="w-full p-2 bg-slate-500 hover:bg-slate-400 duration-300 rounded text-white"
          >
            <label>
              <input type="radio" :value="optionText" v-model="selectedOption" />
              {{ optionText }}
            </label>
          </li>
        </ul>

        <button
          class="text-left text-white w-40 p-2 rounded"
          :class="selectedOption ? 'bg-emerald-600' : 'bg-gray-400'"
          @click="checkAnswer"
          :disabled="!selectedOption"
        >
          {{ selectedOption ? 'Próxima Pergunta' : 'Escolha uma opção' }}
        </button>
      </div>

      <div
        v-else
        class="bg-white rounded w-full max-w-lg p-2 shadow-[0_0_3px_1px] shadow-slate-300 mx-auto my-0 flex flex-col gap-4"
      >
        <h2 class="text-center">Parabéns! Você completou o quiz.</h2>
        <p class="text-center text-xl">
          <span class="font-bold"> Sua pontuação: </span> {{ score }}/{{ totalQuestions }}
        </p>
        <button @click="restartQuiz">Restart</button>
      </div>
    </div>
  </section>
</template>
