import * as s from './style.css'

import FeedItem from '@/domain/Post/components/FeedItem'
import { useReadCommunityPostsAll } from '@/domain/Post/hooks/useReadCommunityPostsAll'
import Pagination from '@/ui/Pagination'
import { useQueryParams } from '@/util/hooks/useQueryParams'

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

  return (
    <Pagination
      items={posts}
      className={s.Wrapper}
      render={post => <FeedItem {...post} showCommunityBadge />}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default CommunityPostAll
