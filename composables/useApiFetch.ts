import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <T>(path: string, options?: UseFetchOptions<T>) => {
  let headers: { Authorization?: string } = {}

  const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    const accessToken = JSON.parse(token)?.accessToken
    headers.Authorization = `Bearer ${accessToken}`
  }

  return useFetch(`${BASE_URL}/api/v1/${path}`, {
    credentials: 'include',
    baseURL: `${BASE_URL}`,
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
