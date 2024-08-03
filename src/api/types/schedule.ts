export interface PostScheduleRequest {
  timetableId: number
  title: string
  day: string
  startTime: string
  endTime: string
  location?: string
}

export interface DeleteScheduleRequest {
  scheduleId: number
}

export interface PatchScheduleRequest extends PostScheduleRequest {
  scheduleId: number
}
