import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { useGetKeyExpiration } from '@/api/hooks/user'
import CookiesRate from '@/components/courseReview/CookiesRate'
import Toast from '@/components/ui/toast'
import { KU_KEY_ERROR_LOG } from '@/lib/error'

interface TotalRateProps {
  totalRate: number
  reviewCount: number
  courseCode: string
  professorName: string
}
const TotalRate = ({ totalRate, reviewCount, courseCode, professorName }: TotalRateProps) => {
  const navigate = useNavigate()
  const { data: hasTicket } = useGetKeyExpiration()
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          flexDir: 'column',
          gap: 5,
          rounded: 10,
          px: 5,
          pt: 5,
          pb: { base: 10, smDown: 5 },
        }),
        shadow(),
      )}
    >
      <div className={css({ fontWeight: 700, color: 'lightGray.1', fontSize: 14 })}>Course Review Total Rate</div>
      <div
        className={css({
          display: 'flex',
          flexDir: { base: 'row', smDown: 'column' },
          alignItems: { base: 'center', smDown: 'flex-start' },
          justifyContent: { base: 'space-between', smDown: 'flex-start' },
          smDown: { gap: 5 },
        })}
      >
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{totalRate.toFixed(1)}</span>
          <CookiesRate rate={totalRate} size={18} gap={4} />
          <span className={css({ fontSize: 14 })}>({reviewCount})</span>
        </div>
        <button
          onClick={() => {
            if (hasTicket) navigate(`/course-review/detail?code=${courseCode}&professorName=${professorName}`)
            else
              toast.custom(() => <Toast message={KU_KEY_ERROR_LOG.COURSE_REVIEW_NOT_VIEWABLE.message} type="warning" />)
          }}
          className={css({
            fontSize: 18,
            color: 'darkGray.2',
            display: 'flex',
            alignItems: 'center',
          })}
        >
          Course Review <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default TotalRate
