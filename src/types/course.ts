import { DayType, SemesterType } from '@/types/timetable'

export interface SearchedCourse {
  id: number
  professorName?: string
  category: string
  college: string
  courseName: string
  courseCode: string
  credit: number
  major: string
  hasExchangeSeat: boolean
  year: string
  semester: SemesterType
  syllabus: string
  totalRate: number
  details?: courseDetail[]
}

interface courseDetail {
  day: DayType
  startTime: string
  endTime: string
  classroom: string
}
