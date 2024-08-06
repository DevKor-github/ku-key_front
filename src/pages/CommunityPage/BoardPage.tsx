import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { useParams } from 'react-router-dom'

import BoardBanner from '@/components/community/BoardBanner'
import CommunitySearch from '@/components/community/CommunitySearch'
import HotBoardPreview from '@/components/community/HotBoardPreview'
const BoardPage = () => {
  const { boardName } = useParams()

  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)}`
  return (
    <main className={css({ display: 'flex', flexDir: 'column' })}>
      <BoardBanner boardName={formattedBoardName} />
      <section
        className={cx(
          globalLayout(),
          css({ pt: '50px', alignSelf: 'center', gap: 31, border: ' 1.5px solid {colors.lightGray.1}' }),
        )}
      >
        <CommunitySearch />
        <HotBoardPreview />
      </section>
    </main>
  )
}

export default BoardPage
