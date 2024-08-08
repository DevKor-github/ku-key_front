import { cva } from '@styled-stytem/css'
import { Check } from 'lucide-react'
import { useCallback } from 'react'

import { useUpdateMainTimetable } from '@/api/hooks/timetable'
import { TimetableInfo } from '@/types/timetable'

const MainPinBtnStyle = cva({
  base: {
    fontSize: 18,
    fontWeight: 500,
    rounded: 30,
    bgColor: 'bg.gray',
    px: 2.5,
    h: 9,
    display: { base: 'flex', mdDown: 'none' },
    flexDir: 'row',
    gap: 1,
    alignItems: 'center',
    border: 'solid 1px {colors.lightGray.1}',
    color: 'lightGray.1',
    cursor: 'pointer',
    transition: 'border 0.256s, color 0.256s',
  },
  variants: {
    main: {
      true: {
        color: 'red.1',
        borderColor: 'red.1',
        bgColor: 'bg.red.1',
      },
      false: {
        _hover: {
          borderColor: 'darkGray.2',
          color: 'darkGray.2',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'default',
      },
    },
  },
})

interface MainPinBtnProps {
  hasTimetable: boolean
  curTimetable: TimetableInfo
  setCurIndexZero: () => void
}

const MainPinBtn = ({ hasTimetable, curTimetable, setCurIndexZero }: MainPinBtnProps) => {
  const { mutate: updateMainTimetable } = useUpdateMainTimetable()

  const handleClick = useCallback(() => {
    if (hasTimetable && !curTimetable.mainTimetable) {
      setCurIndexZero()
      updateMainTimetable({
        semester: curTimetable.semester,
        year: curTimetable.year,
        timetableId: curTimetable.timetableId,
      })
    }
  }, [curTimetable, hasTimetable, setCurIndexZero, updateMainTimetable])

  return (
    <button
      className={MainPinBtnStyle({
        main: hasTimetable ? curTimetable.mainTimetable : undefined,
        disabled: !hasTimetable,
      })}
      onClick={handleClick}
    >
      <Check size={22} />
      Main
    </button>
  )
}

export default MainPinBtn
