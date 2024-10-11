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
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 3, smDown: '6.85px' }, smDown: { mr: 4 } })}>
      <p className={css({ fontSize: { base: 26, mdDown: 20, smDown: 16 }, fontWeight: 'semibold', lineHeight: 1.2 })}>
        {dueTitle}
      </p>
      <div className={css({ w: 'full', border: 'solid black', borderWidth: { base: '0.6px', smDown: '0.281px' } })} />
      <p
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: { base: 2, smDown: 0.5 },
          fontSize: { base: 26, mdDown: 20, smDown: 12 },
          lineHeight: 1.2,
          fontWeight: 700,
        })}
      >
        {dueDate}
        <span
          className={css({
            fontWeight: { base: 'medium', smDown: 400 },
            fontSize: { base: 18, mdDown: 14, smDown: 9 },
            lineHeight: 1.2,
          })}
        >
          {date}
        </span>
      </p>
    </div>
  )
}

export default GenericDueDate
