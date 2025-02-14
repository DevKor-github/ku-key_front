import { MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/solid'

import * as s from './style.css'

const IconInstruction = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Instruction}>
        <MegaphoneIcon className={s.Icon} />
        <p>Recruitment period</p>
      </div>
      <div className={s.Instruction}>
        <UserGroupIcon className={s.Icon} />
        <p>Regular meeting</p>
      </div>
    </div>
  )
}
export default IconInstruction
