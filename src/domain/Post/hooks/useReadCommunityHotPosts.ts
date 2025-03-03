import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { COMMUNITY_POSTS_QUERY_KEY } from '@/domain/Post/queries'
import { kuKeyClient } from '@/packages/api'
import { PostHotGetRequestParams } from '@/packages/api/ku-key/api/post-api'

export const useReadCommunityHotPosts = ({ take = 10, cursor = undefined }: PostHotGetRequestParams) => {
  const read = useAsyncRead(kuKeyClient.api.PostApi.postHotGet)
  return useSuspenseInfiniteQuery({
    queryKey: COMMUNITY_POSTS_QUERY_KEY.hot({ take, cursor }),
    queryFn: ({ pageParam: cursor }) => read({ take, cursor: cursor?.toString() }),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: cursor,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
