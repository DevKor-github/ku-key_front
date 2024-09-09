import { css } from '@styled-stytem/css'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { useCheckVerified } from '@/api/hooks/auth'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useAuth } from '@/util/auth/useAuth'

const MainLayout = () => {
  const { isAuthenticated, authState, setVerified } = useAuth()
  const { data: verified } = useCheckVerified(isAuthenticated && !authState)
  useEffect(() => {
    verified && setVerified()
  }, [verified, setVerified])
  return (
    <div className={css({ display: 'flex', flexDir: 'column', h: '100vh' })}>
      <Helmet>
        <title>KU-key</title>
      </Helmet>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
