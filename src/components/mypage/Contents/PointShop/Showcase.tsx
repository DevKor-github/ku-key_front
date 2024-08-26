import { css } from '@styled-stytem/css'

import CharacterTicket from '@/components/mypage/Contents/PointShop/CharacterTicket'
import CourseReviewTicket from '@/components/mypage/Contents/PointShop/CourseReviewTicket'

const HeadingStyle = css({
  fontSize: 26,
  fontWeight: 600,
})
const ShowCaseStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

interface ShowcaseProps {
  myLevel: number
}
const Showcase = ({ myLevel }: ShowcaseProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Course review reading ticket</h2>
        <div className={ShowCaseStyle}>
          <CourseReviewTicket days={3} />
          <CourseReviewTicket days={7} />
          <CourseReviewTicket days={30} />
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Decorating characters</h2>
        <div className={ShowCaseStyle}>
          <CharacterTicket level={myLevel} />
          <CharacterTicket />
        </div>
      </div>
    </div>
  )
}

export default Showcase
