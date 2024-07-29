export interface PostScheduleRequest {
  timetableId: number
  title: string
  day: string
  startTime: string
  endTime: string
  location?: string
}
