import { SearchedCourse } from '@/types/course'

export interface GetByCourseCodeRequest {
  courseCode: string
  cursorId?: number
}

export interface GetCourseResponse {
  hasNextPage: boolean
  nextCursorId: number
  data: SearchedCourse[]
}

export interface GetByCourseNameInMajorRequest {
  major: string
  courseName: string
  cursorId?: number
}

export interface GetByCourseNameInGeneralRequest {
  courseName: string
  cursorId?: number
}

export interface GetByProfInMajorRequest {
  major: string
  professorName: string
  cursorId?: number
}
export interface GetByProfInGeneralRequest {
  professorName: string
  cursorId?: number
}
export interface GetInAcademicFoundationRequest {
  college: string
}
