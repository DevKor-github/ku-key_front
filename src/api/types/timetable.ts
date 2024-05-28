import { CourseType } from '@/types/timetable'

// GetTimeTableByTimeTableIdResponse
export type GetTimeTableByTimeTableIdResponse = CourseType[]

export interface TimetableInfo {
  tableID: number
  semester: string
  year: string
  isPin: boolean
  tableName: string
}

// GetTimeTableByUserIdResponse
export interface GetTimeTableByUserIdResponse extends Omit<TimetableInfo, 'semester'> {
  semester: number
}
