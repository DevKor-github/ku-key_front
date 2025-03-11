import * as s from './style.css'

import RateTag from '@/domain/Course/components/RateTag'
import SemesterTag from '@/domain/Course/components/SemesterTag'
import { Typography } from '@/ui/Typography'

type Props = {
  title: string
  professor: string
  courseRate: string
  semester: string
  //TODO: 추천 강의 id 받아야 함.
}

const CourseItem = ({ title, professor, courseRate, semester }: Props) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Header}>
        <SemesterTag semester={semester} />
        <div className={s.Rate}>
          🍪
          <RateTag rate={Number(courseRate)} />
        </div>
      </div>
      <div className={s.Body}>
        <Typography
          typography="heading2SB"
          mobileTypography="miniTag1M"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}
        >
          {title}
        </Typography>
        <div className={s.Professor}>
          <Typography typography="body2R" mobileTypography="miniTag2" color="darkGray1">
            Prof.
          </Typography>
          <Typography typography="body1M" mobileTypography="miniTag2">
            {professor}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
