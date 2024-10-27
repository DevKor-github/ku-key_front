import { css } from '@styled-system/css'
import { Fragment } from 'react/jsx-runtime'

import { useGetMyReactPost } from '@/api/hooks/community'
import PostPreview from '@/components/community/PostPreview'
import useIntersect from '@/util/hooks/useIntersect'

const LikedPost = () => {
  const { data: posts, fetchNextPage, hasNextPage, isFetching } = useGetMyReactPost()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '30px',
        mb: 25,
        w: { base: 610, mdDown: 320, smDown: 'full' },
      })}
    >
      {posts?.map((post, index) => (
        <Fragment key={post.id}>
          {index !== 0 && (
            <div
              className={css({
                w: 'full',
                h: 0.25,
                bgColor: 'lightGray.1',
                smDown: {
                  display: 'none',
                },
              })}
            />
          )}
          <PostPreview
            id={post.id}
            title={post.title}
            boardName={post.boardName}
            user={post.user}
            createdAt={post.createdAt}
            content={post.content}
            thumbnailDir={null}
          />
        </Fragment>
      ))}
      <div ref={fetchNextRef} />
    </div>
  )
}
export default LikedPost
