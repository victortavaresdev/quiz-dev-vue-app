<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const { user, updateUser, deleteUser } = useAuthStore()

const formData = reactive({ name: user?.name })
const editProfile = ref(false)
const deleteUserModal = ref(false)

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
            <ProfilePicture />
            <p class="text-slate-900 text-2xl font-bold capitalize tracking-wider">
              {{ user?.name }}
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
                <h3 class="text-white">Tem certeza que quer deletar a conta?</h3>
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
          <ProfilePicture />

          <div class="flex flex-col gap-2 mb-4">
            <div>
              <label for="name" class="text-gray-500 capitalize text-base">Nome</label>
              <input
                id="name"
                type="text"
                v-model="formData.name"
                class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
                required
              />
            </div>
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
          <p>Pontuação total: <span class="font-bold">0</span></p>
        </div>
      </div>

      <div class="w-full px-8 py-4 flex flex-col gap-8">
        <div>
          <h2 class="text-center text-3xl uppercase">conquistas</h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <AchievementItem text="pronto para jogar" :date="user?.created_at" />
        </div>
      </div>
    </div>
  </section>
</template>
