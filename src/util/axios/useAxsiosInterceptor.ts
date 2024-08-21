import { AxiosError } from 'axios'
import { useStore } from 'jotai'
import { useLayoutEffect } from 'react'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'
import { onRequest } from '@/util/axios/onRequest'
import { onResponse } from '@/util/axios/onResponse'

export const useAxsiosInterceptor = (
  userCredential: UserCredential | null,
  handleSet: (value: Omit<UserCredential, 'verified'>) => void,
  handleError: (error: Error) => void,
) => {
  const authStore = useStore()
  const sub = authStore.sub(userCredentialAtom, () =>
    console.log('subscribed:', authStore.get(userCredentialAtom)?.accessToken),
  )
  useLayoutEffect(() => {
    console.log('useAxsiosInterceptor:', new Date().toTimeString())
    if (!userCredential) return console.log('no userCredential')

    console.log('useAxsiosInterceptor:', userCredential.accessToken)
    const requestInterceptor = apiInterface.interceptors.request.use(
      config => onRequest(config, authStore.get(userCredentialAtom)?.accessToken ?? userCredential.accessToken),
      error => Promise.reject(error),
    )
    const responseInterceptor = apiInterface.interceptors.response.use(
      res => res,
      (error: AxiosError) => onResponse(error, userCredential.refreshToken, handleSet, handleError),
    )
    return () => {
      apiInterface.interceptors.request.eject(requestInterceptor)
      apiInterface.interceptors.response.eject(responseInterceptor)
    }
  }, [handleSet, userCredential, handleError, authStore])
}
