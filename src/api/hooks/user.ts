import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { GetMyProfileResponse, GetPointHistroyResponse, PatchMyProfileRequest } from '@/api/types/user'
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

const getMyProfile = async () => {
  const response = await apiInterface.get<GetMyProfileResponse>('/user/profile')
  return response.data
}

export const useGetMyProfile = () => {
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: getMyProfile,
    initialData: {
      name: '',
      country: '',
      homeUniversity: '',
      major: '',
      startDay: '',
      endDay: '',
      point: 0,
      languages: [],
      level: 0,
      type: '',
    },
  })
}

const patchMyProfile = async (props: PatchMyProfileRequest) => {
  const response = await apiInterface.patch('/user/profile', props)
  return response
}

export const usePatchMyProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: patchMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}
