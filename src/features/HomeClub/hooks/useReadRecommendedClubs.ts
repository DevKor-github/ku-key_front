import { useSuspenseQuery } from '@tanstack/react-query'

import { ClubProfileProps } from '@/api/types/club'
import { HOME_QUERY_KEYS } from '@/features/HomeClub/queries'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const getRecommendedClub = async (isLogin: boolean) => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/recommend', { params: { isLogin } })
  return response.data
}

export const useReadRecommendedClubs = () => {
  const isLogin = useAuth().authState ?? false
  return useSuspenseQuery({
    queryKey: HOME_QUERY_KEYS.recommendedClubs(isLogin),
    queryFn: () => getRecommendedClub(isLogin),
  })
}
