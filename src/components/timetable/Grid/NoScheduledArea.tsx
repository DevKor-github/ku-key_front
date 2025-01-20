import { css } from '@styled-system/css'
import { Fragment } from 'react/jsx-runtime'

import LectureSticker from '@/components/timetable/Grid/LectureSticker'
import { TimetableContentsType } from '@/types/timetable'

interface Props {
  data: TimetableContentsType[]
  timetableId?: number
  isMine: boolean
}
const NoScheduledArea = ({ data, timetableId, isMine }: Props) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 0.5,
        border: '1px solid {colors.lightGray.1}',
        rounded: 10,
        bgColor: 'white',
      })}
    >
      {data.map((lecture, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && <div className={css({ h: 0.25, bgColor: 'lightGray.1', mx: { base: 4, smDown: 2 } })} />}
            <LectureSticker timetableId={timetableId} data={lecture} isMine={isMine} />
          </Fragment>
        )
      })}
    </div>
  )
}
export default NoScheduledArea
