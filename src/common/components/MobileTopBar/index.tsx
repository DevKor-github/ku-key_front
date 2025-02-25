import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import LeftArrowIcon from '@/assets/icon/LeftArrowIcon'

const MobileTopBar = () => {
  const navigate = useNavigate()
  return (
    <header className={s.Wrapper}>
      <button onClick={() => navigate(-1)}>
        <LeftArrowIcon />
      </button>
    </header>
  )
}
export default MobileTopBar
