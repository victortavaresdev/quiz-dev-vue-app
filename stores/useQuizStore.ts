export const useQuizStore = defineStore('quiz', () => {
  const quiz = ref('')
  const questions = ref<QuestionProps[]>([])

  const loading = ref(true)

  const currentIndex = ref(0)
  const selectedOption = ref(null)
  const score = ref(0)
  const isFinished = ref(false)
  const questionsLeft = ref(5)

  const timeLeft = ref(15)
  const timerInterval: any = ref(null)

  const currentQuestion = computed(() => questions.value[currentIndex.value])
  const totalQuestions = computed(() => questions.value.length)

  const getRandomQuizByCategory = async (category: string) => {
    try {
      const { data: _quiz }: any = await useApiFetch(`categories/${category}/random-quiz`)
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
    if (!timerInterval.value) {
      timerInterval.value = setInterval(() => {
        if (timeLeft.value > 0) timeLeft.value--
        else submitAnswer()
      }, 1000)
    }
  }

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
      postUserScore()
    }
  }

  const postUserScore = async () => {
    await useApiFetch('results', {
      method: 'POST',
      body: {
        total_points: score.value
      }
    })
  }

  const resetQuiz = () => {
    currentIndex.value = 0
    selectedOption.value = null
    score.value = 0
    questionsLeft.value = 5
    timeLeft.value = 15
    isFinished.value = false
    loading.value = true
  }

  return {
    getRandomQuizByCategory,
    submitAnswer,
    resetQuiz,
    currentIndex,
    selectedOption,
    score,
    isFinished,
    questionsLeft,
    timeLeft,
    currentQuestion,
    loading
  }
})
