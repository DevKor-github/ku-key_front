import { css } from '@styled-stytem/css'

import TimetableLayout from '@/components/timetable/TimetableLayout'

// todo: TimetableID만 받아서 api 땡겨오는 것으로 개선
interface TimeTableProps {
  semester: string
  year: string
  timetableID: string
}

const Timetable = ({ semester, year }: TimeTableProps) => {
  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          h: 16,
          bgColor: 'bg',
          roundedTop: 10,
          border: '1px {colors.lightGray.1} solid',
          display: 'flex',
          pl: 8,
          alignItems: 'center',
          color: 'darkGray.1',
          fontSize: 20,
          fontWeight: 700,
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
