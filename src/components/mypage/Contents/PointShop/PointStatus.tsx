import { css } from '@styled-system/css'

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
      <span className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700 })}>
        Hello, <span className={css({ fontSize: { base: 36, mdDown: 18 }, lineHeight: 1 })}>{name}</span>
      </span>
      <span
        className={css({
          fontSize: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          mr: { base: '120px', mdDown: '55px' },
        })}
      >
        <span className={css({ fontWeight: 500, mdDown: { display: 'none' } })}>your sugar</span>
        <span className={css({ w: '1px', h: '17px', bgColor: 'black' })} />
        <span className={css({ fontWeight: 600, fontSize: { base: 26, mdDown: 15 } })}>{point}</span>
      </span>
      <img
        src={Sugar}
        alt="sugar"
        className={css({ position: 'absolute', right: 0, zIndex: 1, w: { base: '118px', mdDown: '50px' } })}
      />
    </div>
  )
}

export default PointStatus
