import * as s from './style.css'

import FakeTimetable from '@/features/HomeContents/components/FakeTimetable'
import RecommendedLecture from '@/features/HomeContents/components/RecommendedLecture'
import { Typography } from '@/ui/Typography'

const HomeContentsBase = () => {
  return (
    <section className={s.Wrapper}>
      <Typography variant="desktop" typography="titleSB" color="black">
        Create Your Timetable
      </Typography>
      <div className={s.ContentBox}>
        <FakeTimetable />
        <RecommendedLecture />
      </div>
    </section>
  )
}

export default HomeContentsBase
