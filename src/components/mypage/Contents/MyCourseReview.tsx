import { css } from '@styled-system/css'

import { useGetMyReview } from '@/api/hooks/courseReview'
import Review from '@/components/courseReview/Review'

const MyCourseReview = () => {
  const { data } = useGetMyReview()
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 15, mdDown: 5 } })}>
      <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700 })}>Course Review</h1>
      <div className={css({ display: 'flex', flexDir: 'column', gap: '30px' })}>
        {data.map(val => (
          <Review
            // TODO:courseName으로 수정
            key={val.id}
            courseName={val.courseCode}
            text={val.textReview}
            rate={val.rate}
            semester={val.semester}
            year={val.year}
          />
        ))}
      </div>
    </div>
  )
}

export default MyCourseReview
