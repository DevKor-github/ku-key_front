import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAtom } from 'jotai/react'
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
  const [userCredential, setUserCredential] = useAtom(userCredentialAtom)
  const handleSet = useCallback(
    (value: Omit<UserCredential, 'verified'>) => {
      if (!userCredential) return
      setUserCredential({ verified: userCredential.verified, ...value })
    },
    [setUserCredential, userCredential],
  )

  const navigate = useNavigate()
  const handleError = useCallback(
    (error: Error) => {
      if (error) {
        setUserCredential(RESET)
        navigate('/login')
      }
    },
    [navigate, setUserCredential],
  )
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider userCredential={userCredential} handleSet={handleSet} handleError={handleError} />
      {router}
    </QueryClientProvider>
  )
}

export default App
