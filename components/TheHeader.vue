<template>
  <header
    class="bg-white text-slate-900 text-sm flex justify-between items-center px-12 py-4 border-b-emerald-400 border"
  >
    <div>
      <NuxtLink to="/">QuizDev</NuxtLink>
    </div>

    <nav>
      <ul class="flex gap-6">
        <l class="tracking-wider">Categorias</l>
        <li class="tracking-wider">Quizzes</li>
        <li>
          <NuxtLink class="tracking-wider" to="/leaderboard">Leaderboard</NuxtLink>
        </li>
      </ul>
    </nav>

    <div v-if="token">Usuário Logado</div>

    <div class="flex items-center gap-6" v-else>
      <NuxtLink to="/login" class="text-emerald-600 tracking-wider">Login</NuxtLink>

      <NuxtLink
        to="/cadastro"
        class="bg-emerald-600 hover:bg-emerald-500 duration-300 text-white rounded px-4 py-2 tracking-wider"
      >
        Cadastre-se
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
// const item = localStorage.getItem('token')
const token = ref(false)
</script>
