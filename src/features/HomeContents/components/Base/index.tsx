import { format } from 'date-fns'

import * as s from './style.css'

import FakeTimetable from '@/features/HomeContents/components/FakeTimetable'
import RecommendedLecture from '@/features/HomeContents/components/RecommendedLecture'
import HomeContentsSchedule from '@/features/HomeContents/components/Schedule'
import { Typography } from '@/ui/Typography'
import { useAuth } from '@/util/auth/useAuth'

const HomeContentsBase = () => {
  const { authState } = useAuth()
  const isLogin = authState
  const today = new Date()
  return (
    <section className={s.Wrapper}>
      <div className={s.Title}>
        <Typography typography="titleSB" color="black">
          {isLogin ? "Today's class" : 'Create Your Timetable'}
        </Typography>
        <Typography typography="body1M" color="darkGray1" className={s.TitleText}>
          {isLogin ? format(today, 'yyyy.MM.dd') : ''}
        </Typography>
      </div>
      <div className={s.ContentBox}>
        {isLogin ? <HomeContentsSchedule /> : <FakeTimetable />}
        <RecommendedLecture />
      </div>
    </section>
  )
}

export default HomeContentsBase
