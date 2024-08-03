import { css } from '@styled-stytem/css'
import { tag } from '@styled-stytem/recipes'
import { Users } from 'lucide-react'

import PostTextPreview from '@/components/community/PostTextPreview'
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
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          alignSelf: 'stretch',
          w: 399,
        })}
      >
        <div className={css({ display: 'flex', pl: 2.5, alignItems: 'flex-start' })}>
          <div className={tag()}>
            <Users size={16} />
            <p className={css({ fontSize: 12, fontWeight: 700 })}>Community Board</p>
          </div>
        </div>
        <PostTextPreview variant={{ variant: 'onlyTitle' }} />
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          alignSelf: 'stretch',
          w: 399,
        })}
      >
        <div className={css({ display: 'flex', pl: 2.5, alignItems: 'flex-start' })}>
          <div className={tag()}>
            <Users size={16} />
            <p className={css({ fontSize: 12, fontWeight: 700 })}>Community Board</p>
          </div>
        </div>
        <PostTextPreview variant={{ variant: 'onlyTitle' }} />
      </div>
    </div>
  )
}

export default HotBoardPreview
