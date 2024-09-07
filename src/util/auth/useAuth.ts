import { useStore } from 'jotai/react'
import { RESET } from 'jotai/utils'
import { useCallback, useState } from 'react'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'

export const useAuth = () => {
  const authStore = useStore()

  const [isAuthenticated, setIsAuthenticated] = useState(!!authStore.get(userCredentialAtom))
  const [authState, setAuthState] = useState(authStore.get(userCredentialAtom)?.verified ?? false)

  const unsubscribe = authStore.sub(userCredentialAtom, () => {
    const userState = authStore.get(userCredentialAtom)
    setIsAuthenticated(!!userState)
    setAuthState(userState?.verified ?? false)
  })

  const signIn = useCallback(
    (userState: UserCredential) => {
      authStore.set(userCredentialAtom, userState)
    },
    [authStore],
  )

  const signOut = useCallback(() => {
    authStore.set(userCredentialAtom, RESET)
    unsubscribe()
  }, [authStore, unsubscribe])

  console.log('useAuth:', isAuthenticated, authState, new Date().toTimeString())

  return { isAuthenticated, authState, signIn, signOut }
}
