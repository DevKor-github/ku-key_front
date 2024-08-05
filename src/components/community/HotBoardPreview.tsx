import { css } from '@styled-stytem/css'

import { useGetHotPosts } from '@/api/hooks/community'
import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTag from '@/components/community/PreviewTag'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'
import SectionTitle from '@/components/community/SectionTitle'
import { BoardType } from '@/types/community'

const HotBoardPreview = () => {
  const { data: hotPosts } = useGetHotPosts()
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: 5,
        w: 399,
      })}
    >
      <SectionTitle title="Hot Board" description="Check out most popular posts" link="/community/hotboard" />
      {hotPosts.map(post => (
        <PreviewTextWrapper key={post.id}>
          <PreviewTag boardName={post.boardName as BoardType} />
          <PostTextPreview
            title={post.title}
            createdAt={post.createdAt}
            username={post.username}
            variant={{ variant: 'onlyTitle' }}
          />
        </PreviewTextWrapper>
      ))}
    </div>
  )
}

export default HotBoardPreview
