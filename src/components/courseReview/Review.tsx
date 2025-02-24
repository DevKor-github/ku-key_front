import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'

import CookiesRate from '@/components/courseReview/CookiesRate'
import { SemesterType } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

interface ReviewProps {
  courseName: string
  year: string
  semester: SemesterType
  rate: number
  text: string
}
const Review = ({ courseName, year, semester, rate, text }: ReviewProps) => {
  return (
    <div
      className={cx(
        shadow(),
        css({
          rounded: 10,
          display: 'flex',
          flexDir: 'column',
          gap: { base: 5, mdDown: 2.5 },
          p: 5,
          pb: { base: 10, mdDown: 5 },
          bgColor: 'white',
        }),
      )}
    >
      <div className={css({ color: 'black.2', fontSize: { base: 26, mdDown: 16 }, fontWeight: 600 })}>{courseName}</div>
      <div className={css({ fontSize: 14, fontWeight: 700, color: 'lightGray.1' })}>
        {year} {numberToSemester[semester]} semester
      </div>
      <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
        <span className={css({ fontSize: 18 })}>{rate.toFixed(1)}</span>
        <CookiesRate rate={rate} size={18} gap={4} />
      </div>
      <div
        className={css({
          color: 'darkGray.1',
          fontSize: 14,
          wordBreak: 'keep-all',
          overflowWrap: 'anywhere',
        })}
      >
        {text}
      </div>
    </div>
  )
}

export default Review
