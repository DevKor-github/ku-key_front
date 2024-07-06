import { css, cx } from '@styled-stytem/css'

import InsituteProfile from '@/components/home/Announcement/InsituteProfile'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'

const InsitutionTitle = css({
  display: 'inline-flex',
  px: 2,
  py: 4,
  justifyContent: 'center',
  alignItems: 'center',
  color: 'red.1',
  fontSize: 20,
  fontWeight: 700,
  mt: '10px',
})

const ProfileContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  w: 480,
  px: 2,
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  columnGap: 4,
  maxH: 222,
  mb: 2.5,
})
const SchoolInstitutionSection = () => {
  return (
    <section className={css({ display: 'flex', w: 480, flexDir: 'column', alignItems: 'flex-start' })}>
      <SectionTitle title="School Institution" />
      <h3 className={InsitutionTitle}>Broadcast</h3>
      <div className={ProfileContainer}>
        {BROADCASTS.map(broadcast => (
          <InsituteProfile name={broadcast.name} img={broadcast.img} url={broadcast.url} />
        ))}
      </div>
      <h3 className={InsitutionTitle}>ETC</h3>
      <div className={cx(ProfileContainer, css({ maxH: 118 }))}>
        {ETC.map(etc => (
          <InsituteProfile name={etc.name} img={etc.img} url={etc.url} />
        ))}
      </div>
    </section>
  )
}

export default SchoolInstitutionSection
