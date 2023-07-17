import { registerStore } from '../store/register-store'

export const useRegisterStore = () => {
  const { registerData } = registerStore()

  return {
    registerData
  }
}
