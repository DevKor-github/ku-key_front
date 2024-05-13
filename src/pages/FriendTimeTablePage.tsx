import { css } from '@styled-stytem/css'

import FriendsList from '@/components/timetable/FreindsList'
import TimeTable from '@/components/timetable/TimeTable'
import { ToolbarBtn } from '@/pages/TimeTablePage'

const FriendTimeTablePage = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <div className={css({ display: 'flex', flexDir: 'column', px: '80px' })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: '25px' })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            Friend List
          </div>
          <div className={css({ display: 'flex', flexDir: 'row', gap: '6px' })}>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: '20px', pb: '343px' })}>
          <FriendsList />
          <TimeTable semester={'Spring'} year={'2024'} />
        </div>
      </div>
    </div>
  )
}

export default FriendTimeTablePage
