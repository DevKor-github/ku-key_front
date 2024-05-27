import { CourseType } from '@/types/timetable'

// GetTimeTableByTimeTableIdResponse
export type GetTimeTableByTimeTableIdResponse = CourseType[]

// GetTimeTableByUserIdResponse
export interface TimetableInfo {
  tableID: number
  semester: string
  year: string
  isPin: boolean
  tableName: string
}
