import { css } from '@styled-system/css'

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
      <HomeTitle title="Club" navLink="/club" />
      <HotClub />
      <RecommendClub />
    </section>
  )
}

export default Club
