import { css } from '@styled-stytem/css'

import CommunitySectionCard from '@/components/community/CommunitySectionCard'

const CommunityPage = () => {
  return (
    <div className={css({ display: 'flex' })}>
      <div
        className={css({
          display: 'flex',
          mt: '50px',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
          w: 'full',
          mb: 30,
        })}
      >
        <CommunitySectionCard card="community" />
        <CommunitySectionCard card="question" />
        <CommunitySectionCard card="information" />
      </div>
    </div>
  )
}

export default CommunityPage
