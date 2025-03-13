import * as s from './style.css'

import { getCourseRateBackgroundColor, getCourseRateTextColor } from '@/domain/Course/utils/getCourseRateColor'
import { Typography } from '@/ui/Typography'

type Props = {
  rate: number
}

const RateTag = ({ rate }: Props) => {
  return (
    <div className={s.Wrapper} style={{ backgroundColor: getCourseRateBackgroundColor(rate) }}>
      <Typography typography="heading1SB" mobileTypography="bodySB" style={{ color: getCourseRateTextColor(rate) }}>
        {rate.toFixed(1)}
      </Typography>
    </div>
  )
}

export default RateTag
