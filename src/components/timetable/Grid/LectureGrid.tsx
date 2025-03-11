import { css } from '@styled-system/css'
import { useMemo } from 'react'

import { GetTimetableByTimetableIdResponse } from '@/api/types/timetable'
import NoScheduledArea from '@/components/timetable/Grid/NoScheduledArea'
import ScheduledArea from '@/components/timetable/Grid/ScheduledArea'
import { getWeeknTimeList, lectureDataPreprocess } from '@/util/timetableUtil'

interface LectureGridProps {
  timetableId?: number // 친구 시간표의 경우 undefined
  timetableData: GetTimetableByTimetableIdResponse
  isMine?: boolean
}

const LectureGrid = ({ timetableId, timetableData, isMine = false }: LectureGridProps) => {
  const { time, week } = useMemo(
    () => getWeeknTimeList(timetableData.courses, timetableData.schedules),
    [timetableData],
  )
  const weekCnt = week.length
  const timeCnt = time.length - 1

  const { lectureGrid, noScheduled } = useMemo(
    () => lectureDataPreprocess(timetableData.courses, timetableData.schedules, weekCnt, timeCnt),
    [timetableData, weekCnt, timeCnt],
  )
  const colorTheme = timetableData.color

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 2.5, smDown: 1 } })}>
      <ScheduledArea
        data={lectureGrid}
        colorTheme={colorTheme}
        timetableId={timetableId}
        isMine={isMine}
        time={time}
        week={week}
      />
      {noScheduled.length !== 0 && <NoScheduledArea data={noScheduled} timetableId={timetableId} isMine={isMine} />}
    </div>
  )
}

export default LectureGrid
