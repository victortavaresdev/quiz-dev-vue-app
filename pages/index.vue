<template>
  <main class="w-full min-h-[90vh] dark:bg-gray-900 bg-slate-100 flex justify-center">
    <div class="pt-32">
      <h1 class="text-slate-900 dark:text-white text-6xl mb-4 text-center max-w-4xl font-bold">
        Quizzes diários de programação e tecnologia.
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-center text-xl mx-auto my-0 max-w-2xl mb-8">
        QuizDev é uma plataforma de quizzes focado em programação. Teste agora seus conhecimentos
        técnicos e suba no ranking.
      </p>

      <div class="flex justify-center items-center gap-4 mb-32">
        <NuxtLink
          to="/modos-do-quiz"
          class="p-4 bg-emerald-600 hover:bg-emerald-500 duration-300 text-white text-center rounded w-48 inline-block"
        >
          Modos do Quiz
        </NuxtLink>
        <NuxtLink
          to="/sobre"
          class="p-4 border-slate-800 border dark:hover:border-emerald-400 hover:border-emerald-600 dark:border-gray-700 dark:text-white dark:hover:text-emerald-400 hover:text-emerald-600 duration-300 text-slate-800 text-center rounded w-48 inline-block"
        >
          Regras do Jogo
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
