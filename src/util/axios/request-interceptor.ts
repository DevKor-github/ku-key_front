import { InternalAxiosRequestConfig } from 'axios'

import { getNewToken } from '@/api/hooks/refresh'
import { UserCredential } from '@/types/user'

export const onRequest = async (
  config: InternalAxiosRequestConfig,
  userCredential: UserCredential,
  handleSet: (value: Omit<UserCredential, 'verified'>) => void,
) => {
  console.log('onRequest:', new Date().toTimeString())
  if (config.headers.Authorization === undefined) config.headers.Authorization = `Bearer ${userCredential.accessToken}`
  else {
    const response = await getNewToken(userCredential.refreshToken)
    console.log('refreshed:', new Date().toTimeString())
    handleSet({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    })
    config.headers.Authorization = `Bearer ${response.accessToken}`
  }
  setTimeout(onRequest, 1000 * 60 * 5)

  return config
}
