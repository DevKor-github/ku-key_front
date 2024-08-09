import { GetCalendarYearlyResponse } from '@/api/types/home_sub'

export const initialGetCalendarYearlyResponse: GetCalendarYearlyResponse = Array.from({ length: 12 }, (_, ind) => {
  return { month: ind + 1, monthEvents: [] }
})

export const academicSchedulePreprocess = (data: GetCalendarYearlyResponse) => {
  // 데이터 직렬화
  return data.map(month => {
    return month.monthEvents.flatMap(dayEvent => {
      return dayEvent.event.map(event => {
        return { date: dayEvent.date, ...event }
      })
    })
  })
}

export const numberToMonthAbb = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const
