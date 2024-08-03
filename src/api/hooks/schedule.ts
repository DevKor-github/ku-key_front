import { useMutation, useQueryClient } from '@tanstack/react-query'

import { DeleteScheduleRequest, PatchScheduleRequest, PostScheduleRequest } from '@/api/types/schedule'
import { apiInterface } from '@/util/axios/custom-axios'

const postSchedule = async ({ timetableId, title, day, startTime, endTime, location }: PostScheduleRequest) => {
  const response = await apiInterface.post('/schedule', {
    timetableId,
    title,
    day,
    startTime,
    endTime,
    location,
  })
  return response
}

export const usePostSchedule = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}

const deleteSchedule = async ({ scheduleId }: DeleteScheduleRequest) => {
  const response = await apiInterface.delete(`/schedule/${scheduleId}`)
  return response
}

/**
 * 시간표에 등록된 개인 스케쥴을 삭제합니다.
 */
export const useDeleteSchedule = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}

const patchSchedule = async ({
  scheduleId,
  day,
  endTime,
  startTime,
  timetableId,
  title,
  location,
}: PatchScheduleRequest) => {
  const response = await apiInterface.patch(`/schedule/${scheduleId}`, {
    timetableId,
    title,
    day,
    startTime,
    endTime,
    location,
  })
  return response
}

/**
 * 시간표에 등록된 개인 스케쥴을 수정합니다.
 */
export const usePatchSchedule = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}
