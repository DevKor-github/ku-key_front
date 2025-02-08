import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import LeftArrow from '@/assets/icon/LeftArrow'

const MobileTopBar = () => {
  const navigate = useNavigate()

  return (
    <header className={s.Wrapper}>
      <button onClick={() => navigate(-1)}>
        <LeftArrow />
      </button>
    </header>
  )
}
export default MobileTopBar
