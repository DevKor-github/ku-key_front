import * as s from './style.css'

import RecommendClub from '@/components/home/Club/RecommendClub'
import HomeTitle from '@/components/home/HomeTitle'
import HomeHotClub from '@/features/HomeClub/components/HomeHotClub'

const HomeClub = () => {
  return (
    <section className={s.Wrapper}>
      <HomeTitle title="Club" navLink="/club" />
      <HomeHotClub />
      <RecommendClub />
    </section>
  )
}

export default HomeClub
