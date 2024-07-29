import { useSetAtom } from 'jotai/react'
import { RESET } from 'jotai/utils'

import { userCredentialAtom } from '@/lib/store/auth'

export const useSignOut = () => {
  const setUserCredential = useSetAtom(userCredentialAtom)
  return () => setUserCredential(RESET)
}
