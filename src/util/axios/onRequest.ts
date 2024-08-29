import { InternalAxiosRequestConfig } from 'axios'

export const onRequest = async (config: InternalAxiosRequestConfig, accessToken: string) => {
  console.log('onRequest:', new Date().toTimeString())
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
}
