import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { COMMUNITY_POSTS_QUERY_KEY } from '@/domain/Post/queries'
import { kuKeyClient } from '@/packages/api'
import { PostGetRequestParams } from '@/packages/api/ku-key/api/post-api'

export const useReadCommunityPosts = ({ boardId, take = 10, cursor = undefined, keyword }: PostGetRequestParams) => {
  const read = useAsyncRead(kuKeyClient.api.PostApi.postGet)

  return useSuspenseInfiniteQuery({
    queryKey: COMMUNITY_POSTS_QUERY_KEY.byBoard({ boardId, take, keyword }),
    queryFn: ({ pageParam: cursor }) => read({ boardId, take, keyword, cursor: cursor?.toString() }),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: cursor,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
