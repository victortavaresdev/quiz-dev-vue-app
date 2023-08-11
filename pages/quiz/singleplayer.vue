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
      <QuizQuestions :currentUser="currentUser" v-if="!$quizStore.isFinished" />
      <QuizResult :category="(categoria as string)" :currentUser="currentUser" v-else />
    </div>
  </section>
</template>
