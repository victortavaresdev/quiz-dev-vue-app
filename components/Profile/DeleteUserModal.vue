<script setup lang="ts">
const { $authStore, $generalStore } = useNuxtApp()

const handleDelete = async () => {
  await $authStore.deleteUser()
}
</script>

<template>
  <div
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
        @click="$generalStore.deleteUserModal = false"
      >
        cancelar
      </button>
    </div>
  </div>
</template>
