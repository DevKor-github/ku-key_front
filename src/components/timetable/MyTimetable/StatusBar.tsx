import { css, cva } from '@styled-stytem/css'
import { Check, Plus } from 'lucide-react'
import { useCallback } from 'react'

import { usePostTimetable, useUpdateMainTimetable } from '@/api/hooks/timetable'
import SelectTimetableBtn from '@/components/timetable/MyTimetable/SelectTimetableBtn'
import { Semester, TimetableInfo } from '@/types/timetable'

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
  return (
    <button
      className={MainPinBtnStyle({
        main: hasTimetable ? curTimetable.mainTimetable : undefined,
        disabled: !hasTimetable,
      })}
      onClick={() => {
        if (hasTimetable && !curTimetable.mainTimetable) {
          setCurIndexZero()
          updateMainTimetable({
            semester: curTimetable.semester,
            year: curTimetable.year,
            timetableId: curTimetable.timetableId,
          })
        }
      }}
    >
      <Check size={22} />
      Main
    </button>
  )
}

interface StatusBarProps {
  curSemester: Semester
  curIndex: number
  setCurIndex: (toIndex: number) => void
}

const StatusBar = ({ curSemester, curIndex, setCurIndex }: StatusBarProps) => {
  const { mutate: createTimetable } = usePostTimetable()

  const curSemesterTimetableLen = curSemester.timetables.length

  const handleCreateTimetableBtn = useCallback(() => {
    createTimetable({
      timetableName: `timetable ${curSemesterTimetableLen + 1}`,
      semester: curSemester.semester,
      year: curSemester.year,
    })
  }, [curSemester, createTimetable, curSemesterTimetableLen])

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
            display: { base: 'flex', mdDown: 'none' },
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
          {curSemester.timetables.map((timetable, index) => {
            return (
              <SelectTimetableBtn
                key={index}
                timetableInfo={timetable}
                curIndex={curIndex}
                timetableInd={index}
                setCurIndex={setCurIndex}
              />
            )
          })}
        </div>
      </div>
      <MainPinBtn
        hasTimetable={curSemesterTimetableLen !== 0}
        curTimetable={curSemester.timetables[curIndex]}
        setCurIndexZero={() => setCurIndex(0)}
      />
    </div>
  )
}

export default StatusBar
