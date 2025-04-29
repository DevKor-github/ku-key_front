import * as s from './style.css'

import NoTimetableImage from '@/assets/no-search-result.png'
import { Typography } from '@/ui/Typography'

const NullTable = () => {
  return (
    <div className={s.Wrapper}>
      <img src={NoTimetableImage} className={s.Image} alt="Timetable hasn't been created yet!" />
      <Typography typography="heading2SB" mobileTypography="headingSB" color="darkGray1">
        Timetable hasn't been created yet!
      </Typography>
    </div>
  )
}

export default NullTable
