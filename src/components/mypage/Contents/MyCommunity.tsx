import { css, cva } from '@styled-stytem/css'
import { useState } from 'react'

import LikedPost from '@/components/mypage/Contents/Community/LikedPost'
import MyComments from '@/components/mypage/Contents/Community/MyComments'
import MyPost from '@/components/mypage/Contents/Community/MyPost'
import MyScrap from '@/components/mypage/Contents/Community/MyScrap'

const ButtonStyle = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: 'lightGray.2',
    h: '44px',
    cursor: 'pointer',
    rounded: 'full',
    textStyle: 'heading4_M',
    px: 6,
    fontSize: 20,
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
const MyCommunity = () => {
  const [curView, setCurView] = useState<ViewType>('myPost')

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 12 })}>
      <h1 className={css({ fontSize: 30, fontWeight: 700 })}>Community Storage</h1>
      <div className={css({ display: 'flex', flexDir: 'column', gap: '70px' })}>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 3.5 })}>
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
        {curView === 'myPost' ? (
          <MyPost />
        ) : curView === 'myScrap' ? (
          <MyScrap />
        ) : curView === 'likedPost' ? (
          <LikedPost />
        ) : (
          <MyComments />
        )}
      </div>
    </div>
  )
}

export default MyCommunity
