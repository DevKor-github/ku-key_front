export interface Event {
  id: number
  title: string
  description: string
}
export interface CalendarResponse {
  date: Date
  events: Event[]
  eventCount: number
}
