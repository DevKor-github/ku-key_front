export type DayStatus = 'THIS_MONTH' | 'PREV_MONTH' | 'NEXT_MONTH'
export interface DayProps {
  status: DayStatus
  date: Date
  selected: boolean
}
