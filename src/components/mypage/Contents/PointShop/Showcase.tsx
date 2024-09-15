import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

import { usePatchLevel, usePostPurchaseItem } from '@/api/hooks/user'
import CharacterTicket from '@/components/mypage/Contents/PointShop/CharacterTicket'
import CourseReviewTicket from '@/components/mypage/Contents/PointShop/CourseReviewTicket'
import { CharacterType } from '@/types/community'

const HeadingStyle = css({
  fontSize: { base: 26, mdDown: 18 },
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
            alert('Your purchase has been successful')
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
      if (selectedLevel !== target) {
        selectLevel(target)
        // TODO: 스크롤 애니메이션 컨펌 받기
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    },
    [selectLevel, selectedLevel],
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
            columnGap: { base: 5, mdDown: 1 },
            rowGap: { base: 10, mdDown: 1 },
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
        <h2 className={HeadingStyle}>Course review reading ticket</h2>
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
