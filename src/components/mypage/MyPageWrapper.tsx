import { css } from '@styled-system/css'
import { ReactNode } from 'react'

const MyPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        w: 'full',
        bg: 'bg.gray',
        gap: { base: 20, smDown: 0 },
        smDown: {
          h: 'calc(100vh - 40px)',
          overflow: 'hidden',
        },
      })}
    >
      {children}
    </div>
  )
}

export default MyPageWrapper
