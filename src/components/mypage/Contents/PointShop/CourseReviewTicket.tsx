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
          p: 5,
          gap: 5,
          bgColor: 'white',
          rounded: 10,
          border: '{colors.lightGray.1} 1px solid',
          cursor: 'pointer',
          alignItems: 'stretch',
        })}
        onClick={handleOpen}
      >
        <div className={css({ w: 20, h: 20, bgColor: 'red.3', rounded: 5, flexShrink: 0 })} />
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'space-between',
            w: '110px',
            alignItems: 'flex-start',
          })}
        >
          <h3 className={css({ fontSize: 24, fontWeight: 500 })}>{days} Days</h3>
          <div className={css({ my: 1, display: 'flex', gap: 2, alignItems: 'center' })}>
            <img src={Sugar} alt="sugar" className={css({ w: 6 })} />
            <div className={css({ color: 'black', fontSize: 20, fontWeight: 600 })}>{COST[days]}</div>
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
