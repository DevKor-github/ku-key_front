import { css } from '@styled-stytem/css'

const Day = () => {
  return (
    <div
      className={css({
        display: 'flex',
        pt: 2.5,
        flexDir: 'column',
        gap: -3,
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div className={css({ display: 'flex', w: '5px', h: '5px', bgColor: 'red.2', rounded: 'full' })} />
      <div
        className={css({
          display: 'flex',
          w: '50px',
          h: '50px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 21,
          fontWeight: 600,
          color: '#2D2D2D',
        })}
      >
        1
      </div>
    </div>
  )
}

export default Day
