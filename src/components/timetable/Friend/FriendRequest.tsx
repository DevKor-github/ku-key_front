import { css } from '@styled-system/css'

import { useGetReceivedList, useGetRequestedList } from '@/api/hooks/friends'
import FriendCard from '@/components/timetable/Friend/FriendCard'

const FriendRequest = () => {
  const { data: receivedList } = useGetReceivedList()
  const { data: requestedList } = useGetRequestedList()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <div className={css({ display: 'flex', gap: 3, alignItems: 'center' })}>
        <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Friend request</h2>
        <div className={css({ fontWeight: 500, fontSize: 14, color: 'lightGray.1', mdDown: { display: 'none' } })}>
          You can approve or ignore the request
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        {receivedList.length === 0 && requestedList.length === 0 ? (
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
          <>
            {receivedList.map(receive => (
              <FriendCard type="received" key={receive.friendshipId} data={receive} />
            ))}
            {requestedList.map(request => (
              <FriendCard type="requested" key={request.friendshipId} data={request} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FriendRequest
