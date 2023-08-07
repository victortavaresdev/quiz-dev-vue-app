<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const auth = useAuthStore()
</script>

<template>
  <div
    class="absolute -bottom-[96px] w-28 rounded right-0 bg-gray-100 dark:bg-gray-900 z-10 p-1 border-gray-300 dark:border-gray-700 border"
  >
    <div
      class="flex items-center gap-2 text-slate-800 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 p-2 rounded w-full"
    >
      <Icon name="ic:baseline-person" size="1.25rem" class="dark:text-white" />
      <NuxtLink class="text-sm dark:text-white" to="/perfil">Perfil</NuxtLink>
    </div>

    <div class="border-gray-300 dark:border-gray-700 border my-1"></div>

    <div
      class="flex items-center gap-2 text-red-600 hover:text-white hover:bg-red-700 duration-300 p-2 rounded w-full"
    >
      <Icon name="material-symbols:logout-rounded" size="1.25rem" />
      <span class="text-sm" @click="auth.logout">Logout</span>
    </div>
  </div>
</template>
