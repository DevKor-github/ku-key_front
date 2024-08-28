import { css } from '@styled-stytem/css'

import CircularProgress from '@/components/mypage/CircularProgress'
import GenericDueDate from '@/components/mypage/GenericDueDate'

interface DueDateCardProps {
  startDay: string
  endDay: string
}
const DueDateCard = ({ startDay, endDay }: DueDateCardProps) => {
  const today = new Date()
  const startDate = new Date(startDay)
  const endDate = new Date(endDay)

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
        px: { base: 10, mdDown: 6 },
        py: { base: 7, mdDown: 4 },
        shadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        mt: { base: -16, mdDown: -8 },
        alignItems: 'center',
        gap: 10,
        h: { base: 52, mdDown: 20 },
      })}
    >
      <CircularProgress progress={percentage <= 100 ? percentage : 100} />
      <GenericDueDate
        type="start"
        due={Math.floor(untilNow / (1000 * 60 * 60 * 24))}
        date={`${startDate.getFullYear()}. ${String(startDate.getMonth() + 1).padStart(2, '0')}. ${String(startDate.getDate()).padStart(2, '0')}`}
      />
      <GenericDueDate
        type="end"
        due={Math.floor(fromNowOn / (1000 * 60 * 60 * 24))}
        date={`${endDate.getFullYear()}. ${String(endDate.getMonth() + 1).padStart(2, '0')}. ${String(endDate.getDate()).padStart(2, '0')}`}
      />
    </div>
  )
}

export default DueDateCard
