import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { PostScheduleRequest } from '@/api/types/schedule'

const postSchedule = async ({
  authHeader,
  timetableId,
  title,
  day,
  startTime,
  endTime,
  location,
}: PostScheduleRequest) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/schedule`,
    {
      timetableId,
      title,
      day,
      startTime,
      endTime,
      location,
    },
    { headers: { Authorization: authHeader } },
  )
  return response
}

export const usePostSchedule = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<PostScheduleRequest, 'authHeader'>) => {
      return postSchedule({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}
