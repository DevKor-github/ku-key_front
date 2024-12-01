import { css, cx } from '@styled-system/css'
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
      <div
        className={css({
          px: { base: 60, lgDown: 26, mdDown: 5 },
          py: { base: 12, smDown: 5 },
          display: 'flex',
          gap: 5,
          alignItems: { base: 'flex-start', mdDown: 'stretch' },
          flexDir: { base: 'row', mdDown: 'column' },
        })}
      >
        <button
          className={cx(FriendPageBtnStyle({ prev: true }), css({ flexShrink: 0, mdDown: { w: 47 } }))}
          onClick={() => {
            if (curPathRoot === 'info') {
              navigate('/timetable')
            } else {
              navigate(-1)
            }
          }}
        >
          <ArrowLeft />
          PREV
        </button>
        <Outlet />
      </div>
    </div>
  )
}

export default CourseReviewPage
