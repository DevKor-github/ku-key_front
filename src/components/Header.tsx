import { css } from '@styled-stytem/css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useLogOut } from '@/api/hooks/auth'
import KUkeyLogo from '@/assets/KU-keyLogo.svg'
import { NavLinkButton } from '@/components/header/NavLinkButton'
import { headerRouteConfig } from '@/lib/router/header-route'
const Header = () => {
  const location = useLocation()
  const curPath = location.pathname
  const curPathRoot = curPath.split('/')[1]
  const { mutate: mutateSignOut } = useLogOut()
  const innerTabRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
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
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  return (
    <header
      className={css({
        display: 'flex',
        h: 20,
        minH: 20,
        // borderBottom: '1.5px solid {colors.lightGray.2}',
        bg: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { base: '150px', mdDown: 5 },
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
          <img src={KUkeyLogo} alt="KU-key" />
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
          />
        ))}
      </nav>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 5 })}>
        <button onClick={() => mutateSignOut()}>로그아웃</button>
      </div>
      {/* <LanguageButton /> */}
    </header>
  )
}

export default Header
