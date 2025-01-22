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
        pt: { base: '22px', smDown: 0 },
        pb: { base: '26px', smDown: 0 },
        color: 'black',
        borderBottom: { base: '1px solid {colors.lightGray.1}', smDown: 'none' },
        position: 'relative',
        smDown: {
          bgColor: 'lightGray.2',
          px: 3.5,
          h: 15,
          rounded: 10,
        },
      })}
    >
      <span className={css({ fontSize: { base: 30, mdDown: 15, smDown: 14 }, fontWeight: 700 })}>
        Hello,{' '}
        <span
          className={css({
            fontSize: { base: 36, mdDown: 18, smDown: 16 },
            smDown: {
              fontWeight: 400,
            },
            lineHeight: 1,
          })}
        >
          {name}
        </span>
      </span>
      <span
        className={css({
          fontSize: { base: 24, mdDown: 14, smDown: 12 },
          display: 'flex',
          alignItems: 'center',
          gap: { base: 5, smDown: 1.5 },
          mr: { base: '120px', mdDown: '55px', smDown: '2.875rem' },
        })}
      >
        <span className={css({ fontWeight: { base: 500, smDown: 400 } })}>your sugar</span>
        <span
          className={css({
            w: { base: '1px', smDown: '0.4px' },
            h: { base: '17px', mdDown: '10px', smDown: '7.3px' },
            bgColor: 'black',
          })}
        />
        <span
          className={css({ fontWeight: { base: 600, smDown: 700 }, fontSize: { base: 26, mdDown: 15, smDown: 12 } })}
        >
          {point}
        </span>
      </span>
      <img
        src={Sugar}
        alt="sugar"
        className={css({
          position: 'absolute',
          right: { base: 0, smDown: 3.5 },
          zIndex: 1,
          w: { base: '118px', mdDown: '50px', smDown: 10 },
        })}
      />
    </div>
  )
}

export default PointStatus
