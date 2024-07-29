import axios from 'axios'

import { LoginResponse } from '@/api/types/auth'

export const getNewToken = async (refreshToken: string) => {
  const response = await axios.post<LoginResponse['token']>(`${import.meta.env.VITE_API_URL}/auth/refresh`, null, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  })
  return response.data
}
