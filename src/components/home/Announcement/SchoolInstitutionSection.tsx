import { css } from '@styled-stytem/css'

import InsituteProfile from '@/components/home/Announcement/InsituteProfile'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'

const ProfileContainer = css({
  display: 'flex',
  h: 'auto',
  px: 1.5,
  alignItems: 'baseline',
  columnGap: '30px',
})
const SchoolInstitutionSection = () => {
  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
      <SectionTitle title="Institution" description="Click the link to go to the official page" />
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, w: 'full' })}>
        <div className={css({ display: 'flex', w: 'full', bg: 'white', py: 5 })}>
          <div className={ProfileContainer}>
            {BROADCASTS.map(broadcast => (
              <InsituteProfile key={broadcast.name} name={broadcast.name} img={broadcast.img} url={broadcast.url} />
            ))}
          </div>
        </div>
        <div className={ProfileContainer}>
          {ETC.map(etc => (
            <InsituteProfile key={etc.name} name={etc.name} img={etc.img} url={etc.url} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolInstitutionSection
