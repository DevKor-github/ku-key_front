export interface PostScheduleRequest {
  authHeader: string | null
  timetableId: number
  title: string
  day: string
  startTime: string
  endTime: string
  location?: string
}
