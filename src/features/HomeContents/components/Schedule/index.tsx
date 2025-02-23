import * as s from './style.css'

import ScheduleItem from '@/features/HomeContents/components/ScheduleItem'

const HomeContentsSchedule = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.InnerWrapper}>
        <div className={s.ScrollWrapper}>
          <ScheduleItem
            title="Fashion Industry and Sustainable Development"
            professor="Hwang Jeong-seon"
            location="Media Hall 901"
            startTime={new Date('2025-02-23T10:00:00')}
            endTime={new Date('2025-02-23T11:00:00')}
          />
          <ScheduleItem
            title="Fashion Industry and Sustainable Development"
            professor="Hwang Jeong-seon"
            location="Media Hall 901"
            startTime={new Date('2025-02-23T15:00:00')}
            endTime={new Date('2025-02-23T16:00:00')}
          />
          <ScheduleItem
            title="Fashion Industry and Sustainable Development"
            professor="Hwang Jeong-seon"
            location="Media Hall 901"
            startTime={new Date('2025-02-23T17:00:00')}
            endTime={new Date('2025-02-23T18:00:00')}
          />
          <ScheduleItem
            title="Fashion Industry and Sustainable Development"
            professor="Hwang Jeong-seon"
            location="Media Hall 901"
            startTime={new Date('2025-02-23T19:00:00')}
            endTime={new Date('2025-02-23T20:00:00')}
          />
          <ScheduleItem
            title="Fashion Industry and Sustainable Development"
            professor="Hwang Jeong-seon"
            location="Media Hall 901"
            startTime={new Date('2025-02-23T21:00:00')}
            endTime={new Date('2025-02-23T22:00:00')}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeContentsSchedule
