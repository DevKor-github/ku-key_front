import * as s from './style.css'

import { useGetClubRecommended } from '@/api/hooks/club'
import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'
import { HorizontalSpacing } from '@/components/ui/Spacing'

const HomeRecommendClub = () => {
  const { data: recommendedClubs } = useGetClubRecommended()
  return (
    <section className={s.ClubWrapper}>
      <ClubSectionTitle title="Recommend Club" icon="like" description="Check the Recommended Club for you" />
      <div className={s.ClubProfileWrapper}>
        {recommendedClubs.map((club, index) => (
          <ClubProfile
            index={index}
            type="recommend"
            key={club.name}
            img={club.imageUrl}
            description={club.summary}
            name={club.name}
            clubDivision={club.category}
          />
        ))}
      </div>
      <HorizontalSpacing size={80} />
    </section>
  )
}

export default HomeRecommendClub
