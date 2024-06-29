import { CourseType, SemesterType, TimetableInfo } from '@/types/timetable'

export interface GetTimeTableByTimeTableIdRequest {
  authHeader: string | null
  timeTableId: number
}

export type GetTimeTableByTimeTableIdResponse = CourseType[]

export type GetTimeTableByUserIdResponse = TimetableInfo[]

export interface CreateTimeTableRequest {
  authHeader: string | null
  tableName: string
  semester: SemesterType
  year: string
}

export interface UpdateTimeTableNameRequest {
  authHeader: string | null
  tableName: string
  timeTableId: number
}

export interface UpdateMainTimeTableRequest {
  authHeader: string | null
  semester: SemesterType
  year: string
  timeTableId: number
}

export interface DeleteTimeTableRequest {
  authHeader: string | null
  timeTableId: number
}