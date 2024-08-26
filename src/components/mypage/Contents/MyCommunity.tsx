import { css, cva } from '@styled-stytem/css'
import { useState } from 'react'

import MyPost from '@/components/mypage/Contents/Community/MyPost'

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

type ViewType = 'myPost' | 'likedPost' | 'myComment' | 'likedComment'
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
          <button
            className={ButtonStyle({ selected: curView === 'likedComment' })}
            onClick={() => setCurView('likedComment')}
          >
            Liked comment
          </button>
        </div>
        {curView === 'myPost' && <MyPost />}
      </div>
    </div>
  )
}

export default MyCommunity
