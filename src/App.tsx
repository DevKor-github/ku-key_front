import { useRoutes } from 'react-router-dom'

import routes from '@/router/router'

function App() {
  console.log(import.meta.env.VITE_API_SERVER)
  const router = useRoutes(routes)
  return router
}

export default App
