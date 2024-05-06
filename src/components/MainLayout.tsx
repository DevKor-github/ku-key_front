import { css } from '@styled-stytem/css'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <title>KU-Key</title>
      </Helmet>
      <Header />
      <div
        className={css({
          // 임시 값
          height: '300px',
        })}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
