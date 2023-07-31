export default defineNuxtRouteMiddleware((to, from) => {
  const { $authStore } = useNuxtApp()

  if (!$authStore.user && to.path === '/perfil') {
    return navigateTo('/')
  }
})
