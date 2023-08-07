<script setup lang="ts"></script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 dark:bg-gray-900">
    <div class="px-8 py-12 flex flex-col gap-6 w-full max-w-5xl">
      <TheHeading title="sobre" />

      <div>
        <h2 class="font-bold text-slate-900 dark:text-white text-xl mb-2">O que é QuizDev?</h2>

        <p class="mb-2 text-slate-900 dark:text-white">
          QuizDev é um emocionante jogo de código aberto com foco em quizzes de programação que visa
          fornecer uma plataforma divertida e desafiadora para desenvolvedores de todos os níveis de
          habilidade poderem testar seus conhecimentos técnicos.
        </p>
        <p class="text-slate-900 dark:text-white">
          Seja você um iniciante procurando aprimorar suas habilidades técnicas ou um desenvolvedor
          experiente em busca de um novo desafio, a Quiz Dev é para você.
        </p>
      </div>

      <div>
        <h2 class="font-bold text-slate-900 dark:text-white text-xl mb-2">
          Quais as regras do jogo?
        </h2>

        <ul class="text-slate-900 dark:text-white">
          <li>
            1 - Responda à pergunta selecionando uma das
            <span class="font-bold">4 opções de resposta</span>.
          </li>
          <li>2 - Responda a pergunta em menos de <span class="font-bold">15 segundos</span>.</li>
          <li>
            3 - As <span class="font-bold">pontuações</span> são mostradas na parte superior do
            quiz.
          </li>
          <li>4 - Cada pergunta vale <span class="font-bold">3 pontos</span>.</li>
          <li>5 - Um <span class="font-bold">quiz completo</span> consiste em 5 perguntas.</li>
        </ul>
      </div>

      <div>
        <h2 class="font-bold text-slate-900 dark:text-white text-xl mb-2">Quer contribuir?</h2>

        <p class="text-slate-900 dark:text-white">
          Como um projeto de código aberto, a QuizDev prospera com o apoio de sua comunidade. Se
          você está entusiasmado em aprimorar o jogo ou adicionar novos recursos, convidamos você a
          contribuir com o projeto. Confira o repositório do GitHub
          <a
            href="https://github.com/victortavaresdev"
            target="_blank"
            class="text-blue-600 dark:text-blue-400 font-bold"
            >aqui</a
          >
          para começar.
        </p>
      </div>
    </div>
  </section>
</template>
