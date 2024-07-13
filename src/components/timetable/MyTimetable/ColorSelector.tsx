import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

import { useUpdateTimetableColor } from '@/api/hooks/timetable'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { ColorType } from '@/types/timetable'

interface ColorSelectorProps {
  colorTheme: ColorType
  timetableId: number
  closeModal: () => void
}

const ColorSelector = ({ colorTheme, closeModal, timetableId }: ColorSelectorProps) => {
  const { mutate } = useUpdateTimetableColor()
  return (
    <button
      onClick={() => {
        closeModal()
        mutate({ tableColor: colorTheme, timetableId })
      }}
      className={css({
        display: 'flex',
        flexDir: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        w: 23,
        cursor: 'pointer',
      })}
    >
      <div className={css({ color: 'lightGray.1', fontSize: 18, fontWeight: 500 })}>{colorTheme}</div>
      <div
        className={cx(
          css({
            h: '1.375rem',
            w: '1.375rem',
            rounded: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            _hover: {
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
            },
          }),
          shadow(),
        )}
        style={{
          backgroundColor: COLOR_INFO[colorTheme].symbol,
        }}
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
    </button>
  )
}

export default ColorSelector
