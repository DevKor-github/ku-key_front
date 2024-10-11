import { css } from '@styled-system/css'

interface GenericDueDateProps {
  type: 'start' | 'end'
  due: number
  date: string
}
const GenericDueDate = ({ type, due, date }: GenericDueDateProps) => {
  const dueDate = type === 'start' ? `D + ${due}` : `D - ${due}`
  const dueTitle = type === 'start' ? 'Start' : 'End'
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 3 })}>
      <p className={css({ fontSize: { base: 26, mdDown: 20, smDown: 11 }, fontWeight: 'semibold' })}>{dueTitle}</p>
      <div className={css({ w: 'full', border: '0.6px solid black' })} />
      <p
        className={css({
          fontSize: { base: 26, mdDown: 20, smDown: 11 },
          fontWeight: 'semibold',
        })}
      >
        {dueDate}{' '}
        <span className={css({ fontWeight: 'medium', fontSize: { base: 18, mdDown: 14, smDown: 8 } })}>{date}</span>
      </p>
    </div>
  )
}

export default GenericDueDate
