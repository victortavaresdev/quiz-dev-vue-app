<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="px-8 py-16">
      <h2 class="text-emerald-600 text-4xl uppercase">Leaderboard</h2>
      <p class="text-gray-600 mb-8">Encontre sua competição</p>

      <table class="w-full text-sm border-gray-400 border rounded mb-4">
        <thead class="border-b border-gray-400">
          <TableHeadItem />
        </thead>
        <tbody>
          <TableBodyItem user="Amanda" quizzes="6" average="85" score="150" />
          <TableBodyItem user="João" quizzes="3" average="76" score="123" />
          <TableBodyItem user="Lucas" quizzes="4" average="72" score="117" />
          <TableBodyItem user="Laura" quizzes="3" average="69" score="110" />
          <TableBodyItem user="Pedro" quizzes="5" average="61" score="98" />
        </tbody>
      </table>

      <div class="flex items-center justify-center gap-4">
        <div class="text-sm text-gray-800 font-bold">Página 1 de 5</div>
        <div class="text-sm text-gray-600 flex gap-2">
          <button class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded">
            &lt;&lt;
          </button>
          <button class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded">
            &lt;
          </button>
          <button class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded">
            >
          </button>
          <button class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded">
            >>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
