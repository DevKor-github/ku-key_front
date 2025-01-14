import { css } from '@styled-system/css'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useCheckVerified } from '@/api/hooks/auth'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MetaTag from '@/components/MetaTag'
import { useAuth } from '@/util/auth/useAuth'

const MainLayout = () => {
  const { isAuthenticated, authState, setVerified } = useAuth()
  const { data: verified } = useCheckVerified(isAuthenticated && !authState)
  useEffect(() => {
    verified && setVerified()
  }, [verified, setVerified])
  return (
    <div className={css({ display: 'flex', flexDir: 'column', h: '100vh' })}>
      <MetaTag title="KU-key" />
      <Header />
      <div className={css({ flex: 1, smDown: { mt: 'mobileHeader' } })}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
