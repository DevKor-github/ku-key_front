import { css } from '@styled-stytem/css'

// import Timetable from '@/components/timetable'
import { useGetFriendList } from '@/api/hooks/friends'
import FriendsList from '@/components/timetable/FriendTimetable/FriendsList'

const FriendTimetablePage = () => {
  const { data, isPending } = useGetFriendList({ keyword: null })

  console.log(isPending, data)
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
          Friend list
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
        <FriendsList data={data} />
        {/* <Timetable semester={'Spring'} year={'2024'} timetableID={'dummy'} /> */}
      </div>
    </>
  )
}

export default FriendTimetablePage
