import { css, cva } from '@styled-stytem/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Link, Outlet, useLocation } from 'react-router-dom'

// todo: Recipe화 필요
export const ToolbarBtn = cva({
  base: {
    h: '3.0625rem',
    px: 7,
    py: 3.5,
    rounded: 10,
    border: '1px white solid',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    wordWrap: 'break-word',
    display: 'inline-flex',
    alignItems: 'center',
    zIndex: 2,
  },
  variants: {
    icon: { true: { p: 0, w: 14 } },
    back: {
      white: {
        bg: 'white',
        rounded: 10,
        border: '1px {colors.lightGray.1} solid',
        color: 'darkGray.2',
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

const TimetablePage = () => {
  const curPath = useLocation().pathname
  const queryClient = new QueryClient()

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
          <Link to={'/timetable'} className={css(ToolbarBtn.raw({ selected: curPath === '/timetable' }))}>
            My schedule
          </Link>
          <Link to={'/timetable/friend'} className={css(ToolbarBtn.raw({ selected: curPath === '/timetable/friend' }))}>
            Friend list
          </Link>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', px: 64, mb: 40 })}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default TimetablePage
