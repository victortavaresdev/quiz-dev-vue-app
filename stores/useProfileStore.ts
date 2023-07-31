export const useProfileStore = defineStore('profile', () => {
  const achievements: any = ref([])
  const totalPoints = ref<number>(0)

  const userAchievements = async (userId: string) => {
    const { data: _achievements }: any = await useApiFetch(`achievements/${userId}`)
    achievements.value = _achievements?.value.data
  }

  const userResults = async (userId: string) => {
    const { data: _results }: any = await useApiFetch(`results/${userId}`)
    totalPoints.value = _results.value.totalPoints
  }

  return {
    achievements,
    totalPoints,
    userAchievements,
    userResults
  }
})
