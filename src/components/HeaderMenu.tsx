import { css } from '@styled-system/css'
import { Menu } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { characterConfig } from '@/components/ui/profile/CharacterConfig'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { headerRouteConfig } from '@/lib/router/header-route'

interface HeaderProps {
  curPath: string
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navName: string) => void
  handleUserButton: () => void
  isAuthenticated: boolean
}
const HeaderMenu = ({ handleNavClick, curPath, handleUserButton, isAuthenticated }: HeaderProps) => {
  const curPathRoot = curPath.split('/')[1]
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const handleSheetNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navName: string) => {
      navName !== '1:1 Matching' && setIsSheetOpen(p => !p)
      handleNavClick(e, navName)
    },
    [handleNavClick],
  )
  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(p => !p)}>
      <SheetTrigger asChild>
        <button className={css({ mediumDown: { display: 'flex' }, base: { display: 'none' } })}>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className={css({ display: 'flex', flexDir: 'column', py: 15, gap: 10 })} closeButton={false}>
        <Link
          to="/login"
          className={css({
            display: 'flex',
            bgColor: 'lightGray.2',
            rounded: 10,
            px: 4,
            py: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
          onClick={e => handleSheetNavClick(e, 'login')}
        >
          <p className={css({ textStyle: 'heading3_M', color: 'darkGray.2', py: 2.5 })}>you need to login</p>
          <img
            src={characterConfig['anonymous'][1]}
            alt="profile"
            className={css({ w: 15, bgColor: '#D9D9D9', rounded: 'full' })}
          />
        </Link>
        <nav
          className={css({
            display: { base: 'flex' },
            flexDir: 'column',
            gap: '38px',
            alignItems: 'flex-start',
            textStyle: 'body1_M',
            letterSpacing: '-0.4px',
          })}
        >
          {headerRouteConfig.map(nav => {
            if (nav.navName === 'Timetable') {
              return (
                <div
                  key={nav.route}
                  className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 2 })}
                >
                  <div
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'darkGray.1',
                      _hover: { color: 'red.2' },
                      transition: 'all 0.2s ease-out',
                    })}
                  >
                    {nav.navName}
                  </div>
                  <div className={css({ display: 'flex', flexDir: 'column', pl: 4, alignItems: 'flex-start', gap: 2 })}>
                    {nav.innerTab?.map((innerTab, index) => (
                      <div
                        key={innerTab}
                        className={css({
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: curPath === `/${innerTab}` ? 'red.2' : 'darkGray.1',
                          _hover: { color: 'red.2' },
                          transition: 'all 0.2s ease-out',
                          gap: 2.5,
                        })}
                      >
                        <Link to={`/${innerTab}`} onClick={e => handleSheetNavClick(e, innerTab)}>
                          {index === 0 ? 'My schedule' : 'Friend list'}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <div
                key={nav.route}
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: curPathRoot === nav.route ? 'red.2' : 'darkGray.1',
                  _hover: { color: 'red.2' },
                  transition: 'all 0.2s ease-out',
                  gap: 2.5,
                })}
              >
                <Link to={`/${nav.route}`} onClick={e => handleSheetNavClick(e, nav.navName)}>
                  {nav.navName}
                </Link>
              </div>
            )
          })}
          <div
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: curPathRoot === 'mypage' ? 'red.2' : 'darkGray.1',
              _hover: { color: 'red.2' },
              transition: 'all 0.2s ease-out',
              gap: 2.5,
            })}
          >
            <Link to={`/mypage`} onClick={e => handleSheetNavClick(e, 'mypage')}>
              My Page
            </Link>
          </div>
          {isAuthenticated && (
            <button
              onClick={handleUserButton}
              className={css({
                cursor: 'pointer',
                color: 'darkGray.1',
              })}
            >
              Logout
            </button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderMenu
