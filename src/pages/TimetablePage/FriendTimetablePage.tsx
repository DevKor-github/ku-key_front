import { css } from '@styled-stytem/css'

import Timetable from '@/components/timetable'
import FriendsList from '@/components/timetable/FriendsList'
import { ToolbarBtn } from '@/pages/TimetablePage'

const FriendTimetablePage = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <div className={css({ display: 'flex', flexDir: 'column', px: 20 })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 6 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            Friend List
          </div>
          <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5 })}>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5, pb: 80 })}>
          <FriendsList />
          <Timetable semester={'Spring'} year={'2024'} />
        </div>
      </div>
    </div>
  )
}

export default FriendTimetablePage
