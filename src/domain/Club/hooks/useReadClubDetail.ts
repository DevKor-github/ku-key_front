import { useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { CLUB_QUERY_KEY } from '@/domain/Club/queries'
import { kuKeyClient } from '@/packages/api'
import { useAuth } from '@/util/auth/useAuth'

export const useReadClubDetail = (clubId: number) => {
  const isLogin = useAuth().authState ?? false
  const read = useAsyncRead(kuKeyClient.api.ClubApi.clubClubIdGet)
  return useSuspenseQuery({
    queryKey: CLUB_QUERY_KEY.clubDetail(clubId, isLogin),
    queryFn: () => read({ clubId, isLogin }),
  })
}
