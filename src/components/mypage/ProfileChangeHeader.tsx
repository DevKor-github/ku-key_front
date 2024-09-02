import { css } from '@styled-stytem/css'

interface ProfileChangeHeaderProps {
  type: 'public' | 'exchange'
}
const ProfileChangeHeader = ({ type }: ProfileChangeHeaderProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, p: 1 })}>
      <h1
        className={css({
          fontSize: 30,
          fontWeight: 700,
        })}
      >
        {type === 'public' ? 'Public' : 'Exchange'} Profile
      </h1>
      <p
        className={css({
          color: 'darkGray.1',
          fontSize: 18,
          fontWeight: 500,
        })}
      >
        {type === 'public'
          ? 'Please enter your basic information'
          : 'Please enter information about your exchange student period'}
      </p>
    </div>
  )
}

export default ProfileChangeHeader
