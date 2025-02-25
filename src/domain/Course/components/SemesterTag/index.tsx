import * as s from './style.css'

import { Typography } from '@/ui/Typography'

type Props = {
  semester: string
}

const SemesterTag = ({ semester }: Props) => {
  return (
    <div className={s.Wrapper}>
      <Typography variant="desktop" typography="body1M" color="darkGray1">
        {semester}
      </Typography>
    </div>
  )
}

export default SemesterTag
