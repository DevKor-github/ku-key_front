import { css } from '@styled-stytem/css'

import { GetTimeTableByTimeTableIdResponse } from '@/api/types/timetable'
import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimetableLayout'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { getDuration, lectureDataPreprocess } from '@/util/timetableUtil'

interface LectureGridProps {
  timetableData: GetTimeTableByTimeTableIdResponse
  weekCnt: number
  timeCnt: number
}

const LectureGrid = ({ timetableData, weekCnt, timeCnt }: LectureGridProps) => {
  const lecGrid = lectureDataPreprocess(timetableData.courses, timetableData.schedules, weekCnt, timeCnt)
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
                  name={lecture.title}
                  runningTime={getDuration(lecture.endTime, lecture.startTime)}
                  room={lecture.location}
                  professor={lecture.professorName ? lecture.professorName : null}
                  bgColor={COLOR_INFO['Red']['rand'][lecCnt++ % COLOR_INFO['Red']['rand'].length]}
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
