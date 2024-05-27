import { TimetableInfo } from '@/api/types/timetable'

export type DayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

// todo: 자료형 개선
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
  startTime: string
  endTime: string
  classroom: string
}
