<script setup lang="ts">
const leaderboard: any = ref<LeaderboardProps[]>([])
const currentPage = ref(1)
const paginationMeta: any = ref<PaginationMeta | {}>({})

const loading = ref(true)

const getLeaderboardData = async () => {
  try {
    const { data: _leaderboard } = await useApiFetch(`leaderboard?page=${currentPage.value}`)

    leaderboard.value = _leaderboard.value as LeaderboardProps[]
    paginationMeta.value = _leaderboard.value as PaginationMeta
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getLeaderboardData()
})

const changePage = (page: number) => {
  currentPage.value = page
  getLeaderboardData()
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="px-8 py-12 flex flex-col gap-8">
      <TheHeading title="leaderboard" subtitle="Encontre sua competição." />

      <LoadingBar v-if="loading" />

      <div v-else>
        <div class="bg-white p-6 rounded-lg shadow-[0_0_3px_1px] shadow-slate-200 mb-4">
          <table class="w-full text-sm border-gray-300 border rounded">
            <thead class="border-b border-gray-300 bg-gray-100">
              <TableHeadItem />
            </thead>
            <tbody>
              <TableBodyItem
                v-for="({ id, user, image, totalQuizzes, totalScore }, index) in leaderboard?.data"
                :key="id"
                :id="id"
                :user="user"
                :image="image"
                :ranking="index"
                :totalQuizzes="totalQuizzes"
                :totalScore="totalScore"
              />
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-center gap-4">
          <div class="text-sm text-gray-800 font-bold">
            Página {{ currentPage }} de {{ paginationMeta?.meta?.last_page }}
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
              :disabled="currentPage === paginationMeta?.meta?.last_page"
              @click="changePage(currentPage + 1)"
            >
              >
            </button>
            <button
              class="w-7 h-7 hover:bg-slate-300 duration-300 border-slate-400 border rounded"
              :disabled="currentPage === paginationMeta?.meta?.last_page"
              @click="changePage(paginationMeta?.meta?.last_page)"
            >
              >>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
