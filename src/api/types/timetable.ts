import { CourseType, SemesterType } from '@/types/timetable'

export interface TimetableInfo {
  tableID: number
  semester: SemesterType
  year: string
  isPin: boolean
  tableName: string
}

// GetTimeTableByTimeTableIdResponse
export type GetTimeTableByTimeTableIdResponse = CourseType[]

// GetTimeTableByUserIdResponse
export type GetTimeTableByUserIdResponse = TimetableInfo[]

export interface CreateTimeTableRequest {
  tableName: string
  semester: SemesterType
  year: string
}
