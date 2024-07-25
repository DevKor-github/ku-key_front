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

export interface GetByCourseNameInMajorRequest {
  authHeader: string | null
  major: string
  courseName: string
  cursorId?: number
}

export interface GetByCourseNameInGeneralRequest {
  authHeader: string | null
  courseName: string
  cursorId?: number
}

export interface GetByProfInMajorRequest {
  authHeader: string | null
  major: string
  professorName: string
  cursorId?: number
}
export interface GetByProfInGeneralRequest {
  authHeader: string | null
  professorName: string
  cursorId?: number
}
export interface GetInAcademicFoundationRequest {
  authHeader: string | null
  college: string
}
