import api from '@/services/api'

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const { data } = await api.get('/user')
    return !!data?.email
  } catch {
    return false
  }
}
