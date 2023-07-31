<script setup lang="ts">
const { $authStore } = useNuxtApp()

const userMenu = ref(false)
</script>

<template>
  <header
    class="bg-white text-slate-900 text-sm flex justify-between items-center px-12 py-4 h-[70px] border-b-gray-300 border"
  >
    <div class="flex items-center gap-12">
      <div>
        <NuxtLink to="/" class="text-2xl font-['League_Spartan'] tracking-wide"
          >quiz<span class="text-emerald-600">D</span>ev</NuxtLink
        >
      </div>
      <nav>
        <ul class="flex gap-6">
          <li class="tracking-wider">
            <NuxtLink to="/" class="tracking-wider hover:underline">Home</NuxtLink>
          </li>
          <li class="tracking-wider">
            <NuxtLink to="/quizzes" class="tracking-wider hover:underline">Quiz</NuxtLink>
          </li>
          <li>
            <NuxtLink class="tracking-wider hover:underline" to="/leaderboard"
              >Leaderboard</NuxtLink
            >
          </li>
          <li class="tracking-wider">
            <NuxtLink class="tracking-wider hover:underline" to="/sobre">Sobre</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center gap-4">
      <div class="border-gray-400 border rounded-full p-2">
        <Icon name="material-symbols:sunny" color="gray" />
      </div>

      <div
        v-if="$authStore.user"
        @click="() => (userMenu = !userMenu)"
        class="bg-emerald-600 rounded relative text-white p-1 flex items-center gap-1 h-[36px] cursor-pointer hover:bg-emerald-500 duration-300"
      >
        <Icon name="ic:baseline-account-circle" size="1.5rem" />
        <span class="text-sm capitalize"> {{ $authStore.user?.name }} </span>
        <UserMenu v-show="userMenu" />
      </div>
      <div class="flex items-center gap-3" v-else>
        <NuxtLink
          to="/login"
          class="text-emerald-600 bg-gray-200 hover:bg-gray-300 duration-300 px-4 py-2 rounded tracking-wider"
          >Login</NuxtLink
        >
        <NuxtLink
          to="/cadastro"
          class="bg-emerald-500 hover:bg-emerald-700 duration-300 text-white rounded px-4 py-2 tracking-wider"
        >
          Cadastre-se
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
