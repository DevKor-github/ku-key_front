import { css } from '@styled-system/css'

import { useGetClubRecommended } from '@/api/hooks/club'
import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'

const RecommendClub = () => {
  const { data: recommendedClubs } = useGetClubRecommended()
  return (
    <section className={css({ display: 'flex', flexDir: 'column', px: 'calc((100vw - 1027px)/2)', mt: 15 })}>
      <ClubSectionTitle title="Recommend Club" icon="like" description="Check the Recommended Club for you" />
      <div className={css({ display: 'flex', gap: 5, alignItems: 'flex-start', justifyContent: 'center', mb: 20 })}>
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
    </section>
  )
}

export default RecommendClub
