import { useMutation, useQuery } from '@tanstack/react-query'

import { GetPointHistroyResponse } from '@/api/types/user'
import { useSignOut } from '@/util/auth/useSignOut'
import { apiInterface } from '@/util/axios/custom-axios'

const getPointHistory = async () => {
  const response = await apiInterface.get<GetPointHistroyResponse>('/user/point-history')
  return response.data
}

export const useGetPointHistory = () => {
  return useQuery({ queryKey: ['pointHistory'], queryFn: getPointHistory, initialData: [] })
}

const deleteUser = async () => {
  const response = await apiInterface.delete('/user')
  return response
}

export const useDeleteUser = () => {
  const signOut = useSignOut()
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: signOut,
  })
}
