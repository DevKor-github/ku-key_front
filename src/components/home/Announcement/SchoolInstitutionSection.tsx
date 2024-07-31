import { css, cx } from '@styled-stytem/css'

import InsituteProfile from '@/components/home/Announcement/InsituteProfile'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'

const ProfileContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  w: 377,
  h: 'auto',
  px: 1.5,
  py: 1.5,
  alignItems: 'center',
  alignContent: 'center',
  columnGap: 10,
  rowGap: 3.5,
})
const SchoolInstitutionSection = () => {
  return (
    <section className={css({ display: 'flex', w: 480, flexDir: 'column', alignItems: 'flex-start' })}>
      <SectionTitle title="Institution" description="Click the link to go to the official page" />
      <div className={css({ display: 'flex', flexDir: 'column', gap: 15 })}>
        <div className={ProfileContainer}>
          {BROADCASTS.map(broadcast => (
            <InsituteProfile key={broadcast.name} name={broadcast.name} img={broadcast.img} url={broadcast.url} />
          ))}
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
