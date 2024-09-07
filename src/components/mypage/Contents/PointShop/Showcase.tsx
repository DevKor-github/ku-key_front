import { css } from '@styled-stytem/css'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

import { usePatchLevel, usePostPurchaseItem } from '@/api/hooks/user'
import CharacterTicket from '@/components/mypage/Contents/PointShop/CharacterTicket'
import CourseReviewTicket from '@/components/mypage/Contents/PointShop/CourseReviewTicket'

const HeadingStyle = css({
  fontSize: 26,
  fontWeight: 600,
})

interface ShowcaseProps {
  myLevel: number
  selectedLevel: number
}
const Showcase = ({ myLevel, selectedLevel }: ShowcaseProps) => {
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
          onSuccess: () => alert('Your purchase was successful'),
          onError: error => {
            if (isAxiosError(error)) {
              alert(error.response?.data.message)
            } else {
              alert('Somthing is Wrong!')
            }
          },
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
          onError: error => {
            if (isAxiosError(error)) {
              alert(error.response?.data.message)
            } else {
              alert('Somthing is Wrong!')
            }
          },
        },
      )
    },
    [purchase],
  )
  const handleApplyCharacter = useCallback(
    (target: number) => {
      selectLevel(target)
    },
    [selectLevel],
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Decorating characters</h2>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: 5,
            rowGap: 10,
          })}
        >
          {Array(6)
            .fill(true)
            .map((_, index) => (
              <CharacterTicket
                level={index + 1}
                myLevel={myLevel}
                selectedLevel={selectedLevel}
                purchase={handlePurchaseCharacterTicket}
                handleApply={handleApplyCharacter}
              />
            ))}
          <CharacterTicket level={0} purchase={handlePurchaseCharacterTicket} handleApply={handleApplyCharacter} />
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <h2 className={HeadingStyle}>Course review reading ticket</h2>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
