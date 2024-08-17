import { GetCalendarYearlyResponse } from '@/api/types/home_sub'
import { Semester } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

export const getInitialCanlendarResponse = (semester: number): GetCalendarYearlyResponse => {
  if (semester === 1) {
    return Array.from({ length: 7 }, (_, ind) => ({ month: ind + 2, schedules: [] }))
  }
  return Array.from({ length: 5 }, (_, ind) => ({ month: ind + 8, schedules: [] })).concat(
    Array.from({ length: 2 }, (_, ind) => ({ month: ind + 1, schedules: [] })),
  )
}

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

export const useAcademicSemester = () => {
  /**
   * 현재 학기, 이전의 3개 학기 반환
   *
   * 1학기 :: 2월 ~ 7월
   * 2학기 :: 8월 ~ 1월
   */
  const KSTtoday = new Date()
  const year = KSTtoday.getFullYear()
  const month = KSTtoday.getMonth() + 1
  const ret: Semester[] = []

  if (1 < month && month <= 7) {
    // 1학기
    ret.push({ year: `${year - 2}`, semester: numberToSemester[2], timetables: [] })
    for (let i = 0; i < 4; i += 2) {
      ret.push({ year: `${year - 1}`, semester: numberToSemester[i], timetables: [] })
    }
    ret.push({ year: `${year}`, semester: numberToSemester[0], timetables: [] })
  } else {
    // 2학기
    for (let i = 0; i < 4; i += 2) {
      ret.push({ year: `${year - 1}`, semester: numberToSemester[i], timetables: [] })
    }
    for (let i = 0; i < 4; i += 2) {
      ret.push({ year: `${year}`, semester: numberToSemester[i], timetables: [] })
    }
  }

  return ret
}
