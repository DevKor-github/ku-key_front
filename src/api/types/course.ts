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
}

export interface GetMajorRequest extends GetCourseRequest {
  major: string
}

export interface GetAcademicFoundationRequest extends GetCourseRequest {
  college: string
}

export interface GetByKeywordRequest extends GetCourseRequest {
  keyword: string
}
export interface GetByKeywordInMajorRequest extends GetByKeywordRequest {
  major: string
}
export interface GetByKeywordInAcademicFoundationRequest extends GetByKeywordRequest {
  college: string
}
