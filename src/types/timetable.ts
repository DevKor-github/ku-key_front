export const DayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const

export type DayType = (typeof DayArray)[number]

export type SemesterType = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export type ColorType = 'Red' | 'Blue' | 'Green' | 'Purple' | 'Gray'

export type GlobalModalStateType = 'color' | 'name' | 'delete' | null

export type FilterType = 'course' | 'professor' | 'code'

export const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/

export interface TimetableInfo {
  timetableId: number
  semester: SemesterType
  year: string
  mainTimetable: boolean
  timetableName: string
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
