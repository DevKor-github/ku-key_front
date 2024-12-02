import { css, cva, cx } from '@styled-system/css'
import { Menu } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import SideTabLogInLink from '@/components/header/SideTabLogInLink'
import SideTabProfile from '@/components/header/SideTabProfile'
import SurveyLink from '@/components/SurveyLink'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
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
  const handleSheetCloseLogOut = useCallback(() => {
    setIsSheetOpen(false), handleUserButton()
  }, [handleUserButton])
  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(p => !p)}>
      <SheetTrigger asChild>
        <button className={css({ mdDown: { display: 'flex' }, base: { display: 'none' }, color: 'darkGray.2' })}>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className={css({ display: 'flex', flexDir: 'column', py: 15, gap: 5 })} closeButton={false}>
        {isAuthenticated ? <SideTabProfile /> : <SideTabLogInLink handleSheetNavClick={handleSheetNavClick} />}
        <SheetTitle className={css({ srOnly: true })}>Navigation SideTab</SheetTitle>
        <SheetDescription className={css({ srOnly: true })}>For Mobile or medium size screen</SheetDescription>
        <SurveyLink />
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
            if (nav.innerTab === undefined) {
              return (
                <div key={nav.route} className={menuButton({ isSelected: curPathRoot === nav.route })}>
                  <Link to={`/${nav.route}`} onClick={e => handleSheetNavClick(e, nav.navName)}>
                    {nav.navName}
                  </Link>
                </div>
              )
            }
            return (
              <div
                key={nav.route}
                className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 2 })}
              >
                <div className={cx(menuButton({ isSelected: false }), css({ gap: 0 }))}>{nav.navName}</div>
                <div className={css({ display: 'flex', flexDir: 'column', pl: 4, alignItems: 'flex-start', gap: 2 })}>
                  {nav.innerTab.map((innerTab, index) => (
                    <div key={innerTab} className={menuButton({ isSelected: curPath === `/${innerTab}` })}>
                      <Link
                        to={`/${innerTab}`}
                        onClick={e => handleSheetNavClick(e, innerTab)}
                        className={css({ fontSize: 15 })}
                      >
                        {index === 0 ? 'My schedule' : 'Friend list'}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          <div className={menuButton({ isSelected: curPathRoot === 'mypage' })}>
            <Link to={`/mypage`} onClick={e => handleSheetNavClick(e, 'mypage')}>
              My Page
            </Link>
          </div>
          <button
            onClick={handleSheetCloseLogOut}
            className={css({
              cursor: 'pointer',
              color: 'darkGray.1',
            })}
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderMenu

const menuButton = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-out',
    gap: 2.5,
  },
  variants: {
    isSelected: {
      true: { color: 'red.2' },
      false: { color: 'darkGray.1' },
    },
  },
})
