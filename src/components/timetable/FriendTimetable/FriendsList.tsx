import { css } from '@styled-stytem/css'

// dummy data
// todo : 실물 데이터를 받아오는 로직
const friendsList = ['하승준', '이지원', '이시흔', '정연승', '차승민', '김성현', '김현아', '박정우']

const FriendsList = () => {
  return (
    <div className={css({ w: 47, display: 'flex', flexDir: 'column', gap: 3.5 })}>
      <button
        className={css({
          h: 12,
          bgColor: 'lightGray.2',
          rounded: 10,
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
          gap: 0.5,
          bgColor: 'lightGray.2',
          rounded: 10,
          border: '1px {colors.darkGray.1} solid',
        })}
      >
        {friendsList.map(friend => {
          return (
            <button key={friend} className={css({ h: 11, cursor: 'pointer' })}>
              {friend}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FriendsList
