interface EventType {
  id: number
  title: string
  description: string
}

interface DayEventType {
  date: string
  event: EventType[]
  eventCount: number
}

export interface MonthEventType {
  month: number
  monthEvents: DayEventType[]
}
