import { css } from '@styled-stytem/css'

import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimeTable'

const LectureGrid = () => {
  return (
    <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' })}>
      {Array(40)
        .fill(0)
        .map((_, ind) => {
          return (
            <div key={ind} className={TimeCell({ end: ind === 39 ? 'rightEnd' : undefined, lectureGrid: true })}>
              {ind === 6 && <LectureSticker name="개구리의 먹이사슬" time={90} professor="박정우" room="대모산" />}
            </div>
          )
        })}
    </div>
  )
}

export default LectureGrid
