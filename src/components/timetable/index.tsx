import { css } from '@styled-stytem/css'

import TimetableLayout from '@/components/timetable/TimetableLayout'

interface TimeTableProps {
  semester: string
  year: string
}

const Timetable = ({ semester, year }: TimeTableProps) => {
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
      <TimetableLayout />
    </div>
  )
}

export default Timetable
