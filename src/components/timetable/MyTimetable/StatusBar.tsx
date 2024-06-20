import { css, cva } from '@styled-stytem/css'
import { Check, Plus } from 'lucide-react'

import { usePostTimetable, useUpdateMainTable } from '@/api/hooks/timetable'
import SelectTimetableBtn from '@/components/timetable/MyTimetable/SelectTimetableBtn'
import { Semester } from '@/types/timetable'

const MainPinBtn = cva({
  base: {
    fontSize: 18,
    fontWeight: 500,
    rounded: 30,
    bgColor: 'bg',
    px: 2.5,
    h: 9,
    display: 'flex',
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
        bgColor: 'bg.red',
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

interface StatusBarProps {
  curSemester: Semester
  curIndex: number
  setCurIndex: React.Dispatch<React.SetStateAction<number>>
}

const StatusBar = ({ curSemester, curIndex, setCurIndex }: StatusBarProps) => {
  const { mutate: createTimetable } = usePostTimetable()
  const { mutate: updateMainTable } = useUpdateMainTable()

  const curSemesterTimetableLen = curSemester.timetables.length
  const hasTable = curSemesterTimetableLen !== 0
  const curTimetable = curSemester.timetables[curIndex]

  const handleCreateTimetableBtn = () => {
    createTimetable({
      tableName: `timetable ${curSemesterTimetableLen + 1}`,
      semester: curSemester.semester,
      year: curSemester.year,
    })
  }

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 5,
        h: 11,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5, alignItems: 'center' })}>
        <button
          onClick={handleCreateTimetableBtn}
          className={css({
            h: 9,
            w: 9,
            cursor: 'pointer',
            bgColor: 'red.2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rounded: 10,
            color: 'white',
            overflow: 'hidden',
            position: 'relative',
            transition: 'box-shadow 0.256s',
            _hover: {
              boxShadow: '0px 0px 4px rgba(231, 0, 0, 0.70)',
            },
          })}
        >
          <div
            className={css({
              position: 'absolute',
              h: 9,
              w: 9,
              bg: 'linear-gradient(0deg, black 35%, rgba(0, 0, 0, 0.20) 88%)',
              opacity: 0.2,
              zIndex: 1,
            })}
          />
          <Plus className={css({ zIndex: 2 })} />
        </button>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          {curSemester.timetables.map((timetable, ind) => {
            return (
              <SelectTimetableBtn
                key={ind}
                timetableInfo={timetable}
                curInd={curIndex}
                timetableInd={ind}
                setCurIndex={setCurIndex}
                totalLen={curSemesterTimetableLen}
              />
            )
          })}
        </div>
      </div>
      {hasTable ? (
        <button
          className={MainPinBtn({ main: curTimetable.mainTimeTable })}
          onClick={() => {
            if (!curTimetable.mainTimeTable) {
              setCurIndex(0)
              updateMainTable({
                semester: curTimetable.semester,
                year: curTimetable.year,
                timeTableId: curTimetable.timeTableId,
              })
            }
          }}
        >
          <Check size={22} />
          Main
        </button>
      ) : (
        <button className={MainPinBtn({ disabled: true })}>
          <Check size={22} />
          Main
        </button>
      )}
    </div>
  )
}

export default StatusBar
