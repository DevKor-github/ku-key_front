import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  GetKeyExpirationResponse,
  GetMyProfileResponse,
  GetPointHistoryResponse,
  PatchExchangeDayRequest,
  PatchMyProfileRequest,
  PostLanguageRequest,
  PostPurchaseItemRequest,
} from '@/api/types/user'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const getPointHistory = async () => {
  const response = await apiInterface.get<GetPointHistoryResponse>('/user/point-history')
  return response.data
}

export const useGetPointHistory = () => {
  return useSuspenseQuery({ queryKey: ['pointHistory'], queryFn: getPointHistory })
}

const deleteUser = async () => {
  const response = await apiInterface.delete('/user')
  return response
}

export const useDeleteUser = () => {
  const { signOut } = useAuth()
  return useErrorHandledMutation({
    mutationFn: deleteUser,
    onSuccess: signOut,
  })
}

export const getMyProfile = async () => {
  const response = await apiInterface.get<GetMyProfileResponse>('/user/profile')
  return response.data
}

export const useGetMyProfile = () => {
  return useSuspenseQuery({
    queryKey: ['myProfile'],
    queryFn: getMyProfile,
  })
}

const patchMyProfile = async (props: PatchMyProfileRequest) => {
  const response = await apiInterface.patch('/user/profile', props)
  return response
}

export const usePatchMyProfile = () => {
  const queryClient = useQueryClient()

  return useErrorHandledMutation({
    mutationFn: patchMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}

const postPurchaseItem = async (props: PostPurchaseItemRequest) => {
  const response = await apiInterface.post('/user/purchase-item', props)
  return response
}

export const usePostPurchaseItem = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postPurchaseItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
      queryClient.invalidateQueries({ queryKey: ['keyExpiration'] })
    },
  })
}

const patchExchangeDay = async (params: PatchExchangeDayRequest) => {
  const response = apiInterface.patch('/user/exchange-day', params)
  return response
}

export const usePatchExchangeDay = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: patchExchangeDay,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}

const patchLevel = async (selectedLevel: number) => {
  const response = apiInterface.patch('/user/character-level', { selectedLevel })
  return response
}

export const usePatchLevel = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: patchLevel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}

const postLanguage = async (params: PostLanguageRequest) => {
  const response = apiInterface.post('/user/language', params)
  return response
}

export const usePostLanguage = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}

const deleteLanguage = async (params: PostLanguageRequest) => {
  const response = apiInterface.delete('/user/language', { data: params })
  return response
}

export const useDeleteLanguage = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: deleteLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
    },
  })
}

const getKeyExpiration = async () => {
  const response = await apiInterface.get<GetKeyExpirationResponse | null>('/user/course-review-reading-ticket')
  return response.data
}

export const useGetKeyExpiration = () => {
  return useSuspenseQuery({
    queryKey: ['keyExpiration'],
    queryFn: getKeyExpiration,
    retry: 0,
  })
}
