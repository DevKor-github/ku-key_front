import { css } from '@styled-system/css'
import { useCallback } from 'react'
import { toast } from 'sonner'

import { usePatchLevel, usePostPurchaseItem } from '@/api/hooks/user'
import CharacterTicket from '@/components/mypage/Contents/PointShop/CharacterTicket'
import CourseReviewTicket from '@/components/mypage/Contents/PointShop/CourseReviewTicket'
import ReviewKeyExpirationCard from '@/components/mypage/Contents/PointShop/ReviewKeyExpirationCard'
import Toast from '@/components/ui/toast'
import { CharacterType } from '@/types/community'

const HeadingStyle = css({
  fontSize: { base: 26, mdDown: 18, smDown: 16 },
  fontWeight: 600,
})

interface ShowcaseProps {
  myLevel: number
  selectedLevel: number
  myCharacterType: CharacterType
}
const Showcase = ({ myLevel, selectedLevel, myCharacterType }: ShowcaseProps) => {
  const { mutate: purchase } = usePostPurchaseItem()
  const { mutate: selectLevel } = usePatchLevel()

  const handlePurchaseReviewTicket = useCallback(
    (days: number, cost: number) => {
      purchase(
        {
          itemCategory: 'COURSE_REVIEW_READING_TICKET',
          days,
          requiredPoints: cost,
        },
        {
          onSuccess: () => toast.custom(() => <Toast message={'Your purchase was successful'} type="success" />),
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
            toast.custom(() => <Toast message={'Your purchase has been successful'} type="warning" />)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          },
        },
      )
    },
    [purchase],
  )
  const handleApplyCharacter = useCallback(
    (target: number) => {
      if (selectedLevel !== target) {
        selectLevel(target)
        // TODO: 스크롤 애니메이션 컨펌 받기
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    },
    [selectLevel, selectedLevel],
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 10, smDown: '1.875rem' } })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 5, smDown: 3.5 } })}>
        <h2 className={HeadingStyle}>Decorating Characters</h2>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: { base: 5, mdDown: 1, smDown: 0 },
            rowGap: { base: 10, mdDown: 1, smDown: 5 },
            smDown: {
              justifyContent: 'space-between',
            },
          })}
        >
          {Array(6)
            .fill(true)
            .map((_, index) => (
              <CharacterTicket
                key={`${index}-level`}
                level={index + 1}
                myLevel={myLevel}
                selectedLevel={selectedLevel}
                purchase={handlePurchaseCharacterTicket}
                handleApply={handleApplyCharacter}
                myCharacterType={myCharacterType}
              />
            ))}
          <CharacterTicket
            level={0}
            purchase={handlePurchaseCharacterTicket}
            handleApply={handleApplyCharacter}
            myCharacterType={myCharacterType}
          />
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Course Review Reading Key</h2>
        <ReviewKeyExpirationCard />
        <div
          className={css({
            display: 'flex',
            flexDir: { mdDown: 'column' },
            justifyContent: 'space-between',
            alignItems: { base: 'center', mdDown: 'flex-start' },
            gap: 2.5,
          })}
        >
          <CourseReviewTicket days={3} purchase={handlePurchaseReviewTicket} />
          <CourseReviewTicket days={7} purchase={handlePurchaseReviewTicket} />
          <CourseReviewTicket days={30} purchase={handlePurchaseReviewTicket} />
        </div>
      </div>
    </div>
  )
}

export default Showcase
