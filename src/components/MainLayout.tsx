import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import Header from '@/components/Header'

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <title>KU-Key</title>
      </Helmet>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
