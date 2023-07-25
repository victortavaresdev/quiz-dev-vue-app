<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const formData = reactive({ email: '', password: '' })
const errorMessage = ref('')

const { login } = useAuthStore()

const handleLogin = async () => {
  const { error } = await login(formData)

  if (error) {
    errorMessage.value = error.value?.data['message']
    setTimeout(() => (errorMessage.value = ''), 3000)
  }
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 flex justify-center">
    <div
      class="bg-white max-w-sm h-min text-2xl my-12 p-8 rounded shadow-[0_0_3px_1px] shadow-slate-200"
    >
      <FormTitle text="Logar com sua conta" />

      <div v-show="errorMessage" class="w-full py-1 bg-red-100 rounded">
        <p class="text-red-500 text-sm text-center">{{ errorMessage }}</p>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-2">
        <FormInputItem
          id="email"
          label="email"
          v-model="formData.email"
          type="email"
          placeholder="Digite seu email"
        />
        <FormInputItem
          id="password"
          label="senha"
          v-model="formData.password"
          type="password"
          placeholder="Digite sua senha"
        />

        <NuxtLink to="esqueci-senha" class="text-emerald-600 text-sm text-right cursor-pointer"
          >Esqueci a senha</NuxtLink
        >

        <FormButton text="Entrar" />
      </form>

      <span class="w-full h-[1px] block bg-slate-400 my-6"></span>

      <div class="flex justify-center items-center">
        <p class="text-sm text-gray-600 mr-2">Entre com sua conta:</p>
        <img src="img/github.svg" alt="github icon" class="cursor-pointer" />
      </div>
    </div>
  </section>
</template>
