import * as s from './style.css'

import { Typography } from '@/ui/Typography'

type Props = {
  semester: string
}

const SemesterTag = ({ semester }: Props) => {
  return (
    <div className={s.Wrapper}>
      <Typography typography="body1M" color="darkGray1" mobileTypography="miniTag2">
        {semester}
      </Typography>
    </div>
  )
}

export default SemesterTag
