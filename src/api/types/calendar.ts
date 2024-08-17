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
