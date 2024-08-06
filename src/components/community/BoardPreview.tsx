import { css } from '@styled-stytem/css'

import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTag from '@/components/community/PreviewTag'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'
import SectionTitle from '@/components/community/SectionTitle'
import { BoardType, PostPreviewProps } from '@/types/community'

interface BoardPreviewProps {
  previewPosts: PostPreviewProps[]
  title: string
  description: string
  link: string
}
const BoardPreview = ({ previewPosts, title, description, link }: BoardPreviewProps) => {
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
      <SectionTitle title={title} description={description} link={link} />
      {previewPosts.map(post => (
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

export default BoardPreview
