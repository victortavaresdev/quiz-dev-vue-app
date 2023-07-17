interface RegisterData {
  registerData: UserInfo
}

interface UserInfo {
  name: string
  email: string
  password: string
}

export const registerStore = defineStore('register', {
  state: (): RegisterData => {
    return {
      registerData: {
        name: '',
        email: '',
        password: ''
      }
    }
  }
})
