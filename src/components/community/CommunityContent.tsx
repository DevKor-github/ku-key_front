import { css } from '@styled-stytem/css'

import CommunitySearch from '@/components/community/CommunitySearch'
import HotBoardPreview from '@/components/community/HotBoardPreview'
import Button from '@/components/ui/button'

const CommunityContent = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 1131,
          justifyContent: 'space-between',
          alignSelf: 'flex-end',
          mb: '50px',
        })}
      >
        <h1 className={css({ fontSize: 36, fontWeight: 700 })}>Community</h1>
        <Button variant="loginColored">Create Post</Button>
      </div>
      <section className={css({ display: 'flex', w: 1131, alignSelf: 'flex-end', gap: 31 })}>
        <CommunitySearch />
        <HotBoardPreview />
      </section>
    </section>
  )
}

export default CommunityContent
