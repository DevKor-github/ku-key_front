import { css } from '@styled-stytem/css'
import { Outlet } from 'react-router-dom'

const TimetablePage = () => {
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
