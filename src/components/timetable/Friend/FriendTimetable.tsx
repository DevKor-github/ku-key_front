import { css } from '@styled-stytem/css'

import { useGetFriendTimetable } from '@/api/hooks/friends'
import LectureGrid from '@/components/timetable/LectureGrid'
import { TimeCell } from '@/components/timetable/TimetableLayout'
import { getWeeknTimeList } from '@/util/timetableUtil'

interface TimeTableProps {
  user: string
  year: string
  semester: string
}

const FriendTimetable = ({ user, year, semester }: TimeTableProps) => {
  const { data } = useGetFriendTimetable({ friendId: user, year, semester })
  const { time, week } = getWeeknTimeList(data.courses, data.schedules)

  // todo: 대표 시간표가 없을 때의 처리
  // todo: 실제 시간표 이름으로 수정

  return (
    <div className={css({ w: '100%' })}>
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
            {`${year} ${semester} semester`}
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
            {'todo:tablename 수정'}
          </div>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          borderLeft: '1px solid {colors.lightGray.1}',
          borderBottomLeftRadius: 10,
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
}

export default FriendTimetable
