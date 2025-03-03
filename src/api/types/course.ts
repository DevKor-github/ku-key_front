import { SearchedCourse } from '@/types/course'
import { SemesterType } from '@/types/timetable'

export interface GetCourseResponse {
  hasNextPage: boolean
  nextCursorId: number | null
  data: SearchedCourse[]
}

export interface GetCourseRequest {
  cursorId?: number
  year: string
  semester: SemesterType
  keyword?: string
  category?: 'Major' | 'General Studies' | 'Academic Foundations'
  classification?: string
}
