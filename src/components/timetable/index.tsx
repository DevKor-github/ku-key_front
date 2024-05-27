import { css } from '@styled-stytem/css'
import { useEffect, useState } from 'react'

import { useGetTimetable } from '@/api/hooks/timetable'
import { TimetableInfo } from '@/api/types/timetable'
import TimetableLayout from '@/components/timetable/TimetableLayout'

interface TimeTableProps {
  timetable: TimetableInfo
}

const Timetable = ({ timetable }: TimeTableProps) => {
  const { tableID, tableName, year, semester } = timetable
  const { data: curTable, isPending } = useGetTimetable(tableID)
  const [timetableTitle, setTimetableTitle] = useState('')

  useEffect(() => {
    setTimetableTitle(tableName)
  }, [tableName])

  if (isPending || curTable === undefined) {
    return <div>로딩중</div>
  }

  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          w: '100%',
          justifyContent: 'space-between',
          h: 16,
          bgColor: 'bg',
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
          <input
            className={css({ border: 'none', color: 'lightGray.1', fontWeight: 500, fontSize: 18, outline: 'none' })}
            value={timetableTitle}
            onChange={event => {
              setTimetableTitle(event.target.value)
            }}
          ></input>
        </div>
        <div>Color</div>
      </div>
      <TimetableLayout />
    </div>
  )
}

export default Timetable
