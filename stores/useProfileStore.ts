export const useProfileStore = defineStore('profile', () => {
  const user = ref<UserProps | null>(null)
  const achievements = ref<AchievementProps[]>([])
  const totalPoints = ref(0)

  const userPersonalData = async (userId: string) => {
    const { data: _user }: any = await useApiFetch(`users/${userId}`)
    user.value = _user.value?.data
  }

  const userAchievements = async (userId: string) => {
    const { data: _achievements }: any = await useApiFetch(`achievements/${userId}`)
    achievements.value = _achievements.value?.data
  }

  const userResults = async (userId: string) => {
    const { data: _results }: any = await useApiFetch(`results/${userId}`)
    totalPoints.value = _results.value?.totalPoints
  }

  return {
    user,
    achievements,
    totalPoints,
    userPersonalData,
    userAchievements,
    userResults
  }
})
