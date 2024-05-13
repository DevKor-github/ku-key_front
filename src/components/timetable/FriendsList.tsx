import { css } from '@styled-stytem/css'

// dummy data
const friendsList = ['하승준', '이지원', '이시흔', '정연승', '차승민', '김성현', '김현아', '박정우']

const FriendsList = () => {
  return (
    <div className={css({ w: '160px', display: 'flex', flexDir: 'column', gap: '14px' })}>
      <button
        className={css({
          h: '48px',
          bgColor: 'lightGray.2',
          borderRadius: 10,
          border: '1px {colors.darkGray.1} solid',
          textAlign: 'center',
          color: 'darkGray.1',
          fontSize: 15,
          fontWeight: '500',
          wordWrap: 'break-word',
          cursor: 'pointer',
        })}
      >
        + Plus friend
      </button>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '1px',
          bgColor: 'lightGray.2',
          borderRadius: 10,
          border: '1px {colors.darkGray.1} solid',
        })}
      >
        {friendsList.map(friend => {
          return (
            <button key={friend} className={css({ h: '45px', cursor: 'pointer' })}>
              {friend}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FriendsList
