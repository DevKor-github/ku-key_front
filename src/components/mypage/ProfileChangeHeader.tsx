import { css } from '@styled-system/css'

interface ProfileChangeHeaderProps {
  type: 'public' | 'exchange'
}
const ProfileChangeHeader = ({ type }: ProfileChangeHeaderProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 2.5, smDown: 1 }, p: 1 })}>
      <h1
        className={css({
          fontSize: { base: 30, mdDown: 16 },
          fontWeight: { base: 700, mdDown: 600 },
        })}
      >
        {type === 'public' ? 'Public' : 'Exchange'} Profile
      </h1>
      <p
        className={css({
          color: 'darkGray.1',
          fontSize: { base: 18, mdDown: 12 },
          fontWeight: { base: 500, mdDown: 400 },
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
