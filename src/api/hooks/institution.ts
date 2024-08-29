import { useQuery } from '@tanstack/react-query'

import { ClubProfileProps } from '@/api/types/institution'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const gethotClub = async () => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/hot')
  return response.data
}

export const useGetHotClub = () => {
  return useQuery({ queryKey: ['hotClub'], queryFn: gethotClub, initialData: [] as ClubProfileProps[] })
}

const getClubRecommended = async (isLogin: boolean) => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/recommend', { params: { isLogin } })
  return response.data
}

export const useGetClubRecommended = () => {
  const isLogin = useAuth().authState ?? false
  return useQuery({
    queryKey: ['clubRecommended', isLogin],
    queryFn: () => getClubRecommended(isLogin),
    initialData: [] as ClubProfileProps[],
  })
}
