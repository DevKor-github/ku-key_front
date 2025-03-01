import { Semester } from '@/types/timetable'
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

  if (1 <= month && month <= 7) {
    // 1학기
    for (let i = 1; i <= 4; i += 2) {
      academicSemester.push({ year: `${year - 1}`, semester: i, timetables: [] })
    }
    academicSemester.push({ year: `${year}`, semester: 1, timetables: [] })
  } else {
    // 2학기
    academicSemester.push({ year: `${year - 1}`, semester: 3, timetables: [] })
    for (let i = 1; i <= 4; i += 2) {
      academicSemester.push({ year: `${year}`, semester: i, timetables: [] })
    }
  }

  return academicSemester
}
