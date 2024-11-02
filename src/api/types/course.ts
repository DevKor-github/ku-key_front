import { SearchedCourse } from '@/types/course'
import { SemesterType } from '@/types/timetable'

interface GetCourseRequestWithSemester {
  cursorId?: number
  year: string
  semester: SemesterType
}

export interface GetCourseResponse {
  hasNextPage: boolean
  nextCursorId: number | null
  data: SearchedCourse[]
}

export interface GetByCourseCodeRequest extends GetCourseRequestWithSemester {
  courseCode: string
}

export interface GetByCourseNameInMajorRequest extends GetCourseRequestWithSemester {
  major: string
  courseName: string
}

export interface GetByCourseNameInGeneralRequest extends GetCourseRequestWithSemester {
  courseName: string
}

export interface GetByProfInMajorRequest extends GetCourseRequestWithSemester {
  major: string
  professorName: string
}
export interface GetByProfInGeneralRequest extends GetCourseRequestWithSemester {
  professorName: string
}
export interface GetInAcademicFoundationRequest extends GetCourseRequestWithSemester {
  college: string
}
