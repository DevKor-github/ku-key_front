export type DayType = '월' | '화' | '수' | '목' | '금'

export interface CourseType {
  professorName: string
  courseName: string
  courseCode: string
  day: DayType
  startTime: number
  endTime: number
  classroom: string
}
