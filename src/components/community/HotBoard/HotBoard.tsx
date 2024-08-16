import { css } from '@styled-stytem/css'

import { useGetHotPosts } from '@/api/hooks/community'
import BoardPostPreview from '@/components/community/BoardPostPreview'
import SectionTitle from '@/components/community/SectionTitle'
import useIntersect from '@/util/useIntersect'

const HotBoard = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useGetHotPosts()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })
  return (
    <div className={css({ display: 'flex', flexDir: 'column', alignSelf: 'flex-start' })}>
      <SectionTitle title={`View recent Hot posts`} description="Check out our hottest posts right now" />

      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        {data?.map(post => (
          <div key={post.id} ref={fetchNextRef}>
            <BoardPostPreview
              id={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              user={post.user}
              reactionCount={post.reactionCount}
              views={post.views}
              myScrap={post.myScrap}
              commentCount={post.commentCount}
              scrapCount={post.scrapCount}
              thumbnailDir={post.thumbnailDir}
              boardName={post.boardName}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotBoard
