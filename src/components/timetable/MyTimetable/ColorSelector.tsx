import { css } from '@styled-stytem/css'

const ColorSelector = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5, alignItems: 'center' })}>
      <div className={css({ color: 'lightGray.1', fontSize: 18, fontWeight: 500 })}>Color</div>
      <div
        className={css({
          h: '1.375rem',
          w: '1.375rem',
          bgColor: 'red.3',
          rounded: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          _hover: {
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
          },
        })}
      >
        <div
          className={css({
            h: 3,
            w: 3,
            bgColor: 'white',
            rounded: '50%',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          })}
        />
      </div>
    </div>
  )
}

export default ColorSelector
