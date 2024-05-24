import { css } from '@styled-stytem/css'
import { Globe } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { NavLinkButton } from '@/components/header/NavLinkButton'
import { headerRouteConfig } from '@/lib/header/header-route'

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
      <button
        className={css({
          w: '30px',
          h: '30px',
          rounded: 'full',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          _hover: { bgColor: 'lightGray.1' },
          transition: 'background-color 0.15s ease-in-out',
        })}
      >
        <Globe className={css({ color: 'black.2', w: '22px', h: '22px' })} />
      </button>
    </div>
  )
}

export default Header
