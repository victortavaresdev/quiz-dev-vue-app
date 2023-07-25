<script setup lang="ts">
const { page } = useRoute().query

const { data: leaderboard }: any = useApiFetch(`leaderboard?page=${page}`)
</script>

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
          <TableBodyItem
            v-for="{ id, user, totalScore } in leaderboard?.data"
            :key="id"
            :user="user"
            quizzes="6"
            average="85"
            :score="totalScore"
          />
        </tbody>
      </table>

      <div class="flex items-center justify-center gap-4">
        <div class="text-sm text-gray-800 font-bold">
          Página {{ leaderboard?.meta.current_page }} de {{ leaderboard?.meta.last_page }}
        </div>
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
