import { css } from '@styled-system/css'

import { GetTimetableByTimetableIdResponse } from '@/api/types/timetable'
import LectureSticker from '@/components/timetable/Grid/LectureSticker'
import { TimeCell } from '@/components/timetable/Grid/TimetableLayout'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { lectureDataPreprocess } from '@/util/timetableUtil'

interface LectureGridProps {
  timetableId?: number
  timetableData: GetTimetableByTimetableIdResponse
  weekCnt: number
  timeCnt: number
  isMine?: boolean
}

const LectureGrid = ({ timetableId, timetableData, weekCnt, timeCnt, isMine = false }: LectureGridProps) => {
  const lecGrid = lectureDataPreprocess(timetableData.courses, timetableData.schedules, weekCnt, timeCnt)
  const colorTheme = timetableData.color
  let lecCnt = 0

  return (
    <div className={css({ display: 'grid' })} style={{ gridTemplateColumns: `repeat(${weekCnt}, 1fr)` }}>
      {lecGrid.map((lectures, gridInd) => {
        return (
          <div
            key={gridInd}
            className={TimeCell({ lectureGrid: true, end: gridInd === weekCnt * timeCnt - 1 ? 'rightEnd' : undefined })}
          >
            {lectures.map((lecture, lecInd) => {
              return (
                <LectureSticker
                  key={lecInd}
                  timetableId={timetableId}
                  data={lecture}
                  bgColor={COLOR_INFO[colorTheme]['rand'][lecCnt++ % COLOR_INFO[colorTheme]['rand'].length]}
                  isMine={isMine}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default LectureGrid
