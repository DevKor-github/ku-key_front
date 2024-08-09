import { MonthEventType } from '@/types/home_sub'

export interface GetCalendarYearlyRequest {
  year: string
}
export type GetCalendarYearlyResponse = MonthEventType[]
