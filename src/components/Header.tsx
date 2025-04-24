import { css } from '@styled-system/css'
import { CircleUser } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useLogOut } from '@/api/hooks/auth'
import KUkeyLogo from '@/assets/KU-keyLogo.svg'
import { NavLinkButton } from '@/components/header/NavLinkButton'
import NotifyWindow from '@/components/header/NotifyWindow'
import HeaderMenu from '@/components/HeaderMenu'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { HEADER_MESSAGE } from '@/lib/messages/header'
import { headerRouteConfig } from '@/lib/router/header-route'
import { useAuth } from '@/util/auth/useAuth'
import { useMediaQuery } from '@/util/hooks/useMediaQuery'
import { useModal } from '@/util/hooks/useModal'

const Header = () => {
  const location = useLocation()
  const curPath = location.pathname
  const curPathRoot = curPath.split('/')[1]
  const { mutate: mutateSignOut } = useLogOut()
  const innerTabRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, authState, deviceCode } = useAuth()
  const { isOpen: isModalOpen, handleOpen: handleModalOpen } = useModal(true)
  const [modalContent, setModalContent] = useState(HEADER_MESSAGE.NOT_VERIFIED_USER)
  const navigate = useNavigate()
  const mediaQuery = useMediaQuery('(max-width: 900px)')
  const handleUserButton = useCallback(() => {
    isAuthenticated ? mutateSignOut({ deviceCode }) : navigate('/login')
  }, [isAuthenticated, mutateSignOut, navigate])
  const handleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      innerTabRef.current &&
      !innerTabRef.current.contains(e.target as Node) &&
      !innerTabRef.current?.parentNode?.contains(e.target as Node)
    ) {
      setIsOpen(prev => !prev)
    }
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navName: string) => {
      if (!isAuthenticated) return

      if (navName === 'mypage' && !authState) {
        e.preventDefault()
        setModalContent(HEADER_MESSAGE.NOT_VERIFIED_USER)
        handleModalOpen()
      }
      if (navName === 'Timetable') {
        e.preventDefault()
        authState
          ? handleOpen()
          : (function () {
              setModalContent(HEADER_MESSAGE.NOT_VERIFIED_USER)
              handleModalOpen()
            })()
      } else if (navName === 'Community' && !authState) {
        e.preventDefault()
        setModalContent(HEADER_MESSAGE.NOT_VERIFIED_USER)
        handleModalOpen()
      }
    },
    [authState, handleModalOpen, handleOpen, isAuthenticated],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  return (
    <header
      className={css({
        display: 'flex',
        h: { base: 20, smDown: '{spacing.mobileHeader}' },
        minH: { base: 20, smDown: '{spacing.mobileHeader}' },
        bg: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { base: '150px', lgDown: '100px', mdDown: '60px', smDown: '20px' },
        smDown: { position: 'fixed', zIndex: 'mobileHeader', w: '100vw' },
      })}
    >
      <nav
        className={css({
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        })}
      >
        <Link to="/">
          <img className={css({ smDown: { h: '18px' } })} src={KUkeyLogo} alt="KU-key" />
        </Link>
      </nav>
      <nav
        className={css({
          display: { base: 'flex', mdDown: 'none' },
          gap: '50px',
          alignItems: 'center',
        })}
      >
        {headerRouteConfig.map(nav => (
          <NavLinkButton
            ref={nav.navName === 'Timetable' ? innerTabRef : null}
            key={nav.route}
            isSelected={curPathRoot === nav.route}
            targetRoute={nav.route}
            navName={nav.navName}
            innerTab={nav.innerTab}
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleNavClick={handleNavClick}
          />
        ))}
      </nav>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '30px' })}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            color: 'darkGray.2',
          })}
        >
          {isAuthenticated && (
            <>
              <NotifyWindow />
              <Link
                to="/mypage"
                className={css({ display: 'flex', alignItems: 'center', mdDown: { display: 'none' } })}
                onClick={e => handleNavClick(e, 'mypage')}
              >
                <CircleUser size={20} />
              </Link>
            </>
          )}
          {mediaQuery && (
            <HeaderMenu
              handleNavClick={handleNavClick}
              curPath={curPath}
              handleUserButton={handleUserButton}
              isAuthenticated={isAuthenticated}
            />
          )}
        </div>

        <button
          onClick={handleUserButton}
          className={css({
            cursor: 'pointer',
            textStyle: 'body1_L',
            color: 'lightGray.1',
            mdDown: { display: 'none' },
          })}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
      </div>
      <NoticeModal isOpen={isModalOpen} content={modalContent} />
    </header>
  )
}

export default Header
