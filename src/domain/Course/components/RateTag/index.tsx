import * as s from './style.css'

import { getCourseRateBackgroundColor, getCourseRateTextColor } from '@/domain/Course/utils/getCourseRateColor'
import { Typography } from '@/ui/Typography'

type Props = {
  rate: number
}

const RateTag = ({ rate }: Props) => {
  return (
    <div className={s.Wrapper} style={{ backgroundColor: getCourseRateBackgroundColor(rate) }}>
      <Typography variant="desktop" typography="heading1SB" style={{ color: getCourseRateTextColor(rate) }}>
        {rate}
      </Typography>
    </div>
  )
}

export default RateTag
