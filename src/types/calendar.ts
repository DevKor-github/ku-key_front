export type DayStatus = 'THIS_MONTH' | 'PREV_MONTH' | 'NEXT_MONTH'
export interface DayProps {
  status: DayStatus
  date: Date
  selected: boolean
}

export interface EventType {
  id: number
  title: string
  description: string
  startDate: string
  startDay: string
  endDate: string
  endDay: string
}
export interface MonthEventType {
  month: number
  schedules: EventType[]
}
