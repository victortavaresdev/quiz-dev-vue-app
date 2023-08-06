<script setup lang="ts">
const { $authStore } = useNuxtApp()
const { categoria } = useRoute().query

const quiz = ref('')
const questions = ref<QuestionProps[]>([])

const currentIndex = ref(0)
const selectedOption = ref(null)
const score = ref(0)
const isFinished = ref(false)
const questionsLeft = ref(5)

const loading = ref(true)

const timeLeft = ref(15)
const timerInterval: any = ref(null)

const currentQuestion = computed(() => questions.value[currentIndex.value])
const totalQuestions = computed(() => questions.value.length)
const currentUser = computed(() => ($authStore.user ? $authStore.user.name : 'visitante'))

const getRandomQuizByCategory = async () => {
  try {
    const { data: _quiz }: any = await useApiFetch(`categories/${categoria}/random-quiz`)
    quiz.value = _quiz.value?.data.slug

    getQuestions()
    startTimer()
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}

const getQuestions = async () => {
  try {
    const { data: _questions }: any = await useApiFetch(`quizzes/${quiz.value}/questions`)
    questions.value = _questions.value?.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

const startTimer = () => {
  timerInterval.value = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--
    else submitAnswer()
  }, 1000)
}

onMounted(() => {
  getRandomQuizByCategory()
})

const submitAnswer = () => {
  if (selectedOption.value === currentQuestion.value.correctAnswer) {
    score.value += 3
  }

  if (currentIndex.value + 1 < totalQuestions.value) {
    currentIndex.value++
    questionsLeft.value--
    selectedOption.value = null
    timeLeft.value = 15
  } else {
    isFinished.value = true
    clearInterval(timerInterval.value)
    postUserScore()
  }
}

const postUserScore = async () => {
  if ($authStore.user) {
    await useApiFetch('results', {
      method: 'POST',
      body: {
        total_points: score.value
      }
    })
  }
}

const getNewQuiz = () => {
  currentIndex.value = 0
  selectedOption.value = null
  score.value = 0
  questionsLeft.value = 3
  timeLeft.value = 15
  isFinished.value = false
  loading.value = true

  getRandomQuizByCategory()
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <LoadingBar v-if="loading" />

    <div class="pt-16" v-else>
      <div
        v-if="!isFinished"
        class="bg-white w-full max-w-2xl shadow-[0_0_3px_1px] shadow-slate-200 mx-auto my-0"
      >
        <div class="flex items-center justify-between p-4 border-b-gray-300 border">
          <div class="flex items-center gap-2 text-slate-900">
            <ProfilePicture :image="$authStore.user?.image" class="w-[1.5rem] h-[1.5rem]" />
            <span class="capitalize text-sm"> {{ currentUser }} </span>
          </div>
          <div>
            <p class="text-slate-900 text-sm">
              Pontuação: <span class="font-bold">{{ score }}</span>
            </p>
          </div>
        </div>

        <div class="p-4">
          <div class="flex items-center justify-between mb-6">
            <div>
              <p class="text-sm uppercase font-bold text-gray-500">
                {{ questionsLeft }} respostas restantes
              </p>
            </div>
            <div>
              <span class="text-sm uppercase font-bold text-gray-500"
                >Tempo restante:
                <span class="text-2xl text-emerald-600">
                  {{ timeLeft.toString().padStart(2, '0') }}
                </span>
              </span>
            </div>
          </div>

          <div class="mb-4">
            <span class="text-gray-700 text-lg">{{ currentQuestion?.question }}</span>
          </div>

          <ul class="flex flex-col gap-2 mb-4">
            <li
              v-for="{ id, optionText } in currentQuestion?.options"
              :key="id"
              class="w-full p-2 bg-slate-200 hover:bg-slate-300 duration-300 text-slate-800"
            >
              <label>
                <input type="radio" :value="optionText" v-model="selectedOption" />
                {{ optionText }}
              </label>
            </li>
          </ul>

          <button
            class="text-white w-40 p-2"
            :class="selectedOption ? 'bg-emerald-600 cursor-pointer' : 'bg-gray-500'"
            @click="submitAnswer"
            :disabled="!selectedOption"
          >
            {{ selectedOption ? 'Próxima Pergunta' : 'Escolha uma opção' }}
          </button>
        </div>
      </div>

      <div
        v-else
        class="bg-white w-full max-w-lg p-4 shadow-[0_0_3px_1px] shadow-slate-200 mx-auto y-0 flex flex-col gap-4"
      >
        <div class="p-4 bg-gray-200">
          <h2 class="text-center text-2xl">Resultado do Quiz</h2>
        </div>

        <div>
          <h2 class="text-center mb-1">
            Parabéns <span class="font-bold capitalize">{{ currentUser }}</span
            >. Você completou o quiz.
          </h2>
          <p class="text-center text-xl">
            Sua pontuação:
            <span class="font-bold text-emerald-800 p-2">{{
              score.toString().padStart(2, '0')
            }}</span>
          </p>
        </div>

        <div class="flex gap-2 justify-center">
          <button
            @click="getNewQuiz"
            class="p-2 bg-emerald-600 hover:bg-emerald-700 duration-300 rounded capitalize text-white"
          >
            novo quiz
          </button>
          <NuxtLink
            to="/modos-do-quiz"
            class="p-2 bg-gray-300 hover:bg-gray-400 duration-300 rounded capitalize text-slate-900"
          >
            voltar
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
