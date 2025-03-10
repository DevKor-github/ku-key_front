import * as s from './style.css'

import { Typography } from '@/ui/Typography'

type Props = {
  semester: string
  year: string
}

const SemesterTag = ({ semester, year }: Props) => {
  return (
    <div className={s.Wrapper}>
      <Typography typography="body1M" color="darkGray1" mobileTypography="miniTag2">
        {`${year} - ${semester}`}
      </Typography>
    </div>
  )
}

export default SemesterTag
