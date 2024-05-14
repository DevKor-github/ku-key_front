import { css, cva } from '@styled-stytem/css'
import { Link, Outlet, useLocation } from 'react-router-dom'

// todo: Recipe화 필요
export const ToolbarBtn = cva({
  base: {
    h: 12,
    px: 7,
    py: 3.5,
    borderRadius: 10,
    border: '1px white solid',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    wordWrap: 'break-word',
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    back: {
      white: {
        bg: 'lightGray.2',
        borderRadius: 10,
        border: '1px {colors.darkGray.1} solid',
        color: 'darkGray.1',
      },
    },
    selected: {
      true: {
        bgColor: 'white',
        color: 'red.2',
      },
    },
  },
})

const TimeTablePage = () => {
  const curPath = useLocation().pathname

  return (
    <>
      <div className={css({ h: 20, bgColor: 'red.2', px: '6.25rem', display: 'flex', flexDir: 'row' })}>
        <div className={css({ display: 'flex', flexDir: 'row', alignItems: 'center', gap: 5 })}>
          <Link to={'/timetable'} className={css(ToolbarBtn.raw({ selected: curPath === '/timetable' }))}>
            My schedule
          </Link>
          <Link to={'/timetable/friend'} className={css(ToolbarBtn.raw({ selected: curPath === '/timetable/friend' }))}>
            Friends
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default TimeTablePage
