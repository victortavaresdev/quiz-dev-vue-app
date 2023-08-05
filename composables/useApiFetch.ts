import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <T>(path: string, options?: UseFetchOptions<T>) => {
  let headers: { Authorization?: string } = {}

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    const accessToken = JSON.parse(token)?.accessToken
    headers.Authorization = `Bearer ${accessToken}`
  }

  return useFetch(`https://quizdev.up.railway.app/api/v1/${path}`, {
    credentials: 'include',
    baseURL: 'https://quizdev.up.railway.app',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
