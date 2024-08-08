import { DayType } from '@/types/timetable'

export interface PostScheduleRequest {
  timetableId: number
  title: string
  day: DayType
  startTime: string
  endTime: string
  location?: string
}

export interface DeleteScheduleRequest {
  timetableId: number
  scheduleId: number
}

export interface PatchScheduleRequest extends PostScheduleRequest {
  scheduleId: number
}

export interface PostScheduleResponse {
  id: number
  timetableId: number
  title: string
  day: DayType
  startTime: string
  endTime: string
  location: string
}
