import { css } from '@styled-system/css'

import MainCommunityContent from '@/components/community/CommunityContent'
import CommunitySectionCard from '@/components/community/CommunitySectionCard'

const MainCommunityPage = () => {
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
        <MainCommunityContent />
      </section>
    </main>
  )
}

export default MainCommunityPage
