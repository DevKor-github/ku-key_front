import { memo } from 'react'

import { UserCredential } from '@/types/user'
import { useAxsiosInterceptor } from '@/util/axios/useAxsiosInterceptor'

interface AuthProviderProps {
  userCredential: UserCredential | null
  handleSet: (value: Omit<UserCredential, 'verified'>) => void
  handleError: (error: Error) => void
}
const AuthProvider = memo(({ userCredential, handleSet, handleError }: AuthProviderProps) => {
  useAxsiosInterceptor(userCredential, handleSet, handleError)
  return <></>
})

export default AuthProvider
