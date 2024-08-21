import { useStore } from 'jotai/react'
import { RESET } from 'jotai/utils'
import { useCallback, useMemo } from 'react'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'

export const useAuth = () => {
  console.log('useAuth:', new Date().toTimeString())

  const authStore = useStore()
  const user = authStore.get(userCredentialAtom)

  const isAuthenticated = useMemo(() => (user ? true : false), [user])

  const authState = useMemo(() => user?.verified ?? false, [user])

  const signIn = useCallback((userState: UserCredential) => authStore.set(userCredentialAtom, userState), [authStore])

  const signOut = useCallback(() => authStore.set(userCredentialAtom, RESET), [authStore])

  return { isAuthenticated, authState, signIn, signOut }
}
