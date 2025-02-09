import { UserGroupIcon } from '@heroicons/react/24/solid'

import * as s from './style.css'

import Checkmark from '@/assets/icon/Checkmark'
interface Props {
  recruitmentPeriod: string
  regularMeeting: string
}
const ClubSchedule = ({ recruitmentPeriod, regularMeeting }: Props) => {
  return (
    <div className={s.ScheduleWrapper}>
      <div className={s.Schedule}>
        <span className={s.ScheduleIcon}>
          <Checkmark />
        </span>
        <p className={s.ScheduleText}>{recruitmentPeriod}</p>
      </div>
      <div className={s.Schedule}>
        <UserGroupIcon className={s.ScheduleIcon} />
        <p className={s.ScheduleText}>{regularMeeting}</p>
      </div>
    </div>
  )
}
export default ClubSchedule
