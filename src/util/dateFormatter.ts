interface DateFormatterProps {
  date: Date
  space?: boolean
}
const dateFormatter = ({ date, space = false }: DateFormatterProps) => {
  const spaceStr = space ? ' ' : ''
  return `${date.getFullYear()}.${spaceStr}${String(date.getMonth() + 1).padStart(2, '0')}.${spaceStr}${String(date.getDate()).padStart(2, '0')}`
}

export default dateFormatter
