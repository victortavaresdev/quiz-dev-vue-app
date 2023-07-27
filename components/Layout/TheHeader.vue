<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const userMenu = ref(false)
const auth = useAuthStore()
</script>

<template>
  <header
    class="bg-white text-slate-900 text-sm flex justify-between items-center px-12 py-4 h-[70px] border-b-gray-300 border"
  >
    <div>
      <NuxtLink to="/">QuizDev</NuxtLink>
    </div>

    <nav>
      <ul class="flex gap-6">
        <l class="tracking-wider">
          <NuxtLink to="/categorias" class="tracking-wider hover:underline">Categorias</NuxtLink>
        </l>
        <li>
          <NuxtLink class="tracking-wider hover:underline" to="/leaderboard">Leaderboard</NuxtLink>
        </li>
        <li class="tracking-wider">
          <NuxtLink class="tracking-wider hover:underline" to="/sobre">Sobre</NuxtLink>
        </li>
      </ul>
    </nav>

    <div
      v-if="auth.user"
      @click="() => (userMenu = !userMenu)"
      class="bg-emerald-600 rounded relative text-white p-1 flex items-center gap-1 h-[36px] cursor-pointer hover:bg-emerald-500 duration-300"
    >
      <Icon name="ic:baseline-account-circle" size="1.5rem" />
      <span class="text-sm capitalize"> {{ auth.user?.name }} </span>

      <UserMenu v-show="userMenu" />
    </div>

    <div class="flex items-center gap-6" v-else>
      <NuxtLink to="/login" class="text-emerald-600 hover:underline tracking-wider">Login</NuxtLink>
      <NuxtLink
        to="/cadastro"
        class="bg-emerald-600 hover:bg-emerald-500 duration-300 text-white rounded px-4 py-2 tracking-wider"
      >
        Cadastre-se
      </NuxtLink>
    </div>
  </header>
</template>
