import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import fakeTimetable from '@/assets/fake-timetable.jpg'
import { Typography } from '@/ui/Typography'

const FakeTimetable = () => {
  const navigate = useNavigate()
  return (
    <div className={s.Wrapper} style={{ backgroundImage: `url(${fakeTimetable})`, backgroundSize: 'cover' }}>
      <button className={s.Button} onClick={() => navigate('/login')}>
        <Typography variant="desktop" typography="heading2SB" color="red2">
          로그인하고 내 시간표 만들기!
        </Typography>
      </button>
    </div>
  )
}

export default FakeTimetable
