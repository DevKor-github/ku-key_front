import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

import CookiesRate from '@/components/courseReview/CookiesRate'

interface ReviewProps {
  courseName: string
  year: string
  semester: string
  rate: number
  text: string
}
const Review = ({ courseName, year, semester, rate, text }: ReviewProps) => {
  return (
    <div
      className={cx(
        shadow(),
        css({ rounded: 10, display: 'flex', flexDir: 'column', gap: 5, p: 5, pb: 10, bgColor: 'white' }),
      )}
    >
      <div className={css({ color: 'black.2', fontSize: 26, fontWeight: 600 })}>{courseName}</div>
      <div className={css({ fontSize: 14, fontWeight: 700, color: 'lightGray.1' })}>
        {year} {semester} semester
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
