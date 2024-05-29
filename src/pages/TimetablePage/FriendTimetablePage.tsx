import { css } from '@styled-stytem/css'

// import Timetable from '@/components/timetable'
import FriendsList from '@/components/timetable/FriendsList'

// todo: 친구 시간표는 조금 더 고민해보자..

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
