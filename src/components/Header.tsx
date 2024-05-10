import { css, cva } from '@styled-stytem/css'
import { Link, useLocation } from 'react-router-dom'

const NaviItem = cva({
  base: {
    color: 'darkGray.2',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: 'normal',
  },
  variants: {
    selected: {
      // todo: 선택된 항목 하이라이팅 css 수정
      true: {
        color: 'red.2',
      },
    },
  },
})

const Header = () => {
  const location = useLocation()
  const curPath = location.pathname
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
        px: { base: 20, mdDown: 5 },
      })}
    >
      <div
        className={css({
          color: 'red.2',
          // textAlign: 'center',
          fontSize: { base: 32, mdDown: 20 },
          fontWeight: '700',
          lineHeight: 'normal',
          w: '120px',
        })}
      >
        <Link to="/">KU-Key</Link>
      </div>
      <div
        className={css({
          display: { base: 'flex', mdDown: 'none' },
          gap: '50px',
        })}
      >
        <Link className={css(NaviItem.raw({ selected: curPath === '/' }))} to="/">
          My page
        </Link>
        <Link className={css(NaviItem.raw({ selected: curPath === '/announcement' }))} to="/announcement">
          Announcement
        </Link>
        <Link className={css(NaviItem.raw({ selected: curPath === '/timetable' }))} to="/timetable">
          Timetable
        </Link>
        <Link className={css(NaviItem.raw({ selected: curPath === '/community' }))} to="/community">
          Community
        </Link>
        <Link className={css(NaviItem.raw({ selected: curPath === '/matching' }))} to="/matching">
          1:1 Matching
        </Link>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row-reverse',
          w: '120px',
        })}
      >
        {/* todo: 통일된 버튼 컴포넌트로 마이그레이션 */}
        <button
          className={css({
            w: '30px',
            h: '30px',
            fontSize: '20px',
            cursor: 'pointer',
          })}
        >
          🌏
        </button>
      </div>
    </div>
  )
}

export default Header
