import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import fakeTimetable from '@/assets/fake-timetable.jpg'
import { Typography } from '@/ui/Typography'

const FakeTimetable = () => {
  const navigate = useNavigate()
  return (
    <div
      className={s.Wrapper}
      style={{ backgroundImage: `url(${fakeTimetable})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    >
      <button className={s.Button} onClick={() => navigate('/login')}>
        <Typography typography="heading2SB" color="red2" mobileTypography="miniTag2">
          Login and Create Your Timetable!
        </Typography>
      </button>
    </div>
  )
}

export default FakeTimetable
