import { css } from '@styled-system/css'
import { useCallback } from 'react'

import { usePostTimetable } from '@/api/hooks/timetable'
import CreateTimetableBtn from '@/components/timetable/Button/CreateTimetableBtn'
import MainPinBtn from '@/components/timetable/Button/MainPinBtn'
import SelectTimetableBtn from '@/components/timetable/Button/SelectTimetableBtn'
import { Semester } from '@/types/timetable'

interface StatusBarProps {
  curSemester: Semester
  curIndex: number
  setCurIndex: (toIndex: number) => void
}

const StatusBar = ({ curSemester, curIndex, setCurIndex }: StatusBarProps) => {
  const { mutate: createTimetable } = usePostTimetable()

  const curSemesterTimetableLen = curSemester.timetables.length

  const handleCreateTimetable = useCallback(() => {
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
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
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
          <CreateTimetableBtn handleCreate={handleCreateTimetable} />
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
