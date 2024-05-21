// todo: 토요일에 존재하는 강의 대응
export type DayType = '월' | '화' | '수' | '목' | '금'

// todo: 자료형 개선
export interface TimetableInfo {
  timetableID: string
  name: string
  year: string
  semester: string
  isPin: boolean
}

export interface Semester {
  year: string
  semester: string
  timetables: TimetableInfo[]
}

export interface CourseType {
  professorName: string
  courseName: string
  courseCode: string
  day: DayType
  startTime: number
  endTime: number
  classroom: string
}
