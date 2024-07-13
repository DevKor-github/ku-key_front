import { useAtom } from 'jotai/react'
import { RESET } from 'jotai/utils'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'
import { apiInterface } from '@/util/axios/custom-axios'
import { onRequest } from '@/util/axios/request-interceptor'

export const useAxsiosInterceptor = () => {
  const navigate = useNavigate()
  const [userCredential, setUserCredential] = useAtom(userCredentialAtom)
  useLayoutEffect(() => {
    if (!userCredential) return
    console.log('useAxsiosInterceptor')
    const handleSet = (value: Omit<UserCredential, 'verified'>) => {
      setUserCredential({ verified: userCredential.verified, ...value })
    }

    const handleError = (error: Error) => {
      if (error) {
        setUserCredential(RESET)
        navigate('/login')
      }
    }
    const requestInterceptor = apiInterface.interceptors.request.use(
      config => onRequest(config, userCredential, handleSet),
      handleError,
    )
    return () => apiInterface.interceptors.request.eject(requestInterceptor)
  }, [navigate, setUserCredential, userCredential])
}
