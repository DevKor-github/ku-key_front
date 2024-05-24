import { css, cva } from '@styled-stytem/css'
import { CircleX } from 'lucide-react'
import { useState } from 'react'

import { TimetableInfo } from '@/types/timetable'

const SelectTimetableBtnStyle = cva({
  base: {
    px: 2.5,
    h: 9,
    display: 'flex',
    alignItems: 'center',
    bgColor: 'bg',
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
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className={SelectTimetableBtnStyle({ selected: ind === curInd })}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button onClick={() => setCurIndex(ind)} className={css({ cursor: 'pointer' })}>
        {timetable.name}
      </button>
      {isHover && (
        <button
          onClick={e => {
            e.preventDefault()
            alert('시간표 삭제!')
          }}
          className={css({ cursor: 'pointer' })}
        >
          <CircleX size={16} />
        </button>
      )}
    </div>
  )
}

export default SelectTimetableBtn
