import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { PostAttendanceResponse } from '@/api/types/attendance'
import { apiInterface } from '@/util/axios/custom-axios'

const postAttendance = async () => {
  const response = await apiInterface.post<PostAttendanceResponse>('/attendance-check')
  return response.data
}

export const usePostAttendance = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postAttendance,
    onSuccess: () => {
      queryClient.setQueryData<boolean>(['attendance'], true)
    },
  })
}

const getAttendance = async () => {
  const response = await apiInterface.get<boolean>('/attendance-check')
  return response.data
}

export const useGetAttendance = () => {
  return useQuery({
    queryKey: ['attendance'],
    queryFn: getAttendance,
  })
}
