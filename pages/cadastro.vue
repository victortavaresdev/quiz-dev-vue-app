<template>
  <section class="w-full min-h-[90vh] bg-slate-100 flex justify-center">
    <div
      class="bg-white max-w-sm h-min text-2xl my-12 p-8 rounded shadow-[0_0_3px_1px] shadow-slate-200"
    >
      <h2 class="text-center text-slate-800 text-xl font-bold mb-4">Criar nova conta</h2>

      <form @submit.prevent="createUser">
        <div class="mb-3">
          <label for="nome" class="text-gray-500 text-base">Nome</label>
          <input
            v-model="registerData.name"
            placeholder="Digite seu nome"
            type="text"
            id="nome"
            class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
            required
          />
        </div>

        <div class="mb-3">
          <label for="email" class="text-gray-500 text-base">Email</label>
          <input
            v-model="registerData.email"
            placeholder="Digite seu email"
            type="email"
            id="email"
            class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
            required
          />
        </div>

        <div class="mb-6">
          <label for="password" class="text-gray-500 text-base">Senha</label>
          <input
            v-model="registerData.password"
            placeholder="Digite sua senha"
            type="password"
            id="password"
            class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
            required
          />
        </div>

        <button
          class="w-full block bg-emerald-600 hover:bg-emerald-500 duration-300 text-white text-center text-base mb-6 py-2 rounded"
        >
          Cadastrar
        </button>
      </form>

      <span class="w-full h-[1px] block bg-slate-400 mb-6"></span>

      <div class="flex justify-center items-center">
        <p class="text-sm text-gray-600 mr-2">Já tem conta cadastrada ou github?</p>
        <NuxtLink to="/login" class="text-emerald-600 text-sm tracking-wider">Login </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { registerData } = useRegisterStore()

const createUser = async () => {
  try {
    await useFetch('http://localhost:8000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: registerData
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
