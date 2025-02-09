import { css } from '@styled-system/css'

import FriendsList from '@/components/timetable/Friend/FriendsList'
import FriendsManage from '@/components/timetable/Friend/FriendsManage'

const FriendPage = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        px: { base: 64, mdDown: 4 },
        mb: 40,
        alignItems: 'center',
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', maxW: '1131px', width: '100%' })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            Friend list
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: { base: 'row', mdDown: 'column' }, gap: 5 })}>
          <FriendsList />
          <FriendsManage />
        </div>
      </div>
    </div>
  )
}
export default FriendPage
