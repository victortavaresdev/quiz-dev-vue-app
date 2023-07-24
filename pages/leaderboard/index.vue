<script setup lang="ts"></script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="px-8 py-16">
      <div class="mb-8">
        <h2 class="text-emerald-600 text-4xl uppercase">leaderboard</h2>
        <p class="text-gray-600">Encontre sua competição</p>
      </div>

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

      <PaginationBox />
    </div>
  </section>
</template>
