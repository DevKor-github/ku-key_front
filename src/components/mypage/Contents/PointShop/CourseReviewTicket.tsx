import { css } from '@styled-system/css'

import PASS_30DAYS from '@/assets/pass_30days.png'
import PASS_3DAYS from '@/assets/pass_3days.png'
import PASS_7DAYS from '@/assets/pass_7days.png'
import Sugar from '@/assets/Sugar_md.png'
import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/hooks/useModal'

const COST = {
  3: 30,
  7: 50,
  30: 100,
}
const IMAGE_SRC = {
  3: PASS_3DAYS,
  7: PASS_7DAYS,
  30: PASS_30DAYS,
}

interface CourseReviewTicketProps {
  days: 3 | 7 | 30
  purchase: (days: number, cost: number) => void
}
const CourseReviewTicket = ({ days, purchase }: CourseReviewTicketProps) => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()

  return (
    <>
      <button
        className={css({
          display: 'flex',
          p: { base: 5, mdDown: 2 },
          gap: { base: 5, mdDown: 2 },
          bgColor: 'white',
          rounded: 10,
          border: '{colors.lightGray.1} 1px solid',
          cursor: 'pointer',
          alignItems: 'stretch',
          smDown: {
            w: '33%',
          },
        })}
        onClick={handleOpen}
      >
        <img
          src={IMAGE_SRC[days]}
          alt={`${days} days course review ticket`}
          className={css({
            w: { base: 20, mdDown: 13, smDown: 9 },
            h: { base: 20, mdDown: 13, smDown: 9 },
            rounded: { base: 5, smDown: 1 },
            flexShrink: 0,
          })}
        />
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'space-between',
            w: { base: '110px', mdDown: '80px' },
            alignItems: 'flex-start',
          })}
        >
          <h3 className={css({ fontSize: { base: 24, mdDown: 16, smDown: 10 }, fontWeight: 500, lineHeight: 1.2 })}>
            {days} Days
          </h3>
          <div
            className={css({
              my: { base: 1, smDown: '1.7px' },
              display: 'flex',
              gap: { base: 2, smDown: 1 },
              alignItems: 'center',
            })}
          >
            <img src={Sugar} alt="sugar" className={css({ w: { base: 6, mdDown: 3, smDown: '8.5px' } })} />
            <div
              className={css({
                color: 'black',
                fontSize: { base: 20, mdDown: 12, smDown: 8.5 },
                fontWeight: 600,
                lineHeight: 1.2,
              })}
            >
              {COST[days]}
            </div>
          </div>
        </div>
      </button>
      <AlertModal
        modalRef={modalRef}
        title="Would you like to purchase this item?"
        content={`This item will begin as soon as you purchase it.`}
        closeText="Cancel"
        confirmText="BUY"
        onConfirm={() => {
          purchase(days, COST[days])
          handleButtonClose()
        }}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </>
  )
}

export default CourseReviewTicket
