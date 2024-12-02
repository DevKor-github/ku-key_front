import { css } from '@styled-system/css'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

// TODO: ADD Instagram & Notion Link
// import instagramIcon from '@/assets/instagram.svg'
import KUkeyLogo from '@/assets/KU-keyLogo.svg'
import mailIcon from '@/assets/mail.svg'
import SurveyLink from '@/components/SurveyLink'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { HEADER_MESSAGE } from '@/lib/messages/header'
import { footerRouteConfig } from '@/lib/router/footer-route'
import { useAuth } from '@/util/auth/useAuth'
import { useModal } from '@/util/hooks/useModal'
// import notionIcon from '@/assets/notion.svg'

const supportApps = [
  { name: 'mail', src: mailIcon, onClick: () => (window.location.href = 'mailto:kukey.run@gmail.com') },
  // { name: 'notion', src: notionIcon },
  // { name: 'instagram', src: instagramIcon },
]

const supportAppIcon = css({
  w: '25px',
  h: '25px',
  cursor: 'pointer',
})

const tabs = css({
  color: 'black.1',
  fontSize: '14.112px',
  fontWeight: '500',
})

const Footer = () => {
  const { isAuthenticated, authState } = useAuth()
  const { isOpen: isModalOpen, handleOpen: handleModalOpen } = useModal(true)
  const [modalContent, setModalContent] = useState(HEADER_MESSAGE.NOT_VERIFIED_USER)

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
      if (route === 'matching') {
        e.preventDefault()
        setModalContent(HEADER_MESSAGE.NOT_READY)
        handleModalOpen()
        return
      }
      if (!isAuthenticated) return // 미로그인 유저
      if (!authState) {
        // 인증 안 된 유저
        e.preventDefault()
        setModalContent(HEADER_MESSAGE.NOT_VERIFIED_USER)
        handleModalOpen()
      }
    },
    [authState, handleModalOpen, isAuthenticated],
  )

  return (
    <footer
      className={css({
        w: 'full',
        borderTop: '1.211px solid {colors.lightGray.2}',
        bg: 'white',
        display: { base: 'flex', mdDown: 'none' },
        flexDir: 'row',
        py: 13,
        px: 40,
        alignItems: 'center',
        mt: 'auto',
      })}
    >
      <div className={css({ flex: 1.5, display: 'flex', flexDir: 'column', gap: '16px' })}>
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            mb: 2,
          })}
        >
          <Link to="/">
            <img src={KUkeyLogo} alt="KU-key" />
          </Link>
        </nav>
        <SurveyLink />
        <div
          className={css({
            color: 'black.1',
            fontSize: '14.112px',
            fontWeight: '500',
          })}
        >
          Contact
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            gap: 5,
          })}
        >
          {supportApps.map(app => {
            return (
              <button key={app.name} onClick={app.onClick}>
                <img className={supportAppIcon} src={app.src} alt={app.name} />
              </button>
            )
          })}
        </div>
        <div className={css({ w: '534px', h: '1px', bg: 'black.1' })} />
        <div
          className={css({
            color: 'darkGray.1',
            fontSize: 14,
            fontWeight: 500,
          })}
        >
          Copyright ⓒ 2024 KU-key RUN. All Rights Reserved.
        </div>
      </div>
      <div
        className={css({
          flex: 0.5,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20.3px',
          h: 25,
        })}
      >
        {footerRouteConfig.map(nav => (
          <Link key={nav.route} to={`/${nav.route}`} className={tabs} onClick={e => handleNavClick(e, nav.route)}>
            {nav.navName}
          </Link>
        ))}
      </div>
      <NoticeModal isOpen={isModalOpen} content={modalContent} />
    </footer>
  )
}

export default Footer
