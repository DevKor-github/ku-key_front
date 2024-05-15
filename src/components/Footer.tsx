import { css } from '@styled-stytem/css'
import { Link } from 'react-router-dom'

import instagramIcon from '@/assets/instagram.svg'
import kakaoIcon from '@/assets/kakaocorp.svg'
import mailIcon from '@/assets/mail.svg'
import notionIcon from '@/assets/notion.svg'

const supportApps = [
  { name: 'kakao-talk', src: kakaoIcon },
  { name: 'mail', src: mailIcon },
  { name: 'notion', src: notionIcon },
  { name: 'instagram', src: instagramIcon },
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
      })}
    >
      <div className={css({ flex: 1.5, display: 'flex', flexDir: 'column', gap: '16px' })}>
        <div
          className={css({
            color: 'black.1',
            // todo: 폰트 사이즈 규격화 필요
            fontSize: 26,
            fontWeight: '800',
          })}
        >
          KU-KEY
        </div>
        <div
          className={css({
            color: 'black.1',
            fontSize: '14.112px',
            fontWeight: '500',
            cursor: 'pointer',
          })}
        >
          문의
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            gap: 5,
          })}
        >
          {supportApps.map(app => {
            return <img key={app.name} className={supportAppIcon} src={app.src} alt={app.name} />
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
          Copyright ⓒ 2024 KU-KEY RUN. All Rights Reserved.
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
        <Link to="/announcement" className={tabs}>
          ANNOUNCEMENT
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
