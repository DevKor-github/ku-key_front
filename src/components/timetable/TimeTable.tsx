import { css, cva } from '@styled-stytem/css'

import openArrow from '@/assets/openArrow.svg'
// import LectureGrid from '@/components/timetable/LectureGrid'
import LectureGrid from '@/components/timetable/LectureGrid'

export const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: 18,
    fontWeight: '500',
    wordWrap: 'break-word',
    h: '108px',
    borderRight: '1px solid {colors.darkGray.2}',
    borderBottom: '1px solid {colors.darkGray.2}',
    position: 'relative',
  },
  variants: {
    header: {
      true: {
        h: '40px',
      },
    },
    sidebar: {
      true: {
        background: 'lightGray.2',
        w: '82px',
      },
    },
    end: {
      leftEnd: {
        borderBottomLeftRadius: 10,
      },
      rightEnd: {
        borderBottomRightRadius: 10,
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
for (let i = 9; i <= 16; i++) {
  time.push(`${i}:00`)
}
const week = ['MON', 'TUS', 'WEN', 'THR', 'FRI']

interface TimeTableProps {
  semester: string
  year: string
}

const TimeTable = (props: TimeTableProps) => {
  const { semester, year } = props
  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          h: '65px',
          background: 'lightGray.2',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          border: '1px {colors.darkGray.2} solid',
          display: 'flex',
          pl: '14px',
          alignItems: 'center',
          color: 'darkGray.1',
          fontSize: 20,
          fontWeight: '700',
          wordWrap: 'break-word',
          gap: '5px',
        })}
      >
        {`${year} ${semester} semester`}
        <img src={openArrow} className={css({ cursor: 'pointer' })} alt="" />
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
              <div className={TimeCell({ sidebar: true, header: ind === 0, end: ind === 8 ? 'leftEnd' : undefined })}>
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
