import { css, cva } from '@styled-stytem/css'

import openArrow from '@/assets/openArrow.svg'

const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: 18,
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  variants: {
    variant: {
      header: {
        h: '40px',
      },
      normal: {
        h: '108px',
      },
    },
  },
})

const TimeCellArr: string[] = []
for (let i = 0; i < 48; i++) {
  if (i % 6 === 0) {
    TimeCellArr.push(`${i / 6 + 9}:00`)
  } else {
    TimeCellArr.push('')
  }
}

interface TimeTableProps {
  semester: string
  year: string
}

const week = ['', 'MON', 'TUS', 'WEN', 'THR', 'FRI']

const TimeTable = (props: TimeTableProps) => {
  const { semester, year } = props
  return (
    <div
      className={css({
        w: '100%',
      })}
    >
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
        <img
          src={openArrow}
          className={css({
            cursor: 'pointer',
          })}
          alt=""
        />
      </div>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '82px repeat(5, 1fr)',
          borderLeft: '1px solid {colors.darkGray.2}',
          borderBottomLeftRadius: 10,
          '& div': {
            borderRight: '1px solid {colors.darkGray.2}',
            borderBottom: '1px solid {colors.darkGray.2}',
          },
          '& div:nth-child(6n+1)': {
            background: 'lightGray.2',
          },
          '& div:nth-child(49)': {
            borderBottomLeftRadius: 10,
          },
          '& div:nth-child(54)': {
            borderBottomRightRadius: 10,
          },
        })}
      >
        {week.map((days, ind) => {
          return (
            <div key={ind} className={css(TimeCell.raw({ variant: 'header' }))}>
              {days}
            </div>
          )
        })}
        {TimeCellArr.map((val, ind) => {
          return (
            <div key={ind} className={css(TimeCell.raw({ variant: 'normal' }))}>
              {val}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimeTable
