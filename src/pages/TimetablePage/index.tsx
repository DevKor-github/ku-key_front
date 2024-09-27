import { css } from '@styled-system/css'
import { Outlet } from 'react-router-dom'

const TimetablePage = () => {
  return (
    <>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          px: { base: 64, xlDown: 46, lgDown: 20, mdDown: 10 },
          mb: 40,
          alignItems: 'center',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', maxW: '1131px', width: '100%' })}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default TimetablePage
