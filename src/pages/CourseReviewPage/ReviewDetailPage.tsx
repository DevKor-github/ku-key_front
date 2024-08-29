import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai/react'
import { useLocation } from 'react-router-dom'

import CookiesRate from '@/components/courseReview/CookiesRate'
import InfoDetail from '@/components/courseReview/InfoDetail'
import { courseSummary } from '@/lib/store/review'
import { ReviewType } from '@/types/review'
import useScrollUp from '@/util/useScrollUp'

const ReviewDetailPage = () => {
  useScrollUp()
  const data = useLocation().state as ReviewType
  const infoData = useAtomValue(courseSummary)
  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 12 })}>
      <div className={cx(shadow(), css({ rounded: 10, display: 'flex', flexDir: 'column', gap: 5, p: 5, pb: 10 }))}>
        <div className={css({ color: 'black.2', fontSize: 26, fontWeight: 600 })}>{infoData.courseName}</div>
        <div className={css({ fontSize: 14, fontWeight: 700, color: 'lightGray.1' })}>
          {data.year} {data.semester} semester
        </div>
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{data.rate.toFixed(1)}</span>
          <CookiesRate rate={data.rate} size={18} gap={4} />
        </div>
        <div
          className={css({
            color: 'darkGray.1',
            fontSize: 14,
          })}
        >
          {data.text}
        </div>
      </div>
      <InfoDetail
        teamProject={data.teamProject}
        amountLearned={data.amountLearned}
        attendance={data.attendance}
        classLevel={data.classLevel}
        teachingSkills={data.teachingSkills}
      />
    </div>
  )
}

export default ReviewDetailPage
