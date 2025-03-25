import { HiX } from 'react-icons/hi'

import * as s from './style.css'

interface Props {
  onClick: () => void
}
const CloseButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={s.Wrapper} onClick={onClick}>
      <HiX />
    </button>
  )
}
export default CloseButton
