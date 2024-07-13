import { css } from '@styled-stytem/css'

import { useGetReceivedList, useGetRequestedList } from '@/api/hooks/friends'
import FriendCard from '@/components/timetable/Friend/FriendCard'

const FriendRequest = () => {
  const { data: recievedList } = useGetReceivedList()
  const { data: requestedList } = useGetRequestedList()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <div className={css({ display: 'flex', gap: 3, alignItems: 'center' })}>
        <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Friend request</h2>
        <div className={css({ fontWeight: 500, fontSize: 14, color: 'lightGray.1' })}>
          You can approve or ignore the request
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        {recievedList.length === 0 && requestedList.length === 0 ? (
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
            {recievedList.map(recieve => (
              <FriendCard type="recieved" key={recieve.friendshipId} data={recieve} />
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
