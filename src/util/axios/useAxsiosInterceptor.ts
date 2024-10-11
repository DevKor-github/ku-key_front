import { AxiosError } from 'axios'
import { useStore } from 'jotai'
import { RESET } from 'jotai/utils'
import { useCallback, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'
import { onRequest } from '@/util/axios/onRequest'
import { onResponse } from '@/util/axios/onResponse'

export const useAxiosInterceptor = () => {
  const authStore = useStore()

  const handleSet = useCallback(
    (value: Omit<UserCredential, 'verified' | 'deviceCode'>) => {
      if (!authStore.get(userCredentialAtom)) return
      authStore.set(userCredentialAtom, {
        deviceCode: authStore.get(userCredentialAtom)!.deviceCode,
        verified: authStore.get(userCredentialAtom)!.verified,
        ...value,
      })
    },
    [authStore],
  )

  const navigate = useNavigate()
  const handleError = useCallback(
    (error: Error) => {
      if (error) {
        authStore.set(userCredentialAtom, RESET)
        navigate('/login')
      }
    },
    [navigate, authStore],
  )

  useLayoutEffect(() => {
    if (!authStore.get(userCredentialAtom)) return

    const requestInterceptor = apiInterface.interceptors.request.use(
      config => onRequest(config, authStore.get(userCredentialAtom)!.accessToken),
      error => Promise.reject(error),
    )
    const responseInterceptor = apiInterface.interceptors.response.use(
      res => res,
      (error: AxiosError) => onResponse(error, authStore.get(userCredentialAtom)!.refreshToken, handleSet, handleError),
    )
    return () => {
      apiInterface.interceptors.request.eject(requestInterceptor)
      apiInterface.interceptors.response.eject(responseInterceptor)
    }
  }, [handleSet, handleError, authStore])
}
