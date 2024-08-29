import { css } from '@styled-stytem/css'

import { useGetHotClub } from '@/api/hooks/institution'
import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'
const HotClub = () => {
  const { data: hotClubs } = useGetHotClub()
  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
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

export default HotClub
