import { useAuthStore } from '~/stores/useAuthStore'
import { useProfileStore } from '~/stores/useProfileStore'
import { useGeneralStore } from '~/stores/useGeneralStore'
import { useQuizStore } from '~/stores/useQuizStore'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      authStore: useAuthStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore(),
      quizStore: useQuizStore()
    }
  }
})
