import { AxiosError } from 'axios'

import { getNewToken } from '@/api/hooks/refresh'
import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'

export const onResponse = async (
  error: AxiosError,
  refreshToken: string,
  handleSet: (value: Omit<UserCredential, 'verified'>) => void,
  handleError: (error: Error) => void,
) => {
  const { config, response } = error
  if (response?.status === 401 && config) {
    const originalConfig = { ...config }
    try {
      const res = await getNewToken(refreshToken)
      console.log('refreshed:', new Date().toTimeString())
      console.log('new accessToken:', res.accessToken)
      originalConfig.headers['Authorization'] = `Bearer ${res.accessToken}`
      handleSet({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      })
      return apiInterface(originalConfig)
    } catch (error) {
      error instanceof Error && handleError(error)
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
}
