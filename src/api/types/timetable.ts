import { CourseType, SemesterType } from '@/types/timetable'

export interface TimetableInfo {
  tableId: number
  semester: SemesterType
  year: string
  mainTimeTable: boolean
  tableName: string
}

// GetTimeTableByTimeTableIdResponse
export type GetTimeTableByTimeTableIdResponse = CourseType[]

// GetTimeTableByUserIdResponse
export type GetTimeTableByUserIdResponse = TimetableInfo[]

export interface CreateTimeTableRequest {
  authHeader: string
  tableName: string
  semester: SemesterType
  year: string
}
