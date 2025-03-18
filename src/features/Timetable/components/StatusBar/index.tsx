import { useCallback } from 'react'

import * as s from './style.css'

import { usePostTimetable } from '@/api/hooks/timetable'
import CreateTimetableBtn from '@/components/timetable/Button/CreateTimetableBtn'
import MainPinBtn from '@/components/timetable/Button/MainPinBtn'
import SelectTimetableBtn from '@/components/timetable/Button/SelectTimetableBtn'
import { Semester } from '@/types/timetable'

interface Props {
  curSemester: Semester
  curIndex: number
  setCurIndex: (toIndex: number) => void
}

const StatusBar = ({ curSemester, curIndex, setCurIndex }: Props) => {
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
    <div className={s.Wrapper}>
      <div className={s.Contents}>
        <div className={s.TimetableControl}>
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
        <MainPinBtn
          hasTimetable={curSemesterTimetableLen !== 0}
          curTimetable={curSemester.timetables[curIndex]}
          setCurIndexZero={() => setCurIndex(0)}
        />
      </div>
    </div>
  )
}

export default StatusBar
