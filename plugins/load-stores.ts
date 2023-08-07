import { useAuthStore } from '~/stores/useAuthStore'
import { useProfileStore } from '~/stores/useProfileStore'
import { useGeneralStore } from '~/stores/useGeneralStore'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      authStore: useAuthStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore()
    }
  }
})
