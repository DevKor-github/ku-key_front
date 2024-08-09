import { DayType } from '@/types/timetable'

export interface SearchedCourse {
  id: number
  professorName?: string
  category: string
  college: string
  courseName: string
  courseCode: string
  credit: number
  major: string
  hasExchangeSeat: true
  year: string
  semester: string
  syllabus: string
  totalRate: 0
  details?: courseDetail[]
}

interface courseDetail {
  day: DayType
  startTime: string
  endTime: string
  classroom: string
}
