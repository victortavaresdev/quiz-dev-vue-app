<script setup lang="ts">
const email = ref('')
const message = reactive({
  text: '',
  isError: false
})

const handleForgotPassword = async () => {
  const { data, error }: any = await useApiFetch('auth/forgot-password', {
    method: 'POST',
    body: {
      email
    }
  })

  console.log(error)

  if (error) {
    message.text = error.value?.data['message']
    message.isError = true
    setTimeout(() => (message.text = ''), 3000)
  }

  if (data.value) {
    message.text = data.value?.message
    message.isError = false
    setTimeout(() => (message.text = ''), 3000)
  }
}
</script>

<template>
  <section class="w-full min-h-[90vh] bg-slate-100 flex justify-center items-center">
    <div
      class="bg-white max-w-sm h-min text-2xl my-12 p-8 rounded shadow-[0_0_3px_1px] shadow-slate-200"
    >
      <FormTitle text="Redefinição de senha" />

      <div v-show="message.text">
        <ErrorMessage v-if="message.isError" :errorMessage="message.text" />
        <SuccessMessage v-else-if="!message.isError" :successMessage="message.text" />
      </div>

      <form @submit.prevent="handleForgotPassword" class="flex flex-col gap-4">
        <FormInputItem
          id="email"
          label="email"
          v-model="email"
          type="email"
          placeholder="Digite seu email"
        />

        <FormButton text="Enviar" />
      </form>
    </div>
  </section>
</template>
