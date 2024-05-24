import { useRoutes } from 'react-router-dom'

import routes from '@/lib/router/router'

function App() {
  const router = useRoutes(routes)
  return router
}

export default App
