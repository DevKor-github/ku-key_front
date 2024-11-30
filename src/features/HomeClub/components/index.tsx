import * as s from './style.css'

import HotClub from '@/components/home/Club/HotClub'
import RecommendClub from '@/components/home/Club/RecommendClub'
import HomeTitle from '@/components/home/HomeTitle'
const HomeClub = () => {
  return (
    <section className={s.Wrapper}>
      <HomeTitle title="Club" navLink="/club" />
      <HotClub />
      <RecommendClub />
    </section>
  )
}

export default HomeClub
