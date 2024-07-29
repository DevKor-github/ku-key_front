import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PostScheduleRequest } from '@/api/types/schedule'
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
