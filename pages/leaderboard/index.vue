<script setup lang="ts">
const leaderboard = ref<LeaderboardProps[]>([])
const currentPage = ref(1)
const paginationMeta: any = ref<Partial<PaginationMeta> | {}>({})

const loading = ref(true)

const getLeaderboardData = async () => {
  try {
    const { data: _leaderboard }: any = await useApiFetch(`leaderboard?page=${currentPage.value}`)

    leaderboard.value = _leaderboard.value?.data
    paginationMeta.value = _leaderboard.value?.meta
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
  <section class="w-full min-h-[90vh] bg-white dark:bg-gray-900">
    <div class="px-8 py-12 flex flex-col gap-8">
      <TheHeading title="leaderboard" subtitle="Encontre sua competição." />

      <LoadingBar v-if="loading" />

      <div v-else>
        <div
          class="bg-white dark:bg-gray-900 p-6 rounded-lg dark:shadow-[0_0_2px_1px] dark:shadow-slate-700 shadow-[0_0_3px_1px] shadow-slate-200 mb-4"
        >
          <table class="w-full text-sm border-gray-300 dark:border-gray-700 border rounded">
            <thead class="border-b border-gray-300 dark:border-gray-700 bg-gray-100">
              <TableHeadItem />
            </thead>
            <tbody>
              <TableBodyItem
                v-for="({ id, user, image, totalQuizzes, totalScore }, index) in leaderboard"
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
          <div class="text-sm text-gray-800 dark:text-white font-bold">
            Página {{ currentPage }} de {{ paginationMeta?.last_page }}
          </div>
          <div class="text-sm text-gray-600 flex gap-2">
            <button
              class="w-7 h-7 hover:bg-slate-300 duration-300 dark:text-white dark:hover:bg-gray-800 border-slate-400 dark:border-gray-700 border rounded"
              :disabled="currentPage === 1"
              @click="changePage((currentPage = 1))"
            >
              &lt;&lt;
            </button>
            <button
              class="w-7 h-7 hover:bg-slate-300 duration-300 dark:text-white dark:hover:bg-gray-800 border-slate-400 dark:border-gray-700 border rounded"
              :disabled="currentPage === 1"
              @click="changePage(currentPage - 1)"
            >
              &lt;
            </button>
            <button
              class="w-7 h-7 hover:bg-slate-300 duration-300 dark:text-white dark:hover:bg-gray-800 border-slate-400 dark:border-gray-700 border rounded"
              :disabled="currentPage === paginationMeta?.last_page"
              @click="changePage(currentPage + 1)"
            >
              >
            </button>
            <button
              class="w-7 h-7 hover:bg-slate-300 duration-300 dark:text-white dark:hover:bg-gray-800 border-slate-400 dark:border-gray-700 border rounded"
              :disabled="currentPage === paginationMeta?.last_page"
              @click="changePage(paginationMeta?.last_page)"
            >
              >>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
