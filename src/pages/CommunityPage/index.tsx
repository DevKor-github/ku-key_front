import { css } from '@styled-stytem/css'

import CommunityContent from '@/components/community/CommunityContent'
import CommunitySectionCard from '@/components/community/CommunitySectionCard'

const CommunityPage = () => {
  return (
    <main className={css({ display: 'flex', flexDir: 'column' })}>
      <section
        className={css({
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        })}
      >
        <div
          className={css({
            display: 'flex',
            mt: '50px',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            mb: 30,
          })}
        >
          <CommunitySectionCard card="community" />
          <CommunitySectionCard card="question" />
          <CommunitySectionCard card="information" />
        </div>
        <CommunityContent />
      </section>
    </main>
  )
}

export default CommunityPage
