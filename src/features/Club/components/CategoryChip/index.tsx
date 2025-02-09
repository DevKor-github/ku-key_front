import * as s from './style.css'

interface Props {
  Icon: () => JSX.Element
  text: string
  onClick: () => void
  selected: boolean
}
const CategoryChip = ({ Icon, text, onClick, selected }: Props) => {
  const isAll = text === 'ALL'

  return (
    <button type="button" onClick={onClick} className={s.Wrapper({ selected, isAll })}>
      <span className={s.IconWrapper}>
        <Icon />
      </span>
      {!isAll && <p className={s.Text}>{text}</p>}
    </button>
  )
}
export default CategoryChip
