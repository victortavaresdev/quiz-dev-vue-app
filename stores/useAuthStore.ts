export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProps | null>(null)

  const getUserData = async () => {
    const { data } = await useApiFetch('auth/profile')

    user.value = data.value as UserProps
  }

  const register = async (data: RegisterProps) => {
    const register = await useApiFetch('users', {
      method: 'POST',
      body: data
    })

    if (register.status.value === 'success') {
      navigateTo('/login')
    }

    return register
  }

  const login = async (credentials: LoginProps) => {
    const login = await useApiFetch('auth/login', {
      method: 'POST',
      body: credentials
    })

    if (login.status.value === 'success') {
      localStorage.setItem('token', JSON.stringify(login.data?.value))
      await getUserData()

      navigateTo('/')
    }

    return login
  }

  const logout = async () => {
    await useApiFetch('auth/logout', { method: 'POST' })

    user.value = null
    navigateTo('/')
  }

  const updateUser = async (data: UpdateUserProps) => {
    const result = await useApiFetch(`users/${user.value?.id}/update`, {
      method: 'PUT',
      body: data
    })

    if ((result.status.value = 'success')) {
      user.value = null
      navigateTo('/login')
    }

    return result
  }

  const deleteUser = async () => {
    const result = await useApiFetch(`users/${user.value?.id}/delete`, {
      method: 'DELETE'
    })

    if ((result.status.value = 'success')) {
      user.value = null
      navigateTo('/')
    }

    return result
  }

  return {
    user,
    getUserData,
    register,
    login,
    logout,
    updateUser,
    deleteUser
  }
})
