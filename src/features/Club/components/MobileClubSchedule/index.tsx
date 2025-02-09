import * as s from './style.css'

import Checkmark from '@/assets/icon/Checkmark'
import Handshake from '@/assets/icon/Handshake'
interface Props {
  recruitmentPeriod: string
  regularMeeting: string
}
const MobileClubSchedule = ({ recruitmentPeriod, regularMeeting }: Props) => {
  return (
    <>
      <div className={s.MobileSchedule}>
        <span className={s.MobileScheduleIcon}>
          <Checkmark />
        </span>
        <p className={s.MobileScheduleText}>{recruitmentPeriod}</p>
      </div>
      <div className={s.MobileSchedule}>
        <span className={s.MobileScheduleIcon}>
          <Handshake />
        </span>
        <p className={s.MobileScheduleText}>{regularMeeting}</p>
      </div>
    </>
  )
}
export default MobileClubSchedule
