import { useStore } from 'jotai/react'
import { RESET } from 'jotai/utils'
import { useCallback, useMemo, useState } from 'react'

import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'

export const useAuth = () => {
  const authStore = useStore()

  const [deviceCode, setDeviceCode] = useState<string>(authStore.get(userCredentialAtom)?.deviceCode ?? '')
  const [isAuthenticated, setIsAuthenticated] = useState(!!authStore.get(userCredentialAtom))
  const [authState, setAuthState] = useState(authStore.get(userCredentialAtom)?.verified ?? false)

  const subscribe = useCallback(() => {
    const userState = authStore.get(userCredentialAtom)
    setIsAuthenticated(!!userState)
    setAuthState(userState?.verified ?? false)
    setDeviceCode(userState?.deviceCode ?? '')
  }, [authStore])

  const unsubscribe = authStore.sub(userCredentialAtom, subscribe)

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

  const setVerified = useCallback(() => {
    const credential = authStore.get(userCredentialAtom)
    if (credential) {
      authStore.set(userCredentialAtom, { ...credential, verified: true })
    }
  }, [authStore])
  console.log('useAuth:', isAuthenticated, authState, new Date().toTimeString())

  return useMemo(
    () => ({ isAuthenticated, authState, signIn, signOut, setVerified, deviceCode }),
    [isAuthenticated, authState, signIn, signOut, setVerified, deviceCode],
  )
}
