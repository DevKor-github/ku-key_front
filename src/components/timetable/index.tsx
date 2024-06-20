import { css, cva } from '@styled-stytem/css'
import { Ellipsis, Plus } from 'lucide-react'

import { TimetableInfo } from '@/api/types/timetable'
import TimetableLayout from '@/components/timetable/TimetableLayout'

const optBtn = cva({
  base: {
    cursor: 'pointer',
    transition: 'background 0.256s',
    rounded: 'full',
    h: '30px',
    w: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    _hover: {
      bgColor: 'lightGray.1',
    },
  },
})
interface TimeTableProps {
  timetable: TimetableInfo
}

const Timetable = ({ timetable }: TimeTableProps) => {

  const { timeTableId, tableName, year, semester } = timetable

  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          w: '100%',
          justifyContent: 'space-between',
          h: 16,
          bgColor: 'bg.gray',
          roundedTop: 10,
          border: '1px {colors.lightGray.1} solid',
          px: 8,
          alignItems: 'center',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
          <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, wordWrap: 'break-word' })}>
            {`${year} ${semester} semester`}
          </div>
          <div
            className={css({ border: 'none', color: 'lightGray.1', fontWeight: 500, fontSize: 18, outline: 'none' })}
          >
            {tableName}
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 4, alignItems: 'center', color: 'darkGray.1' })}>
          <div className={optBtn()}>
            <Plus size={20} />
          </div>
          <div className={optBtn()}>
            <Ellipsis size={20} />
          </div>
        </div>
      </div>
      <TimetableLayout timeTableId={timeTableId} />
    </div>
  )
}

export default Timetable
