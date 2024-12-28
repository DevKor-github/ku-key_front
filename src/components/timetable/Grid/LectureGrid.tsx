import { css } from '@styled-system/css'

import { GetTimetableByTimetableIdResponse } from '@/api/types/timetable'
import LectureSticker from '@/components/timetable/Grid/LectureSticker'
import NoScheduledLectureBlock from '@/components/timetable/Grid/NoScheduledLectureBlock'
import { TimeCell } from '@/components/timetable/Grid/TimetableLayout'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { getWeeknTimeList, lectureDataPreprocess } from '@/util/timetableUtil'

interface LectureGridProps {
  timetableId?: number
  timetableData: GetTimetableByTimetableIdResponse
  isMine?: boolean
}

const LectureGrid = ({ timetableId, timetableData, isMine = false }: LectureGridProps) => {
  const { time, week } = getWeeknTimeList(timetableData.courses, timetableData.schedules)
  const weekCnt = week.length
  const timeCnt = time.length - 1

  const { lectureGrid, noScheduled } = lectureDataPreprocess(
    timetableData.courses,
    timetableData.schedules,
    weekCnt,
    timeCnt,
  )
  const colorTheme = timetableData.color
  let lecCnt = 0

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          borderLeft: '1px solid {colors.lightGray.1}',
          roundedBottom: 10,
          bgColor: 'white',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column' })}>
          {time.map((val, index) => {
            return (
              <div
                key={index}
                className={TimeCell({
                  sidebar: true,
                  header: index === 0,
                  end: index === time.length - 1 ? 'leftEnd' : undefined,
                })}
              >
                {val}
              </div>
            )
          })}
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', flex: 1 })}>
          <div className={css({ display: 'flex', flexDir: 'row' })}>
            {week.map((days, index) => {
              return (
                <div key={index} className={css({ flex: 1 }, TimeCell.raw({ header: true }))}>
                  {days}
                </div>
              )
            })}
          </div>
          <div className={css({ display: 'grid' })} style={{ gridTemplateColumns: `repeat(${weekCnt}, 1fr)` }}>
            {lectureGrid.map((lectures, gridInd) => {
              return (
                <div
                  key={gridInd}
                  className={TimeCell({
                    lectureGrid: true,
                    end: gridInd === weekCnt * timeCnt - 1 ? 'rightEnd' : undefined,
                  })}
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
        </div>
      </div>
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
        {noScheduled.map((lecture, index) => (
          <NoScheduledLectureBlock key={`non-scheduled-${index}`} data={lecture} />
        ))}
      </div>
    </div>
  )
}

export default LectureGrid
