import * as s from './style.css'

import { Typography } from '@/ui/Typography'

const NullTable = () => {
  return (
    <div className={s.Wrapper}>
      <Typography typography="heading2SB" mobileTypography="headingSB" color="darkGray1">
        Timetable hasn't been created yet!
      </Typography>
    </div>
  )
}

export default NullTable
