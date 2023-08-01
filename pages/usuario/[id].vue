<script setup lang="ts">
const { id } = useRoute().params

const user = ref<{ name: string; bio: string } | null>(null)
const loading = ref<boolean>(true)

const getUserData = () => {
  try {
    const { data: _user }: any = useApiFetch(`users/${id}`)
    user.value = _user?.value?.data

    loading.value = false
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getUserData()
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <LoadingBar v-if="loading" />

    <div class="flex gap-6 p-8" v-else>
      <div>
        <div class="flex flex-col gap-4">
          <div>
            <ProfilePicture class="w-[15.625rem] h-[15.625rem]" />
            <p class="text-slate-900 text-2xl font-bold capitalize tracking-wider">
              {{ user?.name }}
            </p>
            <p class="text-slate-700 tracking-wider">
              {{ user?.bio }}
            </p>
          </div>
        </div>

        <span class="w-[280px] block h-[3px] bg-gray-400 my-6 rounded"></span>

        <div>
          <p>Pontuação total: <span class="font-bold">0</span></p>
        </div>
      </div>

      <div class="w-full px-8 py-4 flex flex-col gap-8">
        <div>
          <h2 class="text-center text-3xl uppercase">conquistas</h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <AchievementItem text="pronto para jogar" date="15/15/2023" />
        </div>
      </div>
    </div>
  </section>
</template>
