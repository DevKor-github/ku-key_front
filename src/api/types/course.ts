import { SearchedCourse } from '@/types/course'

export interface GetByCourseCodeRequest {
  authHeader: string | null
  courseCode: string
}

export type GetByCourseCodeResponse = SearchedCourse[]
