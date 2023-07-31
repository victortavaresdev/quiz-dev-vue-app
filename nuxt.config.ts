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
      meta: [{ name: 'description', content: 'QuizDev - Quizzes de programação' }],
      link: [
        {
          rel: 'preconnect',
          href: 'nts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=League+Spartan&display=swap'
        }
      ]
    }
  }
})
