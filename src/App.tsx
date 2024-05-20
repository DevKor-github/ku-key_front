import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRoutes } from 'react-router-dom'

import routes from '@/router/router'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function App() {
  const router = useRoutes(routes)
  return <QueryClientProvider client={queryClient}>{router}</QueryClientProvider>
}

export default App
