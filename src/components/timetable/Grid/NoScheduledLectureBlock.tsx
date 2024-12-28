import { css } from '@styled-system/css'

import { TimetableContentsType } from '@/types/timetable'

interface Props {
  data: TimetableContentsType
}
const NoScheduledLectureBlock = ({ data }: Props) => {
  const { title, professorName, location } = data
  return (
    <button className={css({ mx: 4, my: 2.5, display: 'flex', gap: 2.5, alignItems: 'center' })}>
      <span className={css({ fontSize: 18, fontWeight: 500, color: 'black.2' })}>{title}</span>
      <span className={css({ fontSize: 14, fontWeight: 400, color: 'darkGray.1' })}>{professorName}</span>
      <span className={css({ fontSize: 14, fontWeight: 400, color: 'darkGray.1' })}>{location}</span>
    </button>
  )
}

export default NoScheduledLectureBlock
