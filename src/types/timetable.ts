export type DayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

export type SemesterType = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export interface TimetableInfo {
  timeTableId: number
  semester: SemesterType
  year: string
  mainTimeTable: boolean
  tableName: string
}

export interface Semester {
  year: string
  semester: SemesterType
  timetables: TimetableInfo[]
}

export interface CourseType {
  professorName: string
  courseName: string
  courseCode: string
  startTime: string
  endTime: string
  classroom: string
  day: DayType
}
