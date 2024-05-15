import { css } from '@styled-stytem/css'
import { ReactNode } from 'react'

const MypageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        w: 'full',
        bg: 'bg',
        gap: 8,
      })}
    >
      {children}
    </div>
  )
}

export default MypageWrapper
