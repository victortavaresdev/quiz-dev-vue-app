interface LoginStore {
  loginData: UserInfo
}

interface UserInfo {
  email: string
  password: string
}

export const loginStore = defineStore('login', {
  state: (): LoginStore => {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  }
})
