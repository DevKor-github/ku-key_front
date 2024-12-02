import * as s from './style.css'

import HomeTitle from '@/components/home/HomeTitle'
import { HorizontalSpacing } from '@/components/ui/Spacing'
import HomeHotClub from '@/features/HomeClub/components/HomeHotClub'
import HomeRecommendClub from '@/features/HomeClub/components/HomeRecommendClub'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const HomeClub = () => {
  const isMobile = useMediaQueryByName('smDown')
  return (
    <section className={s.Wrapper}>
      <HomeTitle title="Club" navLink="/club" />
      <HomeHotClub />
      <HorizontalSpacing size={isMobile ? 20 : 60} />
      <HomeRecommendClub />
    </section>
  )
}

export default HomeClub
