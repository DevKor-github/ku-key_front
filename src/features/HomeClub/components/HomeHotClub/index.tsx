import { css } from '@styled-system/css'

import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'
import { useReadHotClubs } from '@/features/HomeClub/hooks/useReadHotClubs'

const HomeHotClub = () => {
  const { data: hotClubs } = useReadHotClubs()
  return (
    <section className={css({ display: 'flex', flexDir: 'column', smDown: { w: 'full' } })}>
      <ClubSectionTitle title="HOT Club" icon="flame" description="Check the most popular clubs in the past week" />
      <div
        className={css({
          display: 'flex',
          gap: 5,
          alignItems: 'flex-start',
          justifyContent: 'center',
        })}
      >
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
