import { HiCheckCircle, HiClock, HiLocationMarker } from 'react-icons/hi'

import * as s from './style.css'

import { vars } from '@/theme/theme.css'
import { Typography } from '@/ui/Typography'

type Props = {
  title: string
  professor: string
  location: string
  startTime: Date
  endTime: Date
}

const ScheduleItem = ({ title, professor, location, startTime, endTime }: Props) => {
  const startTimeText = startTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  const endTimeText = endTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  const currentTime = new Date()

  // 진행률 계산 (0-100%)
  const percentage = Math.min(
    Math.max(((currentTime.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * 100, 0),
    100,
  )

  return (
    <div className={s.ItemWrapper}>
      <div className={s.CheckWrapper}>
        <HiCheckCircle className={s.IndicatorIcon} color={percentage === 0 ? vars.color.lightGray1 : vars.color.red3} />
        <div className={s.Line}>
          <div
            className={s.LineInner}
            style={{ height: `${percentage}%`, borderRadius: percentage === 100 ? '4px' : '4px 4px 0px 0px' }}
          />
          <div
            className={s.LineInnerGradient}
            style={{ display: percentage === 100 || percentage === 0 ? 'none' : 'flex' }}
          />
        </div>
      </div>
      <div className={s.Wrapper}>
        <div className={s.Header}>
          <Typography typography="heading1M" mobileTypography="bodyM">
            {title}
          </Typography>
          <div className={s.Professor}>
            <Typography typography="heading2M" color="darkGray1" mobileTypography="miniTag1R">
              Prof.
            </Typography>
            <Typography typography="heading2M" color="black" mobileTypography="miniTag1R">
              {professor}
            </Typography>
          </div>
        </div>
        <div className={s.Description}>
          <div className={s.Location}>
            <HiLocationMarker className={s.Icon} color={vars.color.red3} />
            <Typography typography="heading2R" color="darkGray1" mobileTypography="miniTag1R">
              {location}
            </Typography>
          </div>
          <div className={s.Location}>
            <HiClock className={s.Icon} color={vars.color.red3} />
            <div className={s.Location}>
              <Typography typography="heading2R" color="darkGray1" mobileTypography="miniTag1R">
                {startTimeText}
              </Typography>
              <Typography typography="heading2R" color="darkGray1" mobileTypography="miniTag1R">
                -
              </Typography>
              <Typography typography="heading2R" color="darkGray1" mobileTypography="miniTag1R">
                {endTimeText}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleItem
