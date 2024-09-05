import { css } from '@styled-stytem/css'

import Sugar from '@/assets/Sugar_lg.png'

interface PointStatusProps {
  name: string
  point: number
}
const PointStatus = ({ name, point }: PointStatusProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: '22px',
        pb: '26px',
        color: 'black',
        borderBottom: '1px solid {colors.lightGray.1}',
        position: 'relative',
      })}
    >
      <span className={css({ fontSize: 30, fontWeight: 700 })}>
        Hello, <span className={css({ fontSize: 36, lineHeight: 1 })}>{name}</span>
      </span>
      <span className={css({ fontSize: 24, display: 'flex', alignItems: 'center', gap: 5, mr: '120px' })}>
        <span className={css({ fontWeight: 500 })}>your sugar</span>
        <span className={css({ w: '1px', h: '17px', bgColor: 'black' })} />
        <span className={css({ fontWeight: 600, fontSize: 26 })}>{point}</span>
      </span>
      <img src={Sugar} alt="sugar" className={css({ position: 'absolute', right: 0, zIndex: 1, w: '118px' })} />
    </div>
  )
}

export default PointStatus
