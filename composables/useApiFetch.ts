import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <T>(path: string, options?: UseFetchOptions<T>) => {
  let headers: { Authorization?: string } = {}

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    const accessToken = JSON.parse(token)?.accessToken
    headers.Authorization = `Bearer ${accessToken}`
  }

  return useFetch(`http://localhost:8000/api/v1/${path}`, {
    credentials: 'include',
    baseURL: 'http://localhost:8000',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
