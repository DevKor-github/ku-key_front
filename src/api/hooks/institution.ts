import { useQuery } from '@tanstack/react-query'

import { ClubProfileProps } from '@/api/types/institution'
import { apiInterface } from '@/util/axios/custom-axios'

const gethotClub = async () => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/hot')
  return response.data
}

export const useGetHotClub = () => {
  return useQuery({ queryKey: ['hotClub'], queryFn: gethotClub, initialData: [] as ClubProfileProps[] })
}

const getClubRecommended = async () => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/recommend')
  return response.data
}

export const useGetClubRecommended = () => {
  return useQuery({ queryKey: ['clubRecommended'], queryFn: getClubRecommended, initialData: [] as ClubProfileProps[] })
}
