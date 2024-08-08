import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { useCallback } from 'react'

import { useUpdateTimetableColor } from '@/api/hooks/timetable'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { ColorType } from '@/types/timetable'

const ColorSelectorStyle = cva({
  base: {
    h: '1.875rem',
    w: '1.875rem',
    rounded: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    _hover: {
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
    },
  },
  variants: {
    isSelected: {
      true: {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
})

interface ColorSelectorProps {
  colorTheme: ColorType
  timetableId: number
  closeModal: () => void
  isSelected: boolean
}

const ColorSelector = ({ colorTheme, closeModal, timetableId, isSelected }: ColorSelectorProps) => {
  const { mutate: updateColor } = useUpdateTimetableColor()

  const handleClick = useCallback(() => {
    closeModal()
    updateColor({ timetableColor: colorTheme, timetableId })
  }, [closeModal, timetableId, colorTheme, updateColor])

  return (
    <button
      onClick={handleClick}
      className={ColorSelectorStyle({ isSelected })}
      style={{
        backgroundColor: COLOR_INFO[colorTheme].symbol,
      }}
    >
      {isSelected && (
        <div
          className={cx(
            css({
              h: 4,
              w: 4,
              bgColor: 'white',
              rounded: '50%',
            }),
            shadow(),
          )}
        />
      )}
    </button>
  )
}

export default ColorSelector
