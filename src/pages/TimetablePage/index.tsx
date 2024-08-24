import { css } from '@styled-stytem/css'
import { Outlet } from 'react-router-dom'

// const TimetableBtn = cva({
//   base: {
//     h: 12,
//     px: 7,
//     rounded: 10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '1px white solid',
//     cursor: 'pointer',
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 500,
//     zIndex: 2,
//     transition: 'background 0.256s',
//   },
//   variants: {
//     selected: {
//       true: {
//         bgColor: 'white',
//         color: 'red.2',
//       },
//       false: {
//         _hover: {
//           bgColor: '#FFFFFF33',
//         },
//       },
//     },
//   },
// })

const TimetablePage = () => {
  // const curPath = useLocation().pathname
  // const curPathRoot = curPath.split('/')[2]

  return (
    <>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          px: { base: 64, mdDown: 4 },
          mb: 40,
          alignItems: 'center',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', maxW: '1200px', width: '100%' })}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default TimetablePage
