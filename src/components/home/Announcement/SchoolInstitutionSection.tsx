import { css } from '@styled-system/css'

import BroadcastProfile from '@/assets/BroadcastProfile.png'
import ETCProfile from '@/assets/ETCProfile.png'
import InstituteProfile from '@/components/home/Announcement/InsituteProfile'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'

const ProfileContainer = css({
  display: 'flex',
  h: 'auto',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  mdDown: { px: 4 },
})
const SchoolInstitutionSection = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        w: 'full',
        maxW: 1026,
      })}
    >
      <SectionTitle title="Institution" description="Click the link to go to the official page" />
      <div className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch', alignItems: 'flex-start' })}>
        <div
          className={css({
            display: 'flex',
            w: 'full',
            pt: 10,
            pb: 5,
            gap: '14px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          })}
        >
          <div
            className={css({
              display: 'flex',
              pos: 'relative',
              w: 'full',
              maxW: 382,
              p: 4,
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 2.5,
            })}
          >
            <img
              src={BroadcastProfile}
              alt="Broadcast"
              className={css({ display: 'flex', pos: 'absolute', w: '95px' })}
            />
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                ml: '86px',
              })}
            >
              <h1 className={css({ textStyle: 'heading1_L', color: 'black.2' })}>Broadcast</h1>
              <p className={css({ textStyle: 'body1_M', color: 'darkGray.1' })}>Check out the news of KU</p>
            </div>
          </div>
          <div className={ProfileContainer}>
            {BROADCASTS.map(broadcast => (
              <InstituteProfile key={broadcast.name} name={broadcast.name} img={broadcast.img} url={broadcast.url} />
            ))}
          </div>
        </div>
        <div
          className={css({
            display: 'flex',
            w: 'full',
            pt: 10,
            pb: 5,
            gap: '14px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          })}
        >
          <div
            className={css({
              display: 'flex',
              pos: 'relative',
              w: 'full',
              maxW: 382,
              p: 4,
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 2.5,
            })}
          >
            <img src={ETCProfile} alt="ETC" className={css({ display: 'flex', pos: 'absolute', w: '95px' })} />
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                ml: '86px',
              })}
            >
              <h1 className={css({ textStyle: 'heading1_L', color: 'black.2' })}>ETC</h1>
              <p className={css({ textStyle: 'body1_M', color: 'darkGray.1' })}>Check out the other pages of KU</p>
            </div>
          </div>
          <div className={ProfileContainer}>
            {ETC.map(etc => (
              <InstituteProfile key={etc.name} name={etc.name} img={etc.img} url={etc.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolInstitutionSection
