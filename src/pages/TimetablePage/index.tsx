import { useCallback, useRef } from 'react'

import * as s from './style.css'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import { LoadingScreen } from '@/components/ui/spinner'
import LectureBottomSheet from '@/domain/Timetable/components/LectureBottomSheet'
import Timetable from '@/domain/Timetable/components/Timetable'
import { useCreateDefaultTimetable } from '@/domain/Timetable/hooks/useCreateDefaultTimetable'
import Header from '@/features/Timetable/components/Header'
import StatusBar from '@/features/Timetable/components/StatusBar'
import { DEFAULT_SEMESTER_INDEX, DEFAULT_TIMETABLE_INDEX, TimetableParams } from '@/pages/TimetablePage/constants'
import { useQueryParams } from '@/util/hooks/useQueryParams'
import { timetablePreprocess } from '@/util/timetableUtil'

const TimetablePage = () => {
  const [queryParam, setQueryParam] = useQueryParams<TimetableParams>()
  const curSemester = queryParam.semester ? Number(queryParam.semester) : DEFAULT_SEMESTER_INDEX
  const curIndex = queryParam.index ? Number(queryParam.index) : DEFAULT_TIMETABLE_INDEX

  const setCurSemester = useCallback(
    (target: number) => {
      setQueryParam({ semester: target.toString(), index: undefined })
    },
    [setQueryParam],
  )

  const setCurIndex = useCallback(
    (target: number) => {
      setQueryParam({ index: target.toString() })
    },
    [setQueryParam],
  )

  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)

  const semesterList = timetablePreprocess(timetableList)

  const isEmptyTimetable = semesterList[curSemester].timetables.length === 0

  const setTimetableIndex = useCallback(
    (toIndex: number) => {
      setCurIndex(toIndex)
    },
    [setCurIndex],
  )
  const deleteTimetableHandler = useCallback(
    (timetableId: number) => {
      if (curIndex !== 0) {
        setCurIndex(curIndex - 1)
      }
      deleteTimetable({ timetableId })
    },
    [setCurIndex, deleteTimetable, curIndex],
  )

  useCreateDefaultTimetable(semesterList[curSemester])

  return (
    <div className={s.Wrapper}>
      <Header semesterList={semesterList} curSemester={curSemester} setCurSemester={setCurSemester} imgRef={imgRef} />
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setTimetableIndex} />
      {isEmptyTimetable ? (
        <LoadingScreen />
      ) : (
        <div className={s.Contents}>
          <Timetable
            ref={imgRef}
            timetable={semesterList[curSemester].timetables[curIndex]}
            deleteTimetableHandler={deleteTimetableHandler}
          />
          <LectureBottomSheet
            timetableId={semesterList[curSemester].timetables[curIndex].timetableId}
            year={semesterList[curSemester].year}
            semester={semesterList[curSemester].semester}
          />
        </div>
      )}
    </div>
  )
}

export default TimetablePage
