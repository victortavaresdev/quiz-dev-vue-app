import { useAuthStore } from '~/stores/useAuthStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuthStore()

  if (!user && to.path === '/perfil') {
    return navigateTo('/')
  }
})
