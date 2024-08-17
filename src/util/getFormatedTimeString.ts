import { formatDistanceToNow } from 'date-fns'

export const getFormatedTimeString = (date: Date) => {
  return formatDistanceToNow(date) + ' ago'
}
