import { css } from '@styled-stytem/css'

import FriendsList from '@/components/timetable/FriendTimetable/FriendsList'
import FriendsManage from '@/components/timetable/FriendTimetable/FriendsManage'

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
        <FriendsManage />
      </div>
    </>
  )
}

export default FriendTimetablePage
