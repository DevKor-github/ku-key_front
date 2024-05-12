import { css } from '@styled-stytem/css'

import TimeTable from '@/components/timetable/TimeTable'
import { ToolbarBtn } from '@/pages/TimeTablePage'

const MyTimeTablePage = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <div className={css({ display: 'flex', flexDir: 'column', padding: '0 80px' })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', margin: '25px 0' })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <div className={css({ display: 'flex', flexDir: 'row', gap: '6px' })}>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
          </div>
        </div>
        <TimeTable semester={'Spring'} year={'2024'} />
      </div>
    </div>
  )
}

export default MyTimeTablePage
