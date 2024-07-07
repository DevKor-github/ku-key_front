import { css } from '@styled-stytem/css'

import ClubProfile from '@/components/home/Club/ClubProfile'
import ClubSectionTitle from '@/components/home/Club/ClubSectionTitle'

const RecommendClub = () => {
  return (
    <section className={css({ display: 'flex', flexDir: 'column', px: 'calc((100vw - 1027px)/2)', mt: 15 })}>
      <ClubSectionTitle title="Recommend Club" icon="like" />
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', mb: 20 })}>
        {Array.from({ length: 4 }).map((_, index) => (
          <ClubProfile
            key={index}
            img="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            description="Some Random Club"
            name="RAND"
            clubDivision="Instrumental Arts"
            rank={1}
          />
        ))}
      </div>
    </section>
  )
}

export default RecommendClub