import { css, cva } from '@styled-stytem/css'
import { Link, Outlet, useLocation } from 'react-router-dom'

const ToolbarBtn = cva({
  base: {
    h: '49px',
    p: '14px 28px',
    borderRadius: '10px',
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
      <div
        className={css({
          h: '77px',
          bgColor: 'red.2',
          p: '0 100px',
          display: 'flex',
          flexDir: 'row',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            gap: '20px',
          })}
        >
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
