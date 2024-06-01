import { css, cva } from '@styled-stytem/css'
import { CircleX } from 'lucide-react'
import { useState } from 'react'

import { useDeleteTimetable } from '@/api/hooks/timetable'
import { TimetableInfo } from '@/api/types/timetable'

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
  totalLen: number
  setCurIndex: React.Dispatch<React.SetStateAction<number>>
}

const SelectTimetableBtn = ({
  timetableInd: ind,
  timetableInfo: timetable,
  curInd,
  totalLen,
  setCurIndex,
}: SelectTimetableBtnProps) => {
  const [isHover, setIsHover] = useState(false)
  const { mutate: deleteTimetable } = useDeleteTimetable()
  return (
    <div
      className={SelectTimetableBtnStyle({ selected: ind === curInd })}
      onMouseEnter={() => {
        if (totalLen !== 1) setIsHover(true)
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <button onClick={() => setCurIndex(ind)} className={css({ cursor: 'pointer' })}>
        {timetable.tableName}
      </button>
      {isHover && (
        <button
          onClick={e => {
            e.preventDefault()
            if (ind === curInd) {
              if (ind !== 0) setCurIndex(prev => prev - 1)
            }
            deleteTimetable({ tableId: timetable.tableId })
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
