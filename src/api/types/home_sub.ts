import { MonthEventType } from '@/types/home_sub'

export interface GetCalendarYearlyRequest {
  year: number
  semester: number
}

export type GetCalendarYearlyResponse = MonthEventType[]
