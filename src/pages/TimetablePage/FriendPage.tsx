import { css } from '@styled-system/css'

import FriendsList from '@/components/timetable/Friend/FriendsList'
import FriendsManage from '@/components/timetable/Friend/FriendsManage'

const FriendPage = () => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
          Friend list
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: { base: 'row', mdDown: 'column' }, gap: 5 })}>
        <FriendsList />
        <FriendsManage />
      </div>
    </>
  )
}

export default FriendPage
