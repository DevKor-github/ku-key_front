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
    h: 27,
    borderRight: '1px solid {colors.lightGray.1}',
    borderBottom: '1px solid {colors.lightGray.1}',
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
        bgColor: 'bg',
        w: '4.125rem',
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

const TimetableLayout = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        borderLeft: '1px solid {colors.lightGray.1}',
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
  )
}

export default TimetableLayout