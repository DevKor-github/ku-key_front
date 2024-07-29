import { AxiosError } from 'axios'
import { useLayoutEffect } from 'react'

import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'
import { onRequest } from '@/util/axios/onRequest'
import { onResponse } from '@/util/axios/onResponse'

export const useAxsiosInterceptor = (
  userCredential: UserCredential | null,
  handleSet: (value: Omit<UserCredential, 'verified'>) => void,
  handleError: (error: Error) => void,
) => {
  useLayoutEffect(() => {
    if (!userCredential) return

    const requestInterceptor = apiInterface.interceptors.request.use(
      config => onRequest(config),
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
  }, [handleSet, userCredential, handleError])
}
