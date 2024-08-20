import { css } from '@styled-stytem/css'

import HotClub from '@/components/home/Club/HotClub'
import RecommendClub from '@/components/home/Club/RecommendClub'
import HomeTitle from '@/components/home/HomeTitle'

const Club = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        bgColor: 'bg.gray',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <HomeTitle title="Club" navLink="" />
      <HotClub />
      <RecommendClub />
      {/* <div className={css({ w: 'full', h: 30, bgColor: 'bg.gray' })} /> */}
    </section>
  )
}

export default Club
