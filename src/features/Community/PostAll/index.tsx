import * as s from './style.css'

import PostPreview from '@/components/community/PostPreview'
import { useReadCommunityPostsAll } from '@/domain/Post/useReadCommunityPostsAll'
import Pagination from '@/ui/Pagination'

const CommunityPostAll = () => {
  const { data: posts, hasNextPage, isFetchingNextPage, fetchNextPage } = useReadCommunityPostsAll({})
  return (
    <Pagination
      items={posts}
      className={s.Wrapper}
      render={post => (
        <PostPreview
          id={post.id}
          title={post.title}
          boardName={post.boardName}
          user={post.user}
          createdAt={new Date(post.createdAt)}
          content={post.content}
          thumbnailDir={post.thumbnailDir}
        />
      )}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default CommunityPostAll
