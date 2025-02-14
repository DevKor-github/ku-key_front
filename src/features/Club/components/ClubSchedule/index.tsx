import { MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/solid'

import * as s from './style.css'

interface Props {
  recruitmentPeriod: string
  regularMeeting: string
}
const ClubSchedule = ({ recruitmentPeriod, regularMeeting }: Props) => {
  return (
    <div className={s.ScheduleWrapper}>
      <div className={s.Schedule}>
        <MegaphoneIcon className={s.ScheduleIcon} />
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
