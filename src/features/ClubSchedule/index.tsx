import { HiUserGroup } from 'react-icons/hi'
import { HiMegaphone } from 'react-icons/hi2'

import * as s from './style.css'

interface Props {
  recruitmentPeriod: string
  regularMeeting: string
}
const ClubSchedule = ({ recruitmentPeriod, regularMeeting }: Props) => {
  return (
    <div className={s.ScheduleWrapper}>
      <div className={s.Schedule}>
        <HiMegaphone className={s.ScheduleIcon} />
        <p className={s.ScheduleText}>{recruitmentPeriod}</p>
      </div>
      <div className={s.Schedule}>
        <HiUserGroup className={s.ScheduleIcon} />
        <p className={s.ScheduleText}>{regularMeeting}</p>
      </div>
    </div>
  )
}
export default ClubSchedule
