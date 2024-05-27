import { css } from '@styled-stytem/css'

import { GetTimeTableByTimeTableIdResponse } from '@/api/types/timetable'
import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimetableLayout'
import { getDuration, lectureDataPreprocess } from '@/util/timetableUtil'

interface LectureGridProps {
  timetableData: GetTimeTableByTimeTableIdResponse
  weekCnt: number
  timeCnt: number
}

const LectureGrid = ({ timetableData, weekCnt, timeCnt }: LectureGridProps) => {
  const lecGrid = lectureDataPreprocess(timetableData, weekCnt, timeCnt)

  return (
    <div className={css({ display: 'grid' })} style={{ gridTemplateColumns: `repeat(${weekCnt}, 1fr)` }}>
      {lecGrid.map((lectures, gridInd) => {
        return (
          <div key={gridInd} className={TimeCell({ lectureGrid: true, end: gridInd === 39 ? 'rightEnd' : undefined })}>
            {lectures.map((lecture, lecInd) => {
              return (
                <LectureSticker
                  key={lecInd}
                  name={lecture.courseName}
                  runningTime={getDuration(lecture.endTime, lecture.startTime)}
                  professor={lecture.professorName}
                  room={lecture.classroom}
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
