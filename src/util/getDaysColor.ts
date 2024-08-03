import { css } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types'
import { isEqual } from 'date-fns'

import { DayProps } from '@/types/calendar'

export const getDayStyles = (day: DayProps, date: Date) => {
  const today = new Date()
  let styles: SystemStyleObject = {}
  if (isEqual(today.toLocaleDateString(), day.date.toLocaleDateString()))
    styles = { ...styles, bgColor: 'red.2', color: 'white' }
  if (
    isEqual(date.toLocaleDateString(), day.date.toLocaleDateString()) &&
    !isEqual(today.toLocaleDateString(), date.toLocaleDateString())
  ) {
    styles = { ...styles, border: '1px solid red' }
  }
  return css({ color: day.status !== 'THIS_MONTH' ? 'lightGray.1' : '#2D2D2D', ...styles })
}
