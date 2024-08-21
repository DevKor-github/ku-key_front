import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useStore } from 'jotai/react'
import { RESET } from 'jotai/utils'
import { useCallback } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'

import routes from '@/lib/router/router'
import { userCredentialAtom } from '@/lib/store/auth'
import { UserCredential } from '@/types/user'
import AuthProvider from '@/util/auth/AuthProvider'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const router = useRoutes(routes)
  const authStore = useStore()
  const userCredential = authStore.get(userCredentialAtom)
  const handleSet = useCallback(
    (value: Omit<UserCredential, 'verified'>) => {
      if (!userCredential) return
      authStore.set(userCredentialAtom, { verified: userCredential.verified, ...value })
    },
    [authStore, userCredential],
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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider userCredential={userCredential} handleSet={handleSet} handleError={handleError} />
      {router}
    </QueryClientProvider>
  )
}

export default App
