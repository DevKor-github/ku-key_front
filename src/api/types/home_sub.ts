import { MonthEventType } from '@/types/home_sub'

export interface GetCalendarYearlyRequest {
  year: number
  semester: 1 | 2
}

export type GetCalendarYearlyResponse = MonthEventType[]
