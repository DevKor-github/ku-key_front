import { css } from '@styled-system/css'

import CircularProgress from '@/components/mypage/CircularProgress'
import GenericDueDate from '@/components/mypage/GenericDueDate'
import dateFormatter from '@/util/dateFormatter'

interface DueDateCardProps {
  startDay: string | null
  endDay: string | null
}
const DueDateCard = ({ startDay, endDay }: DueDateCardProps) => {
  const today = new Date()
  const startDate = startDay ? new Date(startDay) : today
  const endDate = endDay ? new Date(endDay) : today

  const untilNow = Math.abs(today.getTime() - startDate.getTime())
  const total = Math.abs(endDate.getTime() - startDate.getTime())
  const fromNowOn = Math.abs(endDate.getTime() - today.getTime())
  const percentage = Math.round((untilNow / total) * 100)

  return (
    <div
      className={css({
        zIndex: 10,
        display: 'flex',
        alignSelf: 'center',
        color: 'black',
        bg: 'white',
        rounded: 10,
        px: { base: 10, mdDown: 5, smDown: 0 },
        py: { base: 7, mdDown: 3, smDown: 0 },
        shadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        mt: { base: -16, mdDown: -8, smDown: 0 },
        alignItems: 'center',
        gap: { base: 10, smDown: 0 },
        h: { base: 52, mdDown: 40, smDown: 21 },
        smDown: {
          pos: 'absolute',
          bottom: 2.5,
          w: '340px',
          justifyContent: 'space-between',
        },
      })}
    >
      <CircularProgress progress={percentage <= 100 ? percentage : 100} />
      <GenericDueDate
        type="start"
        due={Math.floor(untilNow / (1000 * 60 * 60 * 24))}
        date={dateFormatter({ date: startDate, space: true })}
      />
      <GenericDueDate
        type="end"
        due={Math.floor(fromNowOn / (1000 * 60 * 60 * 24))}
        date={dateFormatter({ date: endDate, space: true })}
      />
    </div>
  )
}

export default DueDateCard
