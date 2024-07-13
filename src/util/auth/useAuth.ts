import { useAtomValue } from 'jotai/react'
import { useMemo } from 'react'

import { userCredentialAtom } from '@/lib/store/auth'

export const useAuth = () => {
  const user = useAtomValue(userCredentialAtom)

  const isAuthenticated = useMemo(() => (user ? true : false), [user])

  const authState = useMemo(() => user?.verified ?? false, [user])

  return { isAuthenticated, authState }
}
