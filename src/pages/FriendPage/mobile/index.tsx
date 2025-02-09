import * as s from './style.css'

import FriendList from '@/features/Friend/components/FriendList'
import FriendRequestStatus from '@/features/Friend/components/FriendRequestStatus'
import Input from '@/ui/Input'

const MobileFriendPage = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Header}>
        <Input variant="search" placeholder="Search your friend’s username" />
        <FriendRequestStatus />
      </div>
      <FriendList />
    </div>
  )
}
export default MobileFriendPage
