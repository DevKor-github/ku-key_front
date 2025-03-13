import { useMemo, useRef } from 'react'

import * as s from './style.css'

import { useReadTodayTimetable } from '@/domain/Timetable/hooks/useReadTodayTimetable'
import ScheduleItem from '@/features/HomeContents/components/ScheduleItem'
import { useScrollToCurrentSchedule } from '@/features/HomeContents/hooks/useScrollToCurrentSchedule'
import { TodayCourseDto } from '@/packages/api/ku-key/models'
import { getCurSemester } from '@/util/timetableUtil'

const HomeContentsSchedule = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { year, semester } = getCurSemester()
  const { data: todayTimetable } = useReadTodayTimetable({
    semester: semester.toString(),
    year: year.toString(),
  })

  const { courses = [], schedules = [] } = todayTimetable

  const normalizeScheduleItemAsCourse = schedules.map<TodayCourseDto>(schedule => ({
    ...schedule,
    courseName: schedule.scheduleName,
    professorName: '',
    classroom: schedule.location,
    startTime: schedule.startTime,
    endTime: schedule.endTime,
  }))

  const timeToTodayDate = (timeString: string) => {
    const today = new Date()
    const todayStr = today.toISOString().split('T')[0] // YYYY-MM-DD 형식
    const dateTimeStr = `${todayStr}T${timeString}` // YYYY-MM-DDT12:00:00 형식

    return new Date(dateTimeStr)
  }

  const todaySchedules = [...courses, ...normalizeScheduleItemAsCourse]
    .filter(
      (schedule): schedule is typeof schedule & { startTime: Date; endTime: Date } =>
        Boolean(schedule.startTime) && Boolean(schedule.endTime),
    )
    .map(schedule => ({
      ...schedule,
      startTime: timeToTodayDate(schedule.startTime),
      endTime: timeToTodayDate(schedule.endTime),
    }))
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())

  const currentScheduleIndex = todaySchedules.findIndex(schedule => {
    const now = new Date()
    return now >= schedule.startTime && now <= schedule.endTime
  })

  useScrollToCurrentSchedule({ scrollRef, currentScheduleIndex })

  const renderSchedule = useMemo(() => {
    if (!todaySchedules.length) return <div>No Schedule for today!</div>
    return todaySchedules.map((schedule, index) => (
      <ScheduleItem key={schedule.courseName} {...schedule} isLast={index === todaySchedules.length - 1} />
    ))
  }, [todaySchedules])

  return (
    <div className={s.Wrapper}>
      <div className={s.InnerWrapper}>
        <div className={s.ScrollWrapper} ref={scrollRef}>
          {renderSchedule}
        </div>
      </div>
    </div>
  )
}

export default HomeContentsSchedule
