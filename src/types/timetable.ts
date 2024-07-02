export type DayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

export type SemesterType = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export type ColorType = 'Red' | 'Blue' | 'Green' | 'Purple' | 'Orange' | 'Gray'

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
  courseId: number
  professorName: string
  courseName: string
  courseCode: string
  startTime: string
  endTime: string
  classroom: string
  day: DayType
}

export interface ScheduleType {
  scheduleId: number
  scheduleTitle: string
  scheduleStartTime: string
  scheduleEndTime: string
  location: string
  scheduleDay: DayType
}

export interface GridType {
  schedType: 'Course' | 'Schedule'
  scheduleId: number
  title: string
  startTime: string
  endTime: string
  location: string
  day: DayType
  professorName?: string
  courseCode?: string
}
