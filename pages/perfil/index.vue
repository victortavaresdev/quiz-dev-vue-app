<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const { user, updateUser, deleteUser } = useAuthStore()

const formData: any = reactive({ name: user?.name, bio: user?.bio, image: user?.image })
const editProfile = ref<boolean>(false)
const deleteUserModal = ref<boolean>(false)

const achievements: any = ref([])
const totalPoints = ref<number>(0)

const userAchievements = async () => {
  const { data: _achievements }: any = await useApiFetch(`achievements/${user?.id}`)
  achievements.value = _achievements?.value.data
}

const userResults = async () => {
  const { data: _results }: any = await useApiFetch(`results/${user?.id}`)
  totalPoints.value = _results.value.totalPoints
}

onMounted(() => {
  userAchievements()
  userResults()
})

const handleUpdate = async () => {
  await updateUser(formData)
  editProfile.value = false
}

const handleDelete = async () => {
  await deleteUser()
}

definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100">
    <div class="flex gap-6 p-8">
      <div>
        <div class="flex flex-col gap-4" v-if="!editProfile">
          <div>
            <ProfilePicture :image="user?.image" size="15.625rem" />
            <p class="text-slate-900 text-2xl font-bold capitalize tracking-wider">
              {{ user?.name }}
            </p>
            <p class="text-slate-700 tracking-wider">
              {{ user?.bio }}
            </p>
          </div>

          <div class="flex gap-4">
            <button
              class="bg-gray-500 text-sm hover:bg-gray-600 duration-300 p-2 text-white capitalize rounded"
              @click="() => (editProfile = !editProfile)"
            >
              <Icon name="material-symbols:edit-sharp" size="1.25rem" />
              editar perfil
            </button>
            <button
              class="bg-red-600 text-sm hover:bg-red-700 duration-300 p-2 text-white capitalize rounded"
              @click="deleteUserModal = true"
            >
              <Icon name="material-symbols:delete" size="1.25rem" />
              deletar conta
            </button>

            <div
              v-show="deleteUserModal"
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 bg-gray-800 rounded z-10"
            >
              <div class="mb-4">
                <h3 class="text-white">Tem certeza que deseja deletar a conta?</h3>
              </div>

              <div class="flex flex-col gap-2">
                <button
                  class="w-full bg-red-600 hover:bg-red-700 duration-300 text-sm p-2 text-white capitalize rounded"
                  @click="handleDelete"
                >
                  confirmar
                </button>
                <button
                  class="w-full bg-yellow-500 hover:bg-yellow-600 duration-300 text-sm p-2 text-slate-800 capitalize rounded"
                  @click="deleteUserModal = false"
                >
                  cancelar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <ProfilePicture :image="user?.image" size="15.625rem" />

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
              label="imagem"
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
              @click="() => (editProfile = false)"
            >
              Cancelar
            </button>
          </div>
        </div>

        <span class="w-[280px] block h-[3px] bg-gray-400 my-6 rounded"></span>

        <div>
          <p>
            Pontuação total: <span class="font-bold">{{ totalPoints }}</span>
          </p>
        </div>
      </div>

      <div class="w-full px-8 py-4 flex flex-col gap-8">
        <div>
          <h2 class="text-center text-3xl uppercase">conquistas</h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <AchievementItem
            v-for="{ id, achievementType, unlockedAt } in achievements"
            :key="id"
            :text="achievementType"
            :date="unlockedAt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
