import { css, cva } from '@styled-stytem/css'
import { Link, Outlet, useLocation } from 'react-router-dom'

const TimetableBtn = cva({
  base: {
    h: 12,
    px: 7,
    rounded: 10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px white solid',
    cursor: 'pointer',
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    zIndex: 2,
    transition: 'background 0.256s',
  },
  variants: {
    selected: {
      true: {
        bgColor: 'white',
        color: 'red.2',
      },
      false: {
        _hover: {
          bgColor: '#FFFFFF33',
        },
      },
    },
  },
})

export const ShareBtn = cva({
  base: {
    h: 12,
    px: 7,
    rounded: 10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px {colors.lightGray.1} solid',
    cursor: 'pointer',
    color: 'darkGray.2',
    fontSize: 18,
    fontWeight: 500,
    zIndex: 2,
    bgColor: 'white',
    transition: 'border 0.256s',
    _hover: {
      borderColor: 'darkGray.2',
    },
  },
  variants: {
    icon: { true: { w: 14, px: 0 } },
  },
})

const TimetablePage = () => {
  const curPath = useLocation().pathname

  return (
    <>
      <div
        className={css({
          position: 'absolute',
          h: 20,
          w: '100%',
          bg: 'linear-gradient(0deg, black 35%, rgba(0, 0, 0, 0.20) 88%)',
          opacity: 0.2,
          zIndex: 1,
        })}
      />
      <div className={css({ h: 20, bgColor: 'red.2', px: '149px', display: 'flex', flexDir: 'row', zIndex: 0 })}>
        <div className={css({ display: 'flex', flexDir: 'row', alignItems: 'center', gap: 5 })}>
          <Link to={'/timetable'} className={css(TimetableBtn.raw({ selected: curPath === '/timetable' }))}>
            My schedule
          </Link>
          <Link
            to={'/timetable/friend'}
            className={css(TimetableBtn.raw({ selected: curPath === '/timetable/friend' }))}
          >
            Friend list
          </Link>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', px: 64, mb: 40 })}>
        <Outlet />
      </div>
    </>
  )
}

export default TimetablePage
