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
        gap: 20,
      })}
    >
      {children}
    </div>
  )
}

export default MyPageWrapper
