import { css } from '@styled-system/css'

import { TimetableContentsType } from '@/types/timetable'

interface Props {
  data: TimetableContentsType
  onClick: () => void
  isMine: boolean
}
const NoScheduledLecture = ({ data, onClick, isMine }: Props) => {
  const { title, professorName, location } = data
  return (
    <button
      className={css({
        mx: { base: 4, smDown: 2 },
        my: { base: 2.5, smDown: 1 },
        display: 'flex',
        gap: { base: 2.5, smDown: 1 },
        alignItems: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      })}
      style={{
        cursor: isMine ? 'pointer' : 'auto',
      }}
      onClick={onClick}
    >
      <span className={css({ fontSize: { base: 18, smDown: 12 }, fontWeight: 500, color: 'black.2' })}>{title}</span>
      <span className={css({ fontSize: { base: 14, smDown: 11 }, fontWeight: 400, color: 'darkGray.1' })}>
        {professorName}
      </span>
      <span className={css({ fontSize: { base: 14, smDown: 11 }, fontWeight: 400, color: 'darkGray.1' })}>
        {location}
      </span>
    </button>
  )
}

export default NoScheduledLecture
