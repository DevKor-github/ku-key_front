import { css } from '@styled-stytem/css'

import { Input } from '@/components/ui/input'

interface ProfileInputForm {
  type: 'Name' | 'Nation' | 'Origin Univ' | 'Major' | 'Language'
  placeholder?: string
}
const ProfileInputForm = ({ type, placeholder }: ProfileInputForm) => {
  return (
    <div className={css({ display: 'flex', gap: 5, alignItems: 'stretch' })}>
      <span
        className={css({
          flexShrink: 0,
          w: '189px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgColor: 'lightGray.1',
          fontSize: 20,
          fontWeight: 700,
        })}
      >
        {type}
      </span>
      <Input placeholder={placeholder} />
    </div>
  )
}

export default ProfileInputForm
