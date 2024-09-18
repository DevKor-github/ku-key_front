import { css } from '@styled-system/css'
import { Link } from 'react-router-dom'

// TODO: ADD Instagram & Notion Link
// import instagramIcon from '@/assets/instagram.svg'
import KUkeyLogo from '@/assets/KU-keyLogo.svg'
import mailIcon from '@/assets/mail.svg'
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
  return (
    <div
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
          })}
        >
          <Link to="/">
            <img src={KUkeyLogo} alt="KU-key" />
          </Link>
        </nav>
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
            fontSize: '14.112px',
            fontWeight: '500',
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
        <Link to="/" className={tabs}>
          MY PAGE
        </Link>
        <Link to="/timetable" className={tabs}>
          TIMETABLE
        </Link>
        <Link to="/community" className={tabs}>
          COMMUNITY
        </Link>
        <Link to="/matching" className={tabs}>
          1:1 MATCHING
        </Link>
      </div>
    </div>
  )
}

export default Footer
