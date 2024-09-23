import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRoutes } from 'react-router-dom'

import routes from '@/lib/router/router'
import AmplitudeProvider from '@/util/AmplitudeProvider'
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <AuthProvider />
      <AmplitudeProvider />
      {router}
    </QueryClientProvider>
  )
}

export default App
