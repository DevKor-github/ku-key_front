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
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        border: '1px solid',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <SectionTitle title="Institution" description="Click the link to go to the official page" />
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
        <div className={css({ display: 'flex', py: 5, gap: '34px' })}>
          <div className={css({ display: 'flex', py: 4, px: 5, gap: 4 })}>
            <h1>방송국</h1>
          </div>
          <div className={ProfileContainer}>
            {BROADCASTS.map(broadcast => (
              <InsituteProfile key={broadcast.name} name={broadcast.name} img={broadcast.img} url={broadcast.url} />
            ))}
          </div>
        </div>
        <div className={css({ display: 'flex', py: 5 })}>
          <div className={ProfileContainer}>
            {ETC.map(etc => (
              <InsituteProfile key={etc.name} name={etc.name} img={etc.img} url={etc.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolInstitutionSection
