import * as s from './style.css'

import FeedItem from '@/domain/Post/components/FeedItem'
import MobileFeedItem from '@/domain/Post/components/MobileFeedItem'
import { useReadCommunityPostsAll } from '@/domain/Post/hooks/useReadCommunityPostsAll'
import { PostPreviewWithBoardName } from '@/packages/api/ku-key/models'
import Pagination from '@/ui/Pagination'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'
import { useCallback, useMemo } from 'react'

type SearchParams = {
  keyword?: string
}

const CommunityPostAll = () => {
  const [queryParams] = useQueryParams<SearchParams>()
  const {
    data: posts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useReadCommunityPostsAll({
    keyword: queryParams.keyword,
  })

  if (!posts.length) return <div>No Search Result</div>

  const isMobile = useMediaQueryByName('smDown')

  const Render = useCallback(
    (post: PostPreviewWithBoardName) => {
      if (isMobile) {
        return <MobileFeedItem {...post} showCommunityBadge />
      }
      return <FeedItem {...post} showCommunityBadge />
    },
    [isMobile],
  )
  return (
    <Pagination
      items={posts}
      className={s.Wrapper}
      render={post => <Render {...post} />}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default CommunityPostAll
