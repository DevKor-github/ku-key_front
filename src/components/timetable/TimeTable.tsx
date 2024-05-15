import { css, cva } from '@styled-stytem/css'

import LectureGrid from '@/components/timetable/LectureGrid'

// todo : 브랜치 머지 이후 recipe화 필요
export const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: 18,
    fontWeight: '500',
    wordWrap: 'break-word',
    h: 28,
    borderRight: '1px solid {colors.darkGray.2}',
    borderBottom: '1px solid {colors.darkGray.2}',
    position: 'relative',
  },
  variants: {
    header: {
      true: {
        h: 10,
      },
    },
    sidebar: {
      true: {
        bgColor: 'lightGray.2',
        w: 20,
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

const time = ['']
const week = ['MON', 'TUS', 'WEN', 'THR', 'FRI']
for (let i = 9; i <= 16; i++) {
  time.push(`${i}:00`)
}

interface TimeTableProps {
  semester: string
  year: string
}

const TimeTable = ({ semester, year }: TimeTableProps) => {
  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          h: 16,
          bgColor: 'lightGray.2',
          roundedTop: 10,
          border: '1px {colors.darkGray.2} solid',
          display: 'flex',
          pl: 3.5,
          alignItems: 'center',
          color: 'darkGray.1',
          fontSize: 20,
          fontWeight: '700',
          wordWrap: 'break-word',
        })}
      >
        {`${year} ${semester} semester`}
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          borderLeft: '1px solid {colors.darkGray.2}',
          borderBottomLeftRadius: 10,
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column' })}>
          {time.map((val, ind) => {
            return (
              <div
                key={ind}
                className={TimeCell({ sidebar: true, header: ind === 0, end: ind === 8 ? 'leftEnd' : undefined })}
              >
                {val}
              </div>
            )
          })}
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', flex: 1 })}>
          <div className={css({ display: 'flex', flexDir: 'row' })}>
            {week.map((days, ind) => {
              return (
                <div key={ind} className={css({ flex: 1 }, TimeCell.raw({ header: true }))}>
                  {days}
                </div>
              )
            })}
          </div>
          <LectureGrid />
        </div>
      </div>
    </div>
  )
}

export default TimeTable
