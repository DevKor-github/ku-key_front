import { css } from '@styled-stytem/css'
import { useEffect, useState } from 'react'

import { useUpdateTableName } from '@/api/hooks/timetable'
import { TimetableInfo } from '@/api/types/timetable'
import TimetableLayout from '@/components/timetable/TimetableLayout'

interface TimeTableProps {
  timetable: TimetableInfo
}

const Timetable = ({ timetable }: TimeTableProps) => {
  const { timeTableId, tableName, year, semester } = timetable
  const [timetableTitle, setTimetableTitle] = useState('')
  const { mutate: updateTableName } = useUpdateTableName()

  useEffect(() => {
    setTimetableTitle(tableName)
  }, [tableName])

  const changeTimetableTitle = (title: string) => {
    updateTableName({ timeTableId, tableName: title })
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
            onBlur={event => changeTimetableTitle(event.target.value)}
          ></input>
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5, alignItems: 'center' })}>
          <div className={css({ color: 'lightGray.1', fontSize: 18, fontWeight: 500 })}>Color</div>
          {/* todo: 드롭다운....구현해야지 */}
          <div
            className={css({
              h: '1.375rem',
              w: '1.375rem',
              bgColor: 'red.3',
              rounded: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              _hover: {
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
              },
            })}
          >
            <div
              className={css({
                h: 3,
                w: 3,
                bgColor: 'white',
                rounded: '50%',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
              })}
            />
          </div>
        </div>
      </div>
      <TimetableLayout timeTableId={timeTableId} />
    </div>
  )
}

export default Timetable
