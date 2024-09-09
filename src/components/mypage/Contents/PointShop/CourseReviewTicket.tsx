import { css } from '@styled-stytem/css'

import Sugar from '@/assets/Sugar_md.png'
import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/useModal'

const COST = {
  3: 30,
  7: 50,
  30: 100,
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
        })}
        onClick={handleOpen}
      >
        <div
          className={css({
            w: { base: 20, mdDown: 13 },
            h: { base: 20, mdDown: 13 },
            bgColor: 'red.3',
            rounded: 5,
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
          <h3 className={css({ fontSize: { base: 24, mdDown: 16 }, fontWeight: 500 })}>{days} Days</h3>
          <div className={css({ my: 1, display: 'flex', gap: 2, alignItems: 'center' })}>
            <img src={Sugar} alt="sugar" className={css({ w: { base: 6, mdDown: 3 } })} />
            <div className={css({ color: 'black', fontSize: { base: 20, mdDown: 12 }, fontWeight: 600 })}>
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
