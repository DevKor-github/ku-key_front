import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { useParams } from 'react-router-dom'

import BoardBanner from '@/components/community/BoardBanner'
import BoardSearch from '@/components/community/BoardSearch'
import HotBoardPreview from '@/components/community/HotBoard/HotBoardPreview'
import RecentPreview from '@/components/community/RecentPreview'
const BoardPage = () => {
  const { boardName } = useParams()

  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)}`
  return (
    <main className={css({ display: 'flex', flexDir: 'column', bgColor: 'bg.gray' })}>
      <BoardBanner boardName={formattedBoardName} />
      <section
        className={cx(
          globalLayout(),
          css({
            pt: '50px',
            alignSelf: 'center',
            gap: 31,
            border: ' 1.5px solid {colors.lightGray.2}',
            mb: 30,
            bgColor: 'white',
          }),
        )}
      >
        <BoardSearch />
        <div className={css({ display: 'flex', flexDir: 'column', alignSelf: 'flex-start' })}>
          <RecentPreview />
          <HotBoardPreview />
        </div>
      </section>
    </main>
  )
}

export default BoardPage
