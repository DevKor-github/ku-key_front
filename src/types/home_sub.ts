interface EventType {
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
