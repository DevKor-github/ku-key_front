import { css } from '@styled-system/css'

import * as s from './style.css'

import BroadcastProfile from '@/assets/BroadcastProfile.png'
import ETCProfile from '@/assets/ETCProfile.png'
import InstituteProfile from '@/components/home/Announcement/InsituteProfile'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'

const HomeInstitution = () => {
  return (
    <section className={s.Wrapper}>
      <SectionTitle title="Institution" description="Click the link to go to the official page" />
      <div className={s.InstitutionContainer}>
        <div className={s.Institution}>
          <div className={s.TitleWrapper}>
            <img src={BroadcastProfile} alt="Broadcast" className={s.InstituteIcon} />
            <div className={s.Title}>
              <h1 className={css({ textStyle: { base: 'heading1_L', smDown: 'body1_L' }, color: 'black.2' })}>
                Broadcast
              </h1>
              <p className={css({ textStyle: { base: 'body1_M', smDown: 'body2_S' }, color: 'darkGray.1' })}>
                Check out the news of KU
              </p>
            </div>
          </div>
          <div className={s.ProfileWrapper}>
            {BROADCASTS.map(broadcast => (
              <InstituteProfile key={broadcast.name} name={broadcast.name} img={broadcast.img} url={broadcast.url} />
            ))}
          </div>
        </div>
        <div className={s.Institution}>
          <div className={s.TitleWrapper}>
            <img src={ETCProfile} alt="ETC" className={s.InstituteIcon} />
            <div className={s.Title}>
              <h1 className={css({ textStyle: { base: 'heading1_L', smDown: 'body1_L' }, color: 'black.2' })}>ETC</h1>
              <p className={css({ textStyle: { base: 'body1_M', smDown: 'body2_S' }, color: 'darkGray.1' })}>
                Check out the other pages of KU
              </p>
            </div>
          </div>
          <div className={s.ProfileWrapper}>
            {ETC.map(etc => (
              <InstituteProfile key={etc.name} name={etc.name} img={etc.img} url={etc.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInstitution
