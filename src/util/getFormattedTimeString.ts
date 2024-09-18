import { formatDistanceToNow } from 'date-fns'

export const getFormattedTimeString = (date: Date) => {
  return formatDistanceToNow(date) + ' ago'
}
