<script setup lang="ts">
const { token } = useRoute().query

const formData = reactive({
  token: token as string,
  email: '',
  password: '',
  password_confirmation: ''
})
const errorMessage = ref('')

const handleResetPassword = async () => {
  const { data, error } = await useApiFetch('auth/reset-password', {
    method: 'POST',
    body: formData
  })

  if (error) {
    errorMessage.value = error.value?.data['message']
    setTimeout(() => (errorMessage.value = ''), 3000)
  }

  if (data.value) {
    navigateTo('/login')
  }
}

definePageMeta({
  middleware: ['reset-password']
})
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 flex justify-center items-center">
    <div
      class="bg-white max-w-sm h-min text-2xl my-12 p-8 rounded shadow-[0_0_3px_1px] shadow-slate-200"
    >
      <FormTitle text="Resetar a senha" />

      <div v-show="errorMessage" class="w-full py-1 bg-red-100 rounded">
        <p class="text-red-500 text-sm text-center">
          {{ errorMessage }}
        </p>
      </div>

      <form @submit.prevent="handleResetPassword" class="flex flex-col gap-2">
        <FormInputItem
          id="token"
          label="token"
          v-model="formData.token"
          type="text"
          :disabled="true"
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
        <FormInputItem
          id="passwordConfirmation"
          label="repetir senha"
          v-model="formData.password_confirmation"
          type="password"
          placeholder="Repita a senha"
        />

        <FormButton text="Resetar" class="mt-4" />
      </form>
    </div>
  </section>
</template>
