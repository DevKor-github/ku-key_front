import { match } from 'ts-pattern'

import { GetCalendarYearlyResponse } from '@/api/types/calendar'
import { Semester } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

/**
 * Semester에 해당하는 빈 학기 배열을 전달합니다
 */
export const getInitialAcademicCalendar = (semester: 1 | 2): GetCalendarYearlyResponse => {
  return match(semester)
    .with(1, () => {
      // 1학기, 2월 ~ 8월
      return Array.from({ length: 7 }, (_, ind) => ({ month: ind + 2, schedules: [] }))
    })
    .otherwise(() => {
      // 2학기, 8월 ~ 2월
      return Array.from({ length: 5 }, (_, ind) => ({ month: ind + 8, schedules: [] })).concat(
        Array.from({ length: 2 }, (_, ind) => ({ month: ind + 1, schedules: [] })),
      )
    })
}

/**
 * 인덱스에 해당하는 달의 영어약자를 가진 배열
 */
export const numberToMonthAbb = [
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

/**
 * 현재 학기, 이전의 3개 학기 반환
 *
 * 1학기 :: 2월 ~ 7월
 * 2학기 :: 8월 ~ 1월
 */
export const useAcademicSemester = () => {
  const KSTtoday = new Date()
  const year = KSTtoday.getFullYear()
  const month = KSTtoday.getMonth() + 1
  const academicSemester: Semester[] = []

  if (1 < month && month <= 7) {
    // 1학기
    academicSemester.push({ year: `${year - 2}`, semester: numberToSemester[2], timetables: [] })
    for (let i = 0; i < 4; i += 2) {
      academicSemester.push({ year: `${year - 1}`, semester: numberToSemester[i], timetables: [] })
    }
    academicSemester.push({ year: `${year}`, semester: numberToSemester[0], timetables: [] })
  } else {
    // 2학기
    for (let i = 0; i < 4; i += 2) {
      academicSemester.push({ year: `${year - 1}`, semester: numberToSemester[i], timetables: [] })
    }
    for (let i = 0; i < 4; i += 2) {
      academicSemester.push({ year: `${year}`, semester: numberToSemester[i], timetables: [] })
    }
  }

  return academicSemester
}
