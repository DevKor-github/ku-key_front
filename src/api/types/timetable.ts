import { ColorType, CourseType, ScheduleType, SemesterType, TimetableInfo } from '@/types/timetable'

export interface GetTimetableByTimetableIdRequest {
  timetableId: number
}

export interface GetTimetableByTimetableIdResponse {
  courses: CourseType[]
  schedules: ScheduleType[]
  color: ColorType
}

export interface GetFriendTimetableResponse extends GetTimetableByTimetableIdResponse {
  timetableName: string
}

export type GetTimetableByUserIdResponse = TimetableInfo[]

export interface CreateTimetableRequest {
  timetableName: string
  semester: SemesterType
  year: string
}

export interface UpdateTimetableNameRequest {
  timetableName: string
  timetableId: number
}

export interface UpdateMainTimetableRequest {
  semester: SemesterType
  year: string
  timetableId: number
}

export interface DeleteTimetableRequest {
  timetableId: number
}

export interface UpdateTimetableColorRequest {
  timetableId: number
  timetableColor: ColorType
}

export interface PostCourseRequest {
  timetableId: number
  courseId: number
}

export interface UpdateTimetableColorResponse {
  id: number
  userId: number
  timetableName: string
  semester: SemesterType
  year: string
  mainTimetable: boolean
  color: ColorType
}
