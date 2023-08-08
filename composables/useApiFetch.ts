import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <T>(path: string, options?: UseFetchOptions<T>) => {
  let headers: { Authorization?: string } = {}

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    const accessToken = JSON.parse(token)?.accessToken
    headers.Authorization = `Bearer ${accessToken}`
  }

  return useFetch(`https://quiz-dev-api.onrender.com/api/v1/${path}`, {
    credentials: 'include',
    baseURL: 'https://quiz-dev-api.onrender.com',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
