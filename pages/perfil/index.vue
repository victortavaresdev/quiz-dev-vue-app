<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const { user, updateUser, deleteUser } = useAuthStore()

const formData = reactive({ name: user?.name, email: user?.email })
const editProfile = ref(false)

const handleUpdate = async () => {
  await updateUser(formData)
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
    <div class="px-8 py-16">
      <div class="mb-6">
        <h2 class="text-emerald-600 text-4xl uppercase text-center">perfil</h2>
      </div>

      <div
        class="w-full max-w-xl mx-auto my-0 bg-slate-200 p-8 shadow-[0_0_2px_1px] shadow-slate-300 rounded"
      >
        <div class="flex flex-col gap-6" v-if="!editProfile">
          <div>
            <p class="text-center text-slate-900 text-xl font-bold capitalize tracking-wider">
              {{ user?.name }}
            </p>
            <p class="text-center tracking-wider">{{ user?.email }}</p>
          </div>

          <div class="flex gap-4 justify-center">
            <button
              class="bg-gray-500 text-sm hover:bg-gray-600 duration-300 p-2 text-white capitalize rounded"
              @click="() => (editProfile = !editProfile)"
            >
              <Icon name="material-symbols:edit-sharp" size="1.25rem" />
              editar perfil
            </button>
            <button
              class="bg-red-600 text-sm hover:bg-red-700 duration-300 p-2 text-white capitalize rounded"
              @click="handleDelete"
            >
              <Icon name="material-symbols:delete" size="1.25rem" />
              deletar conta
            </button>
          </div>
        </div>

        <div v-else>
          <label for="name" class="text-gray-500 capitalize text-base">Nome</label>
          <input
            id="name"
            type="text"
            v-model="formData.name"
            class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
            required
          />

          <label for="email" class="text-gray-500 capitalize text-base">Email</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
            required
          />

          <div class="flex gap-4 justify-center">
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

        <span class="w-full block h-[1px] bg-gray-400 my-6"></span>

        <div class="">
          <p class="text-center font-bold">Pontuação total: <span>150</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
