import { SearchedCourse } from '@/types/course'
import { SemesterType } from '@/types/timetable'

export interface GetByCourseCodeRequest {
  courseCode: string
  cursorId?: number
  year: string
  semester: SemesterType
}

export interface GetCourseResponse {
  hasNextPage: boolean
  nextCursorId: number | null
  data: SearchedCourse[]
}

export interface GetByCourseNameInMajorRequest {
  major: string
  courseName: string
  cursorId?: number
  year: string
  semester: SemesterType
}

export interface GetByCourseNameInGeneralRequest {
  courseName: string
  cursorId?: number
  year: string
  semester: SemesterType
}

export interface GetByProfInMajorRequest {
  major: string
  professorName: string
  cursorId?: number
  year: string
  semester: SemesterType
}
export interface GetByProfInGeneralRequest {
  professorName: string
  cursorId?: number
  year: string
  semester: SemesterType
}
export interface GetInAcademicFoundationRequest {
  college: string
  cursorId?: number
  year: string
  semester: SemesterType
}
