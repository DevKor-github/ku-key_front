import { css } from '@styled-stytem/css'

// import Timetable from '@/components/timetable'
import FriendsList from '@/components/timetable/FriendTimetable/FriendsList'

const FriendTimetablePage = () => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
          Friend list
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
        <FriendsList />
        {/* <Timetable semester={'Spring'} year={'2024'} timetableID={'dummy'} /> */}
      </div>
    </>
  )
}

export default FriendTimetablePage
