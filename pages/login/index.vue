<script setup lang="ts">
const { $authStore } = useNuxtApp()

const formData = reactive({ email: '', password: '' })
const errorMessage = ref('')

const handleLogin = async () => {
  const { error } = await $authStore.login(formData)

  if (error) {
    errorMessage.value = error.value?.data['message']
    setTimeout(() => (errorMessage.value = ''), 3000)
  }
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-white dark:bg-gray-900 flex justify-center">
    <div
      class="bg-white dark:bg-gray-900 w-full max-w-sm h-min text-2xl my-12 p-8 rounded shadow-[0_0_3px_1px] shadow-slate-200 dark:shadow-[0_0_2px_1px] dark:shadow-gray-700"
    >
      <FormTitle text="Logar com sua conta" />

      <ErrorMessage v-show="errorMessage" :errorMessage="errorMessage" />

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

        <FormButton text="Entrar" class="mt-4" />
      </form>

      <span class="w-full h-[1px] block bg-slate-300 dark-gray-700 dark:bg-gray-700 my-6"></span>

      <div class="flex justify-center items-center">
        <span class="text-sm text-gray-600 dark:text-gray-400 mr-2">Não tem conta cadastrada?</span>
        <NuxtLink
          to="/cadastro"
          class="text-emerald-600 dark:text-emerald-400 text-sm tracking-wider"
          >Cadastro
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
