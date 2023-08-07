<script setup lang="ts">
const { id } = useRoute().params
const { $profileStore } = useNuxtApp()

const loading = ref(true)

const userId = id as string

const getProfileData = async () => {
  try {
    await $profileStore.userPersonalData(userId)
    await $profileStore.userAchievements(userId)
    await $profileStore.userResults(userId)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getProfileData()
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 dark:bg-gray-900">
    <LoadingBar v-if="loading" />

    <div class="flex gap-6 p-8" v-else>
      <div>
        <div class="flex flex-col gap-4">
          <div>
            <ProfilePicture
              :image="$profileStore.user?.image"
              class="w-[15.625rem] h-[15.625rem] mb-4"
            />
            <p class="text-slate-900 dark:text-white text-2xl font-bold capitalize tracking-wider">
              {{ $profileStore.user?.name }}
            </p>
            <p class="text-slate-700 dark:text-gray-400 tracking-wider">
              {{ $profileStore.user?.bio }}
            </p>
          </div>
        </div>

        <span class="w-[280px] block h-[3px] bg-gray-400 my-6 rounded"></span>

        <div>
          <p class="capitalize dark:text-white">
            pontuação total:
            <span class="font-bold">{{ $profileStore?.totalPoints }}</span>
          </p>
        </div>
      </div>

      <div class="w-full px-8 py-4 flex flex-col gap-8">
        <div>
          <h2
            class="text-center text-3xl uppercase font-['Bruno_Ace_SC'] text-emerald-800 dark:text-emerald-400"
          >
            conquistas
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <AchievementItem
            v-for="{ id, achievementType, unlockedAt } in $profileStore?.achievements"
            :key="id"
            :text="achievementType"
            :date="unlockedAt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
