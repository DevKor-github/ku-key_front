import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

const ColorSelector = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5, alignItems: 'center' })}>
      <div className={css({ color: 'lightGray.1', fontSize: 18, fontWeight: 500 })}>Color</div>
      <div
        className={cx(
          css({
            h: '1.375rem',
            w: '1.375rem',
            bgColor: 'red.3',
            rounded: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            _hover: {
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
            },
          }),
          shadow(),
        )}
      >
        <div
          className={cx(
            css({
              h: 3,
              w: 3,
              bgColor: 'white',
              rounded: '50%',
            }),
            shadow(),
          )}
        />
      </div>
    </div>
  )
}

export default ColorSelector
