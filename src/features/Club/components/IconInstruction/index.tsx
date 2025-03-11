import { HiUserGroup } from 'react-icons/hi'
import { HiMegaphone } from 'react-icons/hi2'

import * as s from './style.css'

const IconInstruction = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Instruction}>
        <HiMegaphone className={s.Icon} />
        <p>Recruitment period</p>
      </div>
      <div className={s.Instruction}>
        <HiUserGroup className={s.Icon} />
        <p>Regular meeting</p>
      </div>
    </div>
  )
}
export default IconInstruction
