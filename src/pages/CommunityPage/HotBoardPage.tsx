import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'

import BackgroundImage from '@/assets/CommunityBG.jpg'
import HotBoard from '@/components/community/HotBoard'
// import HotBoardHorizontalPreview from '@/components/community/HotBoard/HotBoardHorizontalPreview'
import RecentPreview from '@/components/community/RecentPreview'

const HotBoardPage = () => {
  return (
    <main className={css({ display: 'flex', flexDir: 'column', bgColor: 'bg.gray' })}>
      <section
        className={css({
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          bgColor: 'bg.gray',
          pb: '50px',
          overflow: 'hidden',
        })}
      >
        <div
          className={cx(
            globalLayout(),
            css({
              h: 400,
              mt: '50px',
              mb: '50px',
            }),
          )}
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <title>Hot Board</title>
          <div
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              flexDir: 'column',
              gap: 5,
              w: 1131,
            })}
          >
            <h1 className={css({ fontSize: 80, fontWeight: 700, color: 'white' })}>Hot Board</h1>
            <p className={css({ fontSize: 20, fontWeight: 500, letterSpacing: -0.4, color: 'lightGray.1' })}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        {/* <HotBoardHorizontalPreview /> */}
      </section>
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
        <HotBoard />
        <div
          className={css({ display: 'flex', flexDir: 'column', alignSelf: 'flex-start', mdDown: { display: 'none' } })}
        >
          <RecentPreview />
        </div>
      </section>
    </main>
  )
}

export default HotBoardPage
