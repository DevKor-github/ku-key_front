import { AxiosError } from 'axios'

import { getNewToken } from '@/api/hooks/refresh'
import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'

let isRefreshing = false
const pendingRequests: ((arg: string) => void)[] = []
export const onResponse = async (
  error: AxiosError,
  refreshToken: string,
  handleSet: (value: Omit<UserCredential, 'verified' | 'deviceCode'>) => void,
  handleError: (error: Error) => void,
) => {
  const { config, response } = error

  if (response?.status === 401 && config) {
    const originalConfig = { ...config }
    if (!isRefreshing) {
      isRefreshing = true
      try {
        const res = await getNewToken(refreshToken)
        console.log('refreshed:', new Date().toTimeString())
        handleSet({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        })
        pendingRequests.forEach(callback => callback(res.accessToken))
        pendingRequests.length = 0
        originalConfig.headers['Authorization'] = `Bearer ${res.accessToken}`
        return apiInterface(originalConfig)
      } catch (error) {
        error instanceof Error && handleError(error)
        return Promise.reject(error)
      } finally {
        isRefreshing = false
      }
    }
    return new Promise(resolve => {
      pendingRequests.push(newAccessToken => {
        originalConfig.headers['Authorization'] = `Bearer ${newAccessToken}`
        resolve(apiInterface(originalConfig))
      })
    })
  }
  return Promise.reject(error)
}
