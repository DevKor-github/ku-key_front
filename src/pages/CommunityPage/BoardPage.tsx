import { css, cx } from '@styled-system/css'
import { globalLayout } from '@styled-system/recipes'
import { useParams } from 'react-router-dom'

import BoardBanner from '@/components/community/Boards/BoardBanner'
import BoardSearch from '@/components/community/Boards/BoardSearch'
import HotBoardPreview from '@/components/community/HotBoard/HotBoardPreview'
import RecentPreview from '@/components/community/RecentPreview'

const boardDescriptionConfig: Record<string, string> = {
  community: 'Connect and share your stories with your friends!',
  question: 'Looking for answers or insights? Ask, share, and explore ideas!',
  information: 'Get the latest updates and stay informed.',
}
const BoardPage = () => {
  const { boardName } = useParams()

  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)}`
  return (
    <main className={css({ display: 'flex', flexDir: 'column', bgColor: 'bg.gray' })}>
      <BoardBanner boardName={formattedBoardName} boardDescription={boardDescriptionConfig[boardName ?? 'community']} />
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
        <div
          className={css({ display: 'flex', flexDir: 'column', alignSelf: 'flex-start', mdDown: { display: 'none' } })}
        >
          <RecentPreview />
          <HotBoardPreview />
        </div>
      </section>
    </main>
  )
}

export default BoardPage
