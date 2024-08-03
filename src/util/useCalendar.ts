// import { isEqual } from 'date-fns'
import { useEffect, useState } from 'react'

import { DayProps } from '@/types/calendar'

export const useCalendar = () => {
  const [today, setToday] = useState(new Date()) //오늘 날짜
  const [date, setDate] = useState(today) //선택한 날짜
  const [calendar, setCalendar] = useState<DayProps[][]>([])

  const handleSetDate = (date: Date) => {
    // const selectedDateString = date.toLocaleDateString()
    setDate(date)
    // setCalendar(prevCalendar =>
    //   prevCalendar.map(week =>
    //     week.map(day => ({
    //       ...day,
    //       selected: isEqual(day.date.toLocaleDateString(), selectedDateString),
    //     })),
    //   ),
    // )
  }
  useEffect(() => {
    const currentMonthStartDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay() //현재 월 시작 요일
    const currentMonthStartDate = new Date(today.getFullYear(), today.getMonth(), 1).getDate() //현재 월 시작 날짜
    const currentMonthLastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() //현재 월 마지막 날짜
    const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate() //이전 월 마지막 날짜
    const prevMonthStartDate = prevMonthLastDate - currentMonthStartDay + 1 //이전 월 시작 날짜
    const nextMonthStartDate = 1 //다음 월 시작 날짜

    const prevMonth: DayProps[] = Array.from({ length: currentMonthStartDay }, (_, i) => ({
      status: 'PREV_MONTH',
      date: new Date(today.getFullYear(), today.getMonth() - 1, prevMonthStartDate + i),
      selected: false,
    }))
    const currentMonth: DayProps[] = Array.from({ length: currentMonthLastDate }, (_, i) => ({
      status: 'THIS_MONTH',
      date: new Date(today.getFullYear(), today.getMonth(), currentMonthStartDate + i),
      selected: false,
    }))
    const nextMonth: DayProps[] = Array.from(
      { length: 5 * 7 - (currentMonthStartDay + currentMonthLastDate) },
      (_, i) => ({
        status: 'NEXT_MONTH',
        date: new Date(today.getFullYear(), today.getMonth() + 1, nextMonthStartDate + i),
        selected: false,
      }),
    )
    const totalCalendar = [...prevMonth, ...currentMonth, ...nextMonth]
    setCalendar(Array.from({ length: 6 }, (_, i) => totalCalendar.slice(i * 7, (i + 1) * 7)))
  }, [today])
  return { today, date, calendar, setToday, handleSetDate }
}
