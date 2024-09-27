import { MonthEventType } from '@/types/calendar'

export interface CalendarEventProps {
  id: number
  title: string
  description: string
}
export interface CalendarResponse {
  date: Date
  event: CalendarEventProps[]
  eventCount: number
}

export interface GetCalendarYearlyRequest {
  year: number
  semester: 1 | 2
}

export type GetCalendarYearlyResponse = MonthEventType[]
