import { TimetableInfo } from '@/api/types/timetable'

export type DayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

export type SemesterType = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export interface Semester {
  year: string
  semester: SemesterType
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
