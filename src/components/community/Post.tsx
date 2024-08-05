import { css } from '@styled-stytem/css'

import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTag from '@/components/community/PreviewTag'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'

interface PostProps {
  img?: string
  description: string
}
const PostPreview = ({ img, description }: PostProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
      <PreviewTextWrapper>
        <PreviewTag preview="community" />
        <PostTextPreview variant={{ variant: 'default' }} description={description} />
      </PreviewTextWrapper>
      {img && <img src={img} alt="Post" className={css({ w: 608, h: 304, rounded: 10 })} />}
    </div>
  )
}

export default PostPreview
