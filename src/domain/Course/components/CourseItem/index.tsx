import * as s from './style.css'

import RateTag from '@/domain/Course/components/RateTag'
import SemesterTag from '@/domain/Course/components/SemesterTag'
import { CommonCourseResponseDto } from '@/packages/api/ku-key/models'
import { Typography } from '@/ui/Typography'
import { numberToSemester } from '@/util/timetableUtil'

type Props = Pick<CommonCourseResponseDto, 'courseName' | 'professorName' | 'totalRate' | 'semester' | 'year'>

const CourseItem = ({ courseName, professorName, totalRate, semester, year }: Props) => {
  const semesterText = numberToSemester[Number(semester)]
  return (
    <div className={s.Wrapper}>
      <div className={s.Header}>
        <SemesterTag semester={semesterText} year={year} />
        <div className={s.Rate}>
          <RateTag rate={Number(totalRate)} />
        </div>
      </div>
      <div className={s.Body}>
        <Typography
          typography="heading2SB"
          mobileTypography="miniTag1M"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}
        >
          {courseName}
        </Typography>
        <div className={s.Professor}>
          <Typography typography="body2R" mobileTypography="miniTag2" color="darkGray1">
            Prof.
          </Typography>
          <Typography typography="body1M" mobileTypography="miniTag2">
            {professorName}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
