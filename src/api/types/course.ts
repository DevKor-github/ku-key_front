import { SearchedCourse } from '@/types/course'

export interface GetByCourseCodeRequest {
  authHeader: string | null
  courseCode: string
  cursorId?: number
}

export interface GetCourseResponse {
  hasNextPage: boolean
  nextCursorId: number
  data: SearchedCourse[]
}

export interface GetByCourseNameInGeneralRequest {
  authHeader: string | null
  courseName: string
  cursorId?: number
}
