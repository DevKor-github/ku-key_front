import { useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { HOME_QUERY_KEYS } from '@/features/HomeClubs/queries'
import { kuKeyClient } from '@/packages/api'
import { useAuth } from '@/util/auth/useAuth'

type Props = {
  isLogin: boolean
}
export const useQueryRecommendedClub = ({ isLogin }: Props) => {
  const read = useAsyncRead(kuKeyClient.api.ClubApi.clubRecommendGet)
  return {
    queryKey: HOME_QUERY_KEYS.recommendedClubs(isLogin),
    queryFn: () => read({ isLogin }),
  }
}
export const useReadRecommendedClubs = () => {
  const isLogin = useAuth().authState ?? false
  const query = useQueryRecommendedClub({ isLogin })
  return useSuspenseQuery(query)
}
