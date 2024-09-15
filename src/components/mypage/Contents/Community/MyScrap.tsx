import { css } from '@styled-system/css'

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
    <div className={css({ display: 'flex', flexDir: 'column', gap: '30px', mb: 25, w: { base: 610, mdDown: 320 } })}>
      {posts?.map((post, index) => (
        <>
          {index !== 0 && (
            <div
              className={css({
                w: 'full',
                h: 0.25,
                bgColor: 'lightGray.1',
              })}
            />
          )}
          <PostPreview
            key={post.id}
            id={post.id}
            title={post.title}
            boardName={post.boardName}
            user={post.user}
            createdAt={post.createdAt}
            content={post.content}
            thumbnailDir={null}
          />
        </>
      ))}
      <div ref={fetchNextRef} />
    </div>
  )
}
export default MyScrap
