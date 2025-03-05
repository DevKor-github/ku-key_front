import { match } from 'ts-pattern'

import * as s from './style.css'

import FeedItem from '@/domain/Post/components/FeedItem'
import { useReadCommunityPosts } from '@/domain/Post/hooks/useReadCommunityPostsByBoard'
import { BoardQueryParam } from '@/features/Community/CommunitySelectTab'
import Pagination from '@/ui/Pagination'
import { useQueryParams } from '@/util/hooks/useQueryParams'

type BoardSearchQueryParam = {
  keyword?: string
} & BoardQueryParam

const CommunityPostByBoard = () => {
  const [queryParam] = useQueryParams<BoardSearchQueryParam>()
  const {
    data: posts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useReadCommunityPosts({
    boardId: queryParam.boardId,
    keyword: queryParam.keyword,
  })

  const boardName = match(queryParam.board)
    .with('CommunityBoard', () => 'community')
    .with('QuestionBoard', () => 'question')
    .with('InformationBoard', () => 'information')
    .otherwise(() => 'community')

  if (!posts.length) return <div>No Search Result</div>

  return (
    <Pagination
      items={posts}
      className={s.Wrapper}
      render={post => <FeedItem {...post} boardName={boardName} />}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default CommunityPostByBoard
