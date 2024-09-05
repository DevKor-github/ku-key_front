import { css } from '@styled-stytem/css'
import { useCallback } from 'react'

import { usePostPurchaseItem } from '@/api/hooks/user'
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
  const { mutate: purchase } = usePostPurchaseItem()

  const handlePurchaseReviewTicket = useCallback(
    (days: number, cost: number) => {
      purchase(
        {
          itemCategory: 'COURSE_REVIEW_READING_TICKET',
          days,
          requiredPoints: cost,
        },
        {
          onSuccess: () => alert('Your purchase was successful'),
        },
      )
    },
    [purchase],
  )
  const handlePurchaseCharacterTicket = useCallback(
    (cost: number, type: 'CHARACTER_EVOLUTION' | 'CHARACTER_TYPE_CHANGE') => {
      purchase(
        { itemCategory: type, requiredPoints: cost },
        {
          onSuccess: () => {
            // TODO: 캐릭터 로직
            alert('Your purchase has been successful')
          },
        },
      )
    },
    [purchase],
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Decorating characters</h2>
        <div className={ShowCaseStyle}>
          <CharacterTicket level={myLevel} purchase={handlePurchaseCharacterTicket} />
          <CharacterTicket purchase={handlePurchaseCharacterTicket} />
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Course review reading ticket</h2>
        <div className={ShowCaseStyle}>
          <CourseReviewTicket days={3} purchase={handlePurchaseReviewTicket} />
          <CourseReviewTicket days={7} purchase={handlePurchaseReviewTicket} />
          <CourseReviewTicket days={30} purchase={handlePurchaseReviewTicket} />
        </div>
      </div>
    </div>
  )
}

export default Showcase
