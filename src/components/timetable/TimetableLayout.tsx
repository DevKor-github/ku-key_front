import { css, cva } from '@styled-stytem/css'
import { memo } from 'react'

import { useGetTimetable } from '@/api/hooks/timetable'
import LectureGrid from '@/components/timetable/LectureGrid'
import { getWeeknTimeList } from '@/util/timetableUtil'

export const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: { base: 18, mdDown: 12 },
    fontWeight: '500',
    wordWrap: 'break-word',
    h: 27,
    borderRight: '1px solid {colors.lightGray.1}',
    borderBottom: '1px solid {colors.lightGray.1}',
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {
    header: {
      true: {
        h: 10,
      },
    },
    sidebar: {
      true: {
        bgColor: 'bg.gray',
        w: { base: '4.125rem', mdDown: 9 },
      },
    },
    end: {
      leftEnd: {
        roundedBottomLeft: 10,
      },
      rightEnd: {
        roundedBottomRight: 10,
      },
    },
    lectureGrid: {
      true: {
        display: 'block',
      },
    },
  },
})

interface TimetableLayoutProps {
  timetableId: number
}

const TimetableLayout = memo(({ timetableId }: TimetableLayoutProps) => {
  const { data } = useGetTimetable({ timetableId })

  const { time, week } = getWeeknTimeList(data.courses, data.schedules)

  return (
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
  )
})

export default TimetableLayout
