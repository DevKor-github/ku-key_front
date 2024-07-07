import { css } from '@styled-stytem/css'

import HotClub from '@/components/home/Club/HotClub'
import RecommendClub from '@/components/home/Club/RecommendClub'
import HomeTitle from '@/components/home/HomeTitle'

const Club = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <div className={css({ w: 'full', h: 15, bgColor: 'bg.gray' })} />
      <HomeTitle title="Club" navLink="" />
      <HotClub />
      <RecommendClub />
      <div className={css({ w: 'full', h: 30, bgColor: 'bg.gray' })} />
    </div>
  )
}

export default Club
