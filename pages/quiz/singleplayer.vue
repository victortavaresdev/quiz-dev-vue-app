<script setup lang="ts">
const { $authStore, $quizStore } = useNuxtApp()
const { categoria } = useRoute().query

const currentUser = computed(() => ($authStore.user ? $authStore.user.name : 'visitante'))
const category = categoria as string

onMounted(() => {
  $quizStore.resetQuiz()
  $quizStore.getRandomQuizByCategory(category)
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-white dark:bg-gray-900">
    <LoadingBar v-if="$quizStore.loading" />

    <div class="pt-16" v-else>
      <QuizQuestions :currentUser="currentUser" v-if="!$quizStore.isFinished" />
      <QuizResult :currentUser="currentUser" :category="category" v-else />
    </div>
  </section>
</template>
