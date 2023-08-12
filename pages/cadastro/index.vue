<script setup lang="ts">
const { $authStore } = useNuxtApp()

const formData = reactive({ name: '', email: '', password: '' })
const errorMessage = ref('')

const handleRegister = async () => {
  const { error } = await $authStore.register(formData)

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
      <FormTitle text="Criar nova conta" />

      <ErrorMessage v-show="errorMessage" :errorMessage="errorMessage" />

      <form @submit.prevent="handleRegister" class="flex flex-col gap-2">
        <FormInputItem
          id="name"
          label="nome"
          v-model="formData.name"
          type="text"
          placeholder="Digite seu nome"
        />
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

        <FormButton text="Cadastrar" class="mt-4" />
      </form>

      <span class="w-full h-[1px] block bg-slate-300 dark-gray-700 dark:bg-gray-700 my-6"></span>

      <div class="flex justify-center items-center">
        <span class="text-sm text-gray-600 dark:text-gray-400 mr-2">Já tem conta cadastrada?</span>
        <NuxtLink to="/login" class="text-emerald-600 dark:text-emerald-400 text-sm tracking-wider"
          >Login
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
