import * as s from './style.css'

import FakeTimetable from '@/features/HomeContents/components/FakeTimetable'
import RecommendedLecture from '@/features/HomeContents/components/RecommendedLecture'
import HomeContentsSchedule from '@/features/HomeContents/components/Schedule'
import { Typography } from '@/ui/Typography'
import { useAuth } from '@/util/auth/useAuth'

const HomeContentsBase = () => {
  const { authState } = useAuth()
  const showSchedule = authState
  return (
    <section className={s.Wrapper}>
      <Typography variant="desktop" typography="titleSB" color="black">
        Create Your Timetable
      </Typography>
      <div className={s.ContentBox}>
        {showSchedule ? <HomeContentsSchedule /> : <FakeTimetable />}
        <RecommendedLecture />
      </div>
    </section>
  )
}

export default HomeContentsBase
