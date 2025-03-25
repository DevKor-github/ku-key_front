import { DayType } from '@/types/timetable'

export interface AddOnMyOwnForm {
  title: string
  day: DayType
  startTime: string
  endTime: string
  location?: string
}
