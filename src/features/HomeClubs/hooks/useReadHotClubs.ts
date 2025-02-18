import { useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { HOME_QUERY_KEYS } from '@/features/HomeClubs/queries'
import { kuKeyClient } from '@/packages/api'

export const useQueryHotClubs = () => {
  const read = useAsyncRead(kuKeyClient.api.ClubApi.clubHotGet)
  return {
    queryKey: HOME_QUERY_KEYS.hotClubs(),
    queryFn: () => read(),
  }
}

export const useReadHotClubs = () => {
  const query = useQueryHotClubs()
  return useSuspenseQuery(query)
}
