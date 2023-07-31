<template>
  <main class="w-full min-h-[90vh] bg-slate-100 flex justify-center">
    <div class="max-w-2xl pt-32">
      <h1 class="text-slate-900 text-5xl mb-4 text-center font-bold">
        Quizzes diários de programação e tecnologia.
      </h1>
      <p class="text-slate-600 text-center mb-8">
        QuizDev é uma plataforma de quizzes focado em programação. Teste agora seus conhecimentos
        técnicos e suba no ranking.
      </p>

      <div class="flex justify-center items-center gap-4 mb-32">
        <NuxtLink
          to="quizzes"
          class="p-4 bg-emerald-800 hover:bg-emerald-600 duration-300 text-white text-center rounded w-48 inline-block"
        >
          Começar o Quiz
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
