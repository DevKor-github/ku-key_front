import { UsersIcon } from '@heroicons/react/24/solid'

import * as s from './style.css'

import { useGetReceivedCount } from '@/features/Friend/hooks/useGetReceivedCount'
import { Typography } from '@/ui/Typography'

const FriendRequestStatus = () => {
  const { data } = useGetReceivedCount()

  const isUnread = data.unreadCount > 0

  return (
    <div className={s.Wrapper}>
      <div className={s.Request}>
        <div className={s.ImagePreview}>
          <img className={s.Image} style={{ top: 0, left: 0, zIndex: 0, backgroundColor: 'coral' }} src="" alt="" />
          <img
            className={s.Image}
            style={{ right: 0, bottom: 0, zIndex: 1, backgroundColor: 'orange' }}
            src=""
            alt=""
          />
        </div>
        <div className={s.Description}>
          <Typography variant="mobile" typography="bodyM">
            Friend Request
          </Typography>
          <Typography variant="mobile" typography="miniTag1R" color="darkGray1">
            You can approve or ignore the request
          </Typography>
        </div>
      </div>
      <div className={s.Chip({ unread: isUnread })}>
        <span>{isUnread ? '+' : <UsersIcon className={s.UsersIcon} />}</span>
        <span>{isUnread ? data.unreadCount : data.totalCount}</span>
      </div>
    </div>
  )
}
export default FriendRequestStatus
