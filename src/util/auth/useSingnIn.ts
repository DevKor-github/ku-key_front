import { useSetAtom } from 'jotai/react'

import { userCredentialAtom } from '@/lib/store/auth'

export const useSignIn = () => {
  const setUserCredential = useSetAtom(userCredentialAtom)
  return setUserCredential
}
