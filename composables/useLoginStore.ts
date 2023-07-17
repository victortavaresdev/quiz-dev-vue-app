import { loginStore } from '../store/login-store'

export const useLoginStore = () => {
  const { loginData } = loginStore()

  return {
    loginData
  }
}
