import { useEffect, useRef } from 'react'

import { usePostTimetable } from '@/api/hooks/timetable'
import { Semester } from '@/types/timetable'

/**
 * 
 * 현 학기에 대한 시간표가 존재하지 않는다면
 * 자동으로 해당 학기에 시간표를 추가합니다.
 * 
 */
export const useCreateDefaultTimetable = (isEmptyTimetable: boolean, curSemester: Semester) => {
  const { mutate: createTimetable } = usePostTimetable()

  const isCreating = useRef(false) // 시간표가 비어 있어 생성 중인 경우

  useEffect(() => {
    if (isEmptyTimetable && !isCreating.current) {
      isCreating.current = true
      createTimetable({
        timetableName: 'timetable 1',
        semester: curSemester.semester,
        year: curSemester.year,
      })
    }
    if (!isEmptyTimetable) {
      isCreating.current = false
    }
  }, [createTimetable, curSemester, isEmptyTimetable])
}
