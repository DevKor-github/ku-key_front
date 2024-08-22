import { css } from '@styled-stytem/css'
import { Link, useLocation } from 'react-router-dom'

import { useLogOut } from '@/api/hooks/auth'
import { NavLinkButton } from '@/components/header/NavLinkButton'
import { headerRouteConfig } from '@/lib/router/header-route'

const Header = () => {
  const location = useLocation()
  const curPath = location.pathname
  const curPathRoot = curPath.split('/')[1]
  const { mutate: mutateSignOut } = useLogOut()
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
          color: 'black.2',
          base: { textStyle: 'heading3_L' },
          mdDown: { textStyle: 'heading4_L' },
        })}
      >
        <Link to="/">KU-key</Link>
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
            key={nav.route}
            isSelected={curPathRoot === nav.route}
            targetRoute={nav.route}
            navName={nav.navName}
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
