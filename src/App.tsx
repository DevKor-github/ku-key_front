import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore'
import { useRoutes } from 'react-router-dom'

import { refresh } from '@/api/hooks/refresh'
import routes from '@/lib/router/router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const store = createStore({
  authName: '_auth',
  authType: 'localstorage',
  refresh: refresh,
})

function App() {
  const router = useRoutes(routes)
  return (
    <AuthProvider store={store}>
      <QueryClientProvider client={queryClient}>{router}</QueryClientProvider>
    </AuthProvider>
  )
}

export default App
