import { css } from '@styled-stytem/css'

import { useGetReceivedList } from '@/api/hooks/friends'
import FriendCard from '@/components/timetable/FriendTimetable/FriendCard'

const FriendRequest = () => {
  const { data: requestData } = useGetReceivedList()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <div className={css({ display: 'flex', gap: 3, alignItems: 'center' })}>
        <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Friend request</h2>
        <div className={css({ fontWeight: 500, fontSize: 14, color: 'lightGray.1' })}>
          You can approve or ignore the request
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        {requestData.length === 0 ? (
          <div
            className={css({
              fontWeight: 600,
              fontSize: 16,
              color: 'lightGray.1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: 5,
            })}
          >
            No friend requests yet
          </div>
        ) : (
          requestData.map(request => <FriendCard key={request.friendshipId} data={request} />)
        )}
      </div>
    </div>
  )
}

export default FriendRequest