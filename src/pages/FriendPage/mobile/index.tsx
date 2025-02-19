import { UserPlusIcon } from '@heroicons/react/24/solid'

import * as s from './style.css'

import FriendList from '@/features/Friend/components/FriendList'
import FriendRequestStatus from '@/features/Friend/components/FriendRequestStatus'
import Input from '@/ui/Input'

const MobileFriendPage = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Header}>
        <div className={s.Search}>
          <Input variant="search" placeholder="Search your friend’s username" />
          <button className={s.UserPlusButton}>
            <UserPlusIcon />
          </button>
        </div>
        <FriendRequestStatus />
      </div>
      <FriendList />
    </div>
  )
}
export default MobileFriendPage
