import { ColorType, CourseType, ScheduleType, SemesterType, TimetableInfo } from '@/types/timetable'

export interface GetTimetableByTimetableIdRequest {
  authHeader: string | null
  timetableId: number
}

export interface GetTimetableByTimetableIdResponse {
  courses: CourseType[]
  schedules: ScheduleType[]
  color: ColorType
}

export interface GetFriendTimetableResponse extends GetTimetableByTimetableIdResponse {
  tableName: string
}

export type GetTimetableByUserIdResponse = TimetableInfo[]

export interface CreateTimetableRequest {
  authHeader: string | null
  timetableName: string
  semester: SemesterType
  year: string
}

export interface UpdateTimetableNameRequest {
  authHeader: string | null
  timetableName: string
  timetableId: number
}

export interface UpdateMainTimetableRequest {
  authHeader: string | null
  semester: SemesterType
  year: string
  timetableId: number
}

export interface DeleteTimetableRequest {
  authHeader: string | null
  timetableId: number
}

export interface UpdateTimetableColorRequest {
  authHeader: string | null
  timetableId: number
  timetableColor: ColorType
}
