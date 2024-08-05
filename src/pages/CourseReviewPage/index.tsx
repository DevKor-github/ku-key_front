import { css } from '@styled-stytem/css'
import { ArrowLeft } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import ReviewBanner from '@/components/courseReview/ReviewBanner'
import { FriendPageBtnStyle } from '@/components/timetable/Friend/FriendsList'

const CourseReviewPage = () => {
  const curPath = useLocation().pathname
  const curPathRoot = curPath.split('/')[2]
  const navigate = useNavigate()

  return (
    <div>
      <ReviewBanner title={curPathRoot === 'info' ? 'Course Information' : 'Course Review'} />
      <div className={css({ px: 64, py: 12, display: 'flex', gap: 5, alignItems: 'flex-start' })}>
        <button className={FriendPageBtnStyle({ prev: true })} onClick={() => navigate(-1)}>
          <ArrowLeft />
          PREV
        </button>
        <Outlet />
      </div>
    </div>
  )
}

export default CourseReviewPage
