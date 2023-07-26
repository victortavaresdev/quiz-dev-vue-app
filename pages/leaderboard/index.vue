<script setup lang="ts">
interface UsersProps {
  id: string
  user: string
  totalScore: number
}

const users = ref<UsersProps | []>([])
const currentPage = ref<number>(1)
const paginationMeta = ref<any>(null)

const fetchData = () => {
  const { data: leaderboard }: any = useApiFetch('leaderboard', {
    query: {
      page: currentPage.value
    }
  })

  users.value = leaderboard?.value?.data
  paginationMeta.value = leaderboard?.value?.meta
}

onMounted(() => {
  fetchData()
})

const changePage = (page: number) => {
  currentPage.value = page
  fetchData()
}
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
            v-for="{ id, user, totalScore } in users"
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
          Página {{ currentPage }} de {{ paginationMeta?.last_page }}
        </div>
        <div class="text-sm text-gray-600 flex gap-2">
          <button
            class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded"
            :disabled="currentPage === 1"
            @click="changePage((currentPage = 1))"
          >
            &lt;&lt;
          </button>
          <button
            class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            &lt;
          </button>
          <button
            class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded"
            :disabled="currentPage === paginationMeta?.last_page"
            @click="changePage(currentPage + 1)"
          >
            >
          </button>
          <button
            class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded"
            :disabled="currentPage === paginationMeta?.last_page"
            @click="changePage(paginationMeta?.last_page)"
          >
            >>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
