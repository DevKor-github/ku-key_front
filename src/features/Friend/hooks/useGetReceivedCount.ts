import { useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { FRIEND_QUERY_KEY } from '@/features/Friend/queries'
import { kuKeyClient } from '@/packages/api'

export const useGetReceivedCount = () => {
  const read = useAsyncRead(kuKeyClient.api.FriendshipApi.friendshipReceivedCountGet)
  return useSuspenseQuery({
    queryKey: FRIEND_QUERY_KEY.receivedCount(),
    queryFn: () => read(),
  })
}
