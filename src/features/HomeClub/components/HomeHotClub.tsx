import * as s from './style.css'

import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'
import { useReadHotClubs } from '@/features/HomeClub/hooks/useReadHotClubs'

const HomeHotClub = () => {
  const { data: hotClubs } = useReadHotClubs()
  return (
    <section className={s.ClubWrapper}>
      <ClubSectionTitle title="HOT Club" icon="flame" description="Check the most popular clubs in the past week" />
      <div className={s.ClubProfileWrapper}>
        {hotClubs.map((club, index) => (
          <ClubProfile
            index={index}
            type="hot"
            key={club.name}
            img={club.imageUrl}
            description={club.summary}
            name={club.name}
            clubDivision={club.category}
          />
        ))}
      </div>
    </section>
  )
}

export default HomeHotClub
