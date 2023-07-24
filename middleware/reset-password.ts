export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useRoute().query

  if (!token && to.path === '/resetar-senha') {
    return navigateTo('/')
  }
})
