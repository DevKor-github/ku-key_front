export const DayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const

export type DayType = (typeof DayArray)[number]

export type SemesterType = number

export type ColorType = 'Red' | 'Blue' | 'Green' | 'Purple' | 'Gray'

export type GlobalModalStateType = 'color' | 'name' | 'delete' | null

export const timePattern = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

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
  syllabus: string
  startTime: string | null
  endTime: string | null
  classroom: string | null
  day: DayType | null
}

export interface ScheduleType {
  scheduleId: number
  scheduleTitle: string
  scheduleStartTime: string
  scheduleEndTime: string
  location: string
  scheduleDay: DayType
}

export interface TimetableContentsType {
  scheduleType: 'Course' | 'Schedule'
  scheduleId: number
  title: string
  location: string | null
  professorName?: string
  courseCode?: string
  syllabus?: string
}

export interface GridType extends TimetableContentsType {
  startTime: string
  endTime: string
  day: DayType
}

export interface TimetableInterface {
  timetableName: string
  courses: CourseType[]
  schedules: ScheduleType[]
  color: ColorType
}
