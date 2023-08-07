<script setup lang="ts">
const { $authStore, $profileStore, $generalStore } = useNuxtApp()

const userId = $authStore.user?.id as string

const formData: any = reactive({
  name: $authStore.user?.name,
  bio: $authStore.user?.bio,
  image: $authStore.user?.image
})

const getProfileData = async () => {
  try {
    await $profileStore.userAchievements(userId)
    await $profileStore.userResults(userId)
  } catch (error) {
    console.log(error)
  } finally {
    $generalStore.loading = false
  }
}

onMounted(() => {
  getProfileData()
})

const handleUpdate = async () => {
  await $authStore.updateUser(formData)
  $generalStore.editUserProfile = false
}

definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 dark:bg-gray-900">
    <LoadingBar v-if="$generalStore.loading" />

    <div class="flex gap-6 p-8" v-else>
      <div>
        <div class="flex flex-col gap-4" v-if="!$generalStore.editUserProfile">
          <div>
            <ProfilePicture
              :image="$authStore.user?.image"
              class="w-[15.625rem] h-[15.625rem] mb-4"
            />

            <p class="text-slate-900 dark:text-white text-2xl font-bold capitalize tracking-wider">
              {{ $authStore.user?.name }}
            </p>
            <p class="text-slate-700 dark:text-gray-400 tracking-wider">
              {{ $authStore.user?.bio }}
            </p>
          </div>

          <div class="flex gap-4">
            <button
              class="bg-white dark:bg-gray-900 dark:text-white text-sm text-slate-900 hover:bg-gray-200 dark:hover:bg-gray-800 duration-300 border-gray-300 dark:border-gray-700 border p-2 capitalize rounded"
              @click="() => ($generalStore.editUserProfile = !$generalStore.editUserProfile)"
            >
              <Icon name="material-symbols:edit-sharp" size="1.25rem" />
              editar perfil
            </button>
            <button
              class="bg-white dark:bg-gray-900 dark:text-white text-slate-900 text-sm hover:bg-red-700 dark:hover:bg-red-600 dark:hover:border-none hover:text-white duration-300 border-gray-300 dark:border-gray-700 border p-2 capitalize rounded"
              @click="$generalStore.deleteUserModal = true"
            >
              <Icon name="material-symbols:delete" size="1.25rem" />
              deletar conta
            </button>

            <DeleteUserModal v-show="$generalStore.deleteUserModal" />
          </div>
        </div>

        <div v-else>
          <ProfilePicture
            :image="$authStore.user?.image"
            class="w-[15.625rem] h-[15.625rem] mb-4"
          />

          <div class="flex flex-col gap-2 mb-4">
            <FormInputItem id="name" type="text" label="nome" v-model="formData.name" />
            <FormInputItem
              id="bio"
              type="text"
              label="biografia"
              v-model="formData.bio"
              placeholder="Adicione sua bio"
            />
            <FormInputItem
              id="image"
              type="text"
              label="avatar URL"
              v-model="formData.image"
              placeholder="URL da sua foto de perfil"
            />
          </div>

          <div class="flex gap-4">
            <button
              class="bg-emerald-500 text-sm hover:bg-emerald-600 duration-300 p-2 text-white capitalize rounded"
              @click="handleUpdate"
            >
              Salvar
            </button>
            <button
              class="bg-gray-600 text-sm hover:bg-gray-700 duration-300 p-2 text-white capitalize rounded"
              @click="() => ($generalStore.editUserProfile = false)"
            >
              Cancelar
            </button>
          </div>
        </div>

        <span class="w-[280px] block h-[3px] bg-gray-400 my-6 rounded"></span>

        <div>
          <p class="dark:text-white">
            Pontuação Total: <span class="font-bold">{{ $profileStore.totalPoints }}</span>
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
            v-for="{ id, achievementType, unlockedAt } in $profileStore.achievements"
            :key="id"
            :text="achievementType"
            :date="unlockedAt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
