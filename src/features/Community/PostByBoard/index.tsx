import * as s from './style.css'

import BoardPostPreview from '@/components/community/Boards/BoardPostPreview'
import { useReadCommunityPosts } from '@/domain/Post/useReadCommunityPostsByBoard'
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
  return (
    <Pagination
      items={posts}
      className={s.Wrapper}
      render={post => (
        <BoardPostPreview
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          createdAt={new Date(post.createdAt)}
          user={post.user}
          reactionCount={post.reactionCount}
          views={post.views}
          myScrap={post.myScrap}
          commentCount={post.commentCount}
          scrapCount={post.scrapCount}
          thumbnailDir={post.thumbnailDir}
          boardName={'community'}
        />
      )}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default CommunityPostByBoard
