// import { isEqual } from 'date-fns'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

import { calendarAtom, selectedDateAtom, todayAtom } from '@/lib/store/calendar'
import { DayProps } from '@/types/calendar'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const DAY_NUMBER = 7
export const useCalendar = () => {
  const isMobile = useMediaQueryByName('smDown')
  const WEEK_NUMBER = isMobile ? 5 : 6
  const [today, setToday] = useAtom(todayAtom) //오늘 날짜
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom) //선택한 날짜
  const [calendar, setCalendar] = useAtom(calendarAtom)

  const handleSetSelectedDate = useCallback(
    (date: Date) => setSelectedDate(prev => (prev === date ? today : date)),
    [setSelectedDate, today],
  )
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
      { length: DAY_NUMBER * WEEK_NUMBER - (currentMonthStartDay + currentMonthLastDate) },
      (_, i) => ({
        status: 'NEXT_MONTH',
        date: new Date(today.getFullYear(), today.getMonth() + 1, nextMonthStartDate + i),
        selected: false,
      }),
    )
    const totalCalendar = [...prevMonth, ...currentMonth, ...nextMonth]
    setCalendar(Array.from({ length: 6 }, (_, i) => totalCalendar.slice(i * 7, (i + 1) * 7)))
  }, [today, setCalendar])
  return { today, selectedDate, calendar, setToday, handleSetSelectedDate }
}
