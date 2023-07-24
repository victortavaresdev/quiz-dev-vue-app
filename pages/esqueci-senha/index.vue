<script setup lang="ts">
const email = ref('')
const message = reactive({
  text: '',
  isError: false
})

const handleForgotPassword = async () => {
  const { data, error } = await useApiFetch('auth/forgot-password', {
    method: 'POST',
    body: {
      email
    }
  })

  if (error) {
    message.text = error.value?.data['message']
    message.isError = true
    setTimeout(() => (message.text = ''), 3000)
  }

  if (data.value) {
    message.text = 'Email enviado com sucesso.'
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
        <div class="w-full py-1 bg-red-100 rounded" v-if="message.isError">
          <p class="text-red-500 text-sm text-center">
            {{ message.text }}
          </p>
        </div>
        <div class="w-full py-1 bg-green-100 rounded" v-else-if="!message.isError">
          <p class="text-green-500 text-sm text-center">
            {{ message.text }}
          </p>
        </div>
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
