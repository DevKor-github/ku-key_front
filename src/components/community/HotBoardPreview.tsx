import { css } from '@styled-stytem/css'

import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTag from '@/components/community/PreviewTag'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'
import SectionTitle from '@/components/community/SectionTitle'

const HotBoardPreview = () => {
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
      <PreviewTextWrapper>
        <PreviewTag preview="community" />
        <PostTextPreview variant={{ variant: 'onlyTitle' }} />
      </PreviewTextWrapper>
    </div>
  )
}

export default HotBoardPreview
