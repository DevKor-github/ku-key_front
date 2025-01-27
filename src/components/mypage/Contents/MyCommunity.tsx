import { css, cva } from '@styled-system/css'
import { useCallback, useMemo } from 'react'

import LikedPost from '@/components/mypage/Contents/Community/LikedPost'
import MyComments from '@/components/mypage/Contents/Community/MyComments'
import MyPost from '@/components/mypage/Contents/Community/MyPost'
import MyScrap from '@/components/mypage/Contents/Community/MyScrap'
import { useSearch } from '@/util/hooks/useSearch'

const ButtonStyle = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: 'lightGray.2',
    h: { base: '44px', mdDown: '24px' },
    cursor: 'pointer',
    rounded: 'full',
    textStyle: 'heading4_M',
    px: { base: 6, mdDown: 2 },
    fontSize: { base: 20, mdDown: 11 },
    fontWeight: 600,
    letterSpacing: '-0.4px',
    color: 'darkGray.1',
    border: '1px solid {colors.lightGray.1}',
    transition: 'all 0.2s',
  },
  variants: {
    selected: {
      true: {
        color: 'white',
        bgColor: 'red.2',
        borderColor: 'red.2',
      },
    },
  },
})

type ViewType = 'myPost' | 'likedPost' | 'myComment' | 'myScrap'
const currentViewConfig: Record<ViewType, React.FC> = {
  myPost: MyPost,
  myScrap: MyScrap,
  likedPost: LikedPost,
  myComment: MyComments,
}

const MyCommunity = () => {
  const { searchParam, handleSetParam } = useSearch()

  const curView = (searchParam.get('view') ?? 'myPost') as ViewType

  const setCurView = useCallback(
    (target: ViewType) => {
      handleSetParam('view', target)
    },
    [handleSetParam],
  )

  const ViewComment = useMemo(() => currentViewConfig[curView], [curView])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: { base: 12, mdDown: 6 },
        smDown: { bgColor: 'white', p: 5 },
      })}
    >
      <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700, smDown: { display: 'none' } })}>
        Community Storage
      </h1>
      <div
        className={css({ display: 'flex', flexDir: 'column', gap: { base: '70px', mdDown: '35px', smDown: '30px' } })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: { base: 3.5, smDown: '6px' },
            flexWrap: 'wrap',
          })}
        >
          <button className={ButtonStyle({ selected: curView === 'myPost' })} onClick={() => setCurView('myPost')}>
            My post
          </button>
          <button className={ButtonStyle({ selected: curView === 'myScrap' })} onClick={() => setCurView('myScrap')}>
            Scrapped post
          </button>
          <button
            className={ButtonStyle({ selected: curView === 'likedPost' })}
            onClick={() => setCurView('likedPost')}
          >
            Liked post
          </button>
          <button
            className={ButtonStyle({ selected: curView === 'myComment' })}
            onClick={() => setCurView('myComment')}
          >
            My comment
          </button>
        </div>
        <ViewComment />
      </div>
    </div>
  )
}

export default MyCommunity
