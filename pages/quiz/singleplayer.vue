<script setup lang="ts">
const { $authStore, $quizStore } = useNuxtApp()
const { categoria } = useRoute().query

const currentUser = computed(() => ($authStore.user ? $authStore.user.name : 'visitante'))

onMounted(() => {
  $quizStore.resetQuiz()
  $quizStore.getRandomQuizByCategory(categoria as string)
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-white dark:bg-gray-900">
    <LoadingBar v-if="$quizStore.loading" />

    <div class="pt-16" v-else>
      <QuizQuestions :currentUser="currentUser" v-if="!$quizStore.isFinished" />
      <QuizResult :currentUser="currentUser" :category="(categoria as string)" v-else />
    </div>
  </section>
</template>
