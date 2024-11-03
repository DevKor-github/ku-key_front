import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
      refetchOnWindowFocus: false,
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
      <UserProvider>
        <AuthProvider />
        <AmplitudeProvider />
        <ScrollToTop />
        <Toaster position="top-right" />
        {router}
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
