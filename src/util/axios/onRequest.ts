import { InternalAxiosRequestConfig } from 'axios'

import { UserCredential } from '@/types/user'

export const onRequest = async (config: InternalAxiosRequestConfig, accessToken: string) => {
  console.log('onRequest:', new Date().toTimeString())
  // const accessToken: Pick<UserCredential, 'accessToken'> = JSON.parse(
  //   localStorage.getItem('userCredential') as string,
  // ).accessToken
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
}
