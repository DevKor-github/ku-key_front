import { css } from '@styled-stytem/css'
import { Link, useLocation } from 'react-router-dom'

import LanguageButton from '@/components/header/LanguageButton'
import { NavLinkButton } from '@/components/header/NavLinkButton'
import { headerRouteConfig } from '@/lib/router/header-route'

const Header = () => {
  const location = useLocation()
  const curPath = location.pathname
  const curPathRoot = curPath.split('/')[1]

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        h: 20,
        borderBottom: '1.5px solid {colors.lightGray.2}',
        bg: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { base: '149px', mdDown: 5 },
      })}
    >
      <div
        className={css({
          color: 'red.2',
          fontSize: { base: 24, mdDown: 20 },
          fontWeight: 700,
        })}
      >
        <Link to="/">KU-Key</Link>
      </div>
      <div
        className={css({
          display: { base: 'flex', mdDown: 'none' },
          gap: 15,
          alignSelf: 'flex-end',
          mb: '10px',
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
      </div>
      <LanguageButton />
    </div>
  )
}

export default Header
