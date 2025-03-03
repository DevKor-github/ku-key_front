import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { COMMUNITY_POSTS_QUERY_KEY } from '@/domain/Post/queries'
import { kuKeyClient } from '@/packages/api'
import { PostAllGetRequestParams } from '@/packages/api/ku-key/api/post-api'

export const useReadCommunityPostsAll = ({ take = 10, cursor = undefined, keyword }: PostAllGetRequestParams) => {
  const read = useAsyncRead(kuKeyClient.api.PostApi.postAllGet)

  return useSuspenseInfiniteQuery({
    queryKey: COMMUNITY_POSTS_QUERY_KEY.all({ keyword, take }),
    queryFn: ({ pageParam: cursor }) => read({ keyword, take, cursor: cursor?.toString() }),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: cursor,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
