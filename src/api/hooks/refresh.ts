import { LoginResponse } from '@/api/types/auth'
import { apiInterface } from '@/util/axios/custom-axios'

export const getNewToken = async (refreshToken: string) => {
  const response = await apiInterface.post<LoginResponse['token']>(`/auth/refresh`, null, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  })
  return response.data
}
