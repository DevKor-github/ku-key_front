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
        height: '120px',
        borderBottom: '1.5px solid {colors.lightGray.2}',
        background: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 80px',
      })}
    >
      <div
        className={css({
          color: 'red.2',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: 'normal',
          width: '120px',
        })}
      >
        <Link to="/">KU-Key</Link>
      </div>
      <div
        className={css({
          display: 'flex',
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
          width: '120px',
        })}
      >
        {/* todo: 통일된 버튼 컴포넌트로 마이그레이션 */}
        <button
          className={css({
            width: '30px',
            height: '30px',
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
