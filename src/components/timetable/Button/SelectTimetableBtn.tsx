import { css, cva } from '@styled-system/css'

import { TimetableInfo } from '@/types/timetable'

const SelectTimetableBtnStyle = cva({
  base: {
    px: 2.5,
    h: 9,
    display: 'flex',
    alignItems: 'center',
    bgColor: 'bg.gray',
    rounded: 10,
    color: 'lightGray.1',
    fontSize: { base: 18, mdDown: 14 },
    fontWeight: 500,
    wordWrap: 'break-word',
    border: '1px solid {colors.lightGray.1}',
    gap: 1.5,
  },
  variants: {
    selected: {
      true: {
        borderColor: 'darkGray.2',
        color: 'darkGray.2',
      },
    },
  },
})

interface SelectTimetableBtnProps {
  timetableInfo: TimetableInfo
  timetableInd: number
  curIndex: number
  setCurIndex: (toIndex: number) => void
}

const SelectTimetableBtn = ({
  timetableInd: index,
  timetableInfo: timetable,
  curIndex,
  setCurIndex,
}: SelectTimetableBtnProps) => {
  return (
    <div className={SelectTimetableBtnStyle({ selected: index === curIndex })}>
      <button
        onClick={() => setCurIndex(index)}
        className={css({
          cursor: 'pointer',
          maxW: { base: 50, lgDown: 30, mdDown: 20 },
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        })}
      >
        {timetable.timetableName}
      </button>
    </div>
  )
}

export default SelectTimetableBtn
