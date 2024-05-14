import { css } from '@styled-stytem/css'

import CircularProgress from '@/components/mypage/CircularProgress'
import GenericDueDate from '@/components/mypage/GenericDueDate'

const DueDateCard = () => {
  return (
    <div
      className={css({
        zIndex: 10,
        display: 'flex',
        alignSelf: 'center',
        color: 'black',
        bg: 'white',
        rounded: 10,
        px: { base: 38, mdDown: 6 },
        py: { base: 7, mdDown: 4 },
        shadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        mt: { base: -16, mdDown: -8 },
        alignItems: 'center',
        gap: 10,
        h: { base: 210, mdDown: 20 },
      })}
    >
      <CircularProgress progress={50} />
      <GenericDueDate type="start" due={120} date="2024. 02. 07" />
      <GenericDueDate type="end" due={98} date="2024. 07. 29" />
    </div>
  )
}

export default DueDateCard
