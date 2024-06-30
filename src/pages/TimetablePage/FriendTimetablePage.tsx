import { css } from '@styled-stytem/css'


const FriendTimetablePage = () => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
          Friend list
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
        친구 시간표
      </div>
    </>
  )
}

export default FriendTimetablePage
