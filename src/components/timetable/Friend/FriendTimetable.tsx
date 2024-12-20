import { css } from '@styled-system/css'
import { forwardRef } from 'react'

import { useGetFriendTimetable } from '@/api/hooks/friends'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import { TimeCell } from '@/components/timetable/Grid/TimetableLayout'
import { SemesterType } from '@/types/timetable'
import { getWeeknTimeList, numberToSemester } from '@/util/timetableUtil'

interface TimetableProps {
  user: string
  year: string
  semester: SemesterType
}

const FriendTimetable = forwardRef<HTMLDivElement, TimetableProps>(({ user, year, semester }, ref) => {
  const { data } = useGetFriendTimetable({ username: user, year, semester })
  const { time, week } = getWeeknTimeList(data.courses, data.schedules)

  return (
    <div className={css({ w: '100%' })} ref={ref}>
      <div
        className={css({
          w: '100%',
          h: 16,
          display: 'flex',
          flexDir: 'row',
          justifyContent: 'space-between',
          bgColor: 'bg.gray',
          roundedTop: 10,
          border: '1px {colors.lightGray.1} solid',
          px: 8,
          alignItems: 'center',
          position: 'relative',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
          <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, whiteSpace: 'nowrap' })}>
            {`${year} ${numberToSemester[semester]} semester`}
          </div>
          <div
            className={css({
              border: 'none',
              color: 'lightGray.1',
              fontWeight: 500,
              fontSize: 18,
              outline: 'none',
              w: '70%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {data.timetableName}
          </div>
        </div>
      </div>
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
          <LectureGrid timetableData={data} weekCnt={week.length} timeCnt={time.length - 1} />
        </div>
      </div>
    </div>
  )
})

export default FriendTimetable
