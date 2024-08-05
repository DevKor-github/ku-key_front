import { css } from '@styled-stytem/css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import ReviewBanner from '@/components/courseReview/ReviewBanner'
import ReviewTotalRate from '@/components/courseReview/ReviewTotalRate'
import { FriendPageBtnStyle } from '@/components/timetable/Friend/FriendsList'

const CourseInfoPage = () => {
  const navigate = useNavigate()
  const { courseCode, prof } = useParams()

  const { data } = useGetReviewSummary({ courseCode, professorName: prof })

  return (
    <>
      <ReviewBanner title={'Course Information'} />
      <div className={css({ px: 64, py: 12, display: 'flex', gap: 5, alignItems: 'flex-start' })}>
        <button className={FriendPageBtnStyle({ prev: true })} onClick={() => navigate(-1)}>
          <ArrowLeft />
          PREV
        </button>
        <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 10 })}>
          <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
            <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
              {/* TODO: 아래 라인 강의명으로 대체 */}
              <span className={css({ fontWeight: 600, fontSize: 26, color: 'black.2' })}>{courseCode}</span>
              <span className={css({ fontSize: 18, color: 'darkGray.2' })}>{prof}</span>
            </div>
            <button
              className={css({
                bgColor: 'red.2',
                color: 'white',
                fontWeight: 700,
                fontSize: 12,
                px: 2.5,
                py: 1,
                rounded: 'full',
                cursor: 'pointer',
              })}
            >
              Write your Review
            </button>
          </div>
          <ReviewTotalRate
            totalRate={data?.totalRate}
            reviewCount={data?.reviewCount}
            courseCode={courseCode}
            prof={prof}
          />
        </div>
      </div>
    </>
  )
}

export default CourseInfoPage
