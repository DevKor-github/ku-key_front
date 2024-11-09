import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'sonner'

import routes from '@/lib/router/router'
import { UserProvider } from '@/providers/UserProvider'
import AmplitudeProvider from '@/util/AmplitudeProvider'
import AuthProvider from '@/util/auth/AuthProvider'
import ScrollToTop from '@/util/ScrollToTop'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: 'always',
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      staleTime: 1000 * 10, // 10 seconds
    },
  },
})

function App() {
  const router = useRoutes(routes)

  if (process.env.NODE_ENV === 'development') {
    window.__REACT_QUERY_STATE__ = queryClient
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider />
      <UserProvider>
        <Toaster position="top-right" />
        {router}
        <ScrollToTop />
        <Suspense fallback={null}>
          <AmplitudeProvider />
        </Suspense>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
