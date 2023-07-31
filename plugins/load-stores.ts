import { useAuthStore } from '~/stores/useAuthStore'
import { useProfileStore } from '~/stores/useProfileStore'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      authStore: useAuthStore(),
      profileStore: useProfileStore()
    }
  }
})
