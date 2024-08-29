import { css } from '@styled-stytem/css'

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
  return (
    <button
      className={css({
        display: 'flex',
        p: 5,
        gap: 5,
        bgColor: 'white',
        rounded: 10,
        border: '{colors.lightGray.1} 1px solid',
        cursor: 'pointer',
      })}
      onClick={() => purchase(days, COST[days])}
    >
      <div className={css({ w: 20, h: 20, bgColor: 'red.3', rounded: 5, flexShrink: 0 })} />
      <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between', w: '110px' })}>
        <h3 className={css({ fontSize: 24, fontWeight: 500 })}>{days} Days</h3>
        <div className={css({ my: 1, display: 'flex', gap: 3, alignItems: 'center' })}>
          <div className={css({ w: 6, h: 6, bgColor: 'red.3', rounded: 'full' })} />
          <div className={css({ color: 'red.1', fontSize: 20, fontWeight: 600 })}>{COST[days]}</div>
        </div>
      </div>
    </button>
  )
}

export default CourseReviewTicket
