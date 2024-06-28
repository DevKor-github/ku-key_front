import { css, cva } from '@styled-stytem/css'

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
    fontSize: 18,
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
  curInd: number
  setCurIndex: React.Dispatch<React.SetStateAction<number>>
}

const SelectTimetableBtn = ({
  timetableInd: ind,
  timetableInfo: timetable,
  curInd,
  setCurIndex,
}: SelectTimetableBtnProps) => {
  return (
    <div className={SelectTimetableBtnStyle({ selected: ind === curInd })}>
      <button onClick={() => setCurIndex(ind)} className={css({ cursor: 'pointer' })}>
        {timetable.tableName}
      </button>
    </div>
  )
}

export default SelectTimetableBtn
