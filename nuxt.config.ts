// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
  components: [{ path: '~/components', pathPrefix: false }],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  app: {
    head: {
      title: 'QuizDev - Quizzes de programação',
      meta: [{ name: 'description', content: 'QuizDev - Quizzes de programação' }]
    }
  }
})
