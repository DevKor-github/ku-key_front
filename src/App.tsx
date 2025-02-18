import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'sonner'

import routes from '@/lib/router/router'
import { UserProvider } from '@/providers/UserProvider'
import AmplitudeProvider from '@/util/AmplitudeProvider'
import AuthProvider from '@/util/auth/AuthProvider'
import { DrawerProvider } from '@/util/DrawerProvider'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
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
  const isMobile = useMediaQueryByName('smDown')
  if (process.env.NODE_ENV === 'development') {
    window.__REACT_QUERY_STATE__ = queryClient.getQueryCache().findAll()
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider />
      <UserProvider>
        <DrawerProvider>
          <Toaster position={isMobile ? 'bottom-center' : 'bottom-right'} />
          {router}
          <ScrollToTop />
          <AmplitudeProvider />
        </DrawerProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
