import { css } from '@styled-system/css'
import { forwardRef } from 'react'

import { useGetFriendTimetable } from '@/api/hooks/friends'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import NullTable from '@/components/timetable/Grid/NullTable'
import { SemesterType } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

interface TimetableProps {
  user: string
  year: string
  semester: SemesterType
}

const FriendTimetable = forwardRef<HTMLDivElement, TimetableProps>(({ user, year, semester }, ref) => {
  const {
    data: { timetable: timetableData },
  } = useGetFriendTimetable({ username: user, year, semester })

  if (timetableData === null) return <NullTable />

  return (
    <div className={css({ w: '100%' })} ref={ref}>
      <div
        className={css({
          w: '100%',
          h: 16,
          display: 'flex',
          flexDir: 'row',
          justifyContent: 'space-between',
          bgColor: 'bg.gray',
          roundedTop: 10,
          border: '1px {colors.lightGray.1} solid',
          px: 8,
          alignItems: 'center',
          position: 'relative',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
          <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, whiteSpace: 'nowrap' })}>
            {`${year} ${numberToSemester[semester]} semester`}
          </div>
          <div
            className={css({
              border: 'none',
              color: 'lightGray.1',
              fontWeight: 500,
              outline: 'none',
              w: '70%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {timetableData.timetableName}
          </div>
        </div>
      </div>
      <LectureGrid timetableData={timetableData} />
    </div>
  )
})

export default FriendTimetable
