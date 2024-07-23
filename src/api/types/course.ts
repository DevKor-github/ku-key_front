import { SearchedCourse } from '@/types/course'

export interface GetByCourseCodeRequest {
  authHeader: string | null
  courseCode: string
}

export type GetCourseResponse = SearchedCourse[]

export interface GetByCourseNameInGeneralRequest {
  authHeader: string | null
  courseName: string
}
