import { css } from '@styled-system/css'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { useCheckVerified } from '@/api/hooks/auth'
import MobileTopBar from '@/common/components/MobileTopBar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MetaTag from '@/components/MetaTag'
import { useAuth } from '@/util/auth/useAuth'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const MainLayout = () => {
  const location = useLocation()
  const isMobile = useMediaQueryByName('smDown')
  const curPath = location.pathname

  // TODO: 좀 더 까리하게 관리하기
  // 따로 config 파일을 만들기?
  const isClubDetail = curPath.startsWith('/club/detail')
  const showMobileTopBar = isClubDetail && isMobile

  const { isAuthenticated, authState, setVerified } = useAuth()
  const { data: verified } = useCheckVerified(isAuthenticated && !authState)
  useEffect(() => {
    verified && setVerified()
  }, [verified, setVerified])
  return (
    <div className={css({ display: 'flex', flexDir: 'column', h: '100vh' })}>
      <MetaTag title="KU-key" />
      {showMobileTopBar ? <MobileTopBar /> : <Header />}
      <div className={css({ flex: 1, smDown: { mt: isClubDetail ? 0 : 'mobileHeader' } })}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
