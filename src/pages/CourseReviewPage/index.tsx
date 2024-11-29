import { css, cx } from '@styled-system/css'
import { useSetAtom } from 'jotai/react'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import ReviewBanner from '@/components/courseReview/ReviewBanner'
import { FriendPageBtnStyle } from '@/components/timetable/Friend/FriendsList'
import { courseSummary } from '@/lib/store/review'

const CourseReviewPage = () => {
  const curPath = useLocation().pathname
  const curPathRoot = curPath.split('/')[2]
  const navigate = useNavigate()

  const { courseCode = '', prof = '' } = useParams()

  const { data } = useGetReviewSummary({ courseCode, professorName: prof })
  const setCourseName = useSetAtom(courseSummary)

  useEffect(() => {
    // 흠... Jotai 말고 useOutletContext로 관리할까..
    setCourseName({ ...data, courseCode, prof })
  }, [data, setCourseName, courseCode, prof])

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
