import { css } from '@styled-stytem/css'

import { useGetMyScrap } from '@/api/hooks/community'
import PostPreview from '@/components/community/PostPreview'
import useIntersect from '@/util/useIntersect'

const MyScrap = () => {
  const { data: posts, fetchNextPage, hasNextPage, isFetching } = useGetMyScrap()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '50px', mb: 25, w: 610 })}>
      {posts?.map(post => (
        <PostPreview
          key={post.id}
          id={post.id}
          title={post.title}
          boardName={post.boardName}
          user={post.user}
          createdAt={post.createdAt}
          content={post.content}
          thumbnailDir={post.thumbnailDir}
        />
      ))}
      <div ref={fetchNextRef} />
    </div>
  )
}
export default MyScrap