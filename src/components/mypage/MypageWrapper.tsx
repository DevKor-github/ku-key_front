import { css } from '@styled-system/css'
import { ReactNode } from 'react'

const MypageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        w: 'full',
        bg: 'bg.gray',
        gap: { base: 20, smDown: 0 },
      })}
    >
      {children}
    </div>
  )
}

export default MypageWrapper
