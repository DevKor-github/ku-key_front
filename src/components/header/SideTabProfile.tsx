import { css } from '@styled-system/css'
import { hasFlag } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import { useGetMyProfile } from '@/api/hooks/user'
import Sugar from '@/assets/Sugar_md.png'
import { Chip } from '@/components/ui/chip'
import { characterConfig } from '@/components/ui/profile/CharacterConfig'

const SideTabProfile = () => {
  const { data: myProfileData } = useGetMyProfile()
  const variantsArray: ('default' | 'red3' | 'red4')[] = ['default', 'red3', 'red4']

  return (
    <div
      className={css({
        display: 'flex',
        bgColor: 'lightGray.2',
        rounded: 10,
        px: 4,
        py: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxH: 117,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', gap: 2.5 })}>
        <div className={css({ display: 'flex', gap: 1.5, alignItems: 'center' })}>
          <p className={css({ textStyle: 'heading3_L', lineHeight: '100%' })}>{myProfileData.username}</p>
          <p>
            {hasFlag(myProfileData.country.toUpperCase()) && getUnicodeFlagIcon(myProfileData.country.toUpperCase())}
          </p>
        </div>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            textStyle: 'body2_M',
            gap: 1,
          })}
        >
          <img src={Sugar} alt="sugar" className={css({ w: '18px' })} />
          <p>{myProfileData.point}</p>
        </div>
        <div className={css({ display: 'flex', gap: 1 })}>
          {myProfileData.languages.map((lan, ind) => (
            <Chip variant={variantsArray[ind % variantsArray.length]} key={lan}>
              {lan.toUpperCase()}
            </Chip>
          ))}
        </div>
      </div>
      <img
        src={characterConfig[myProfileData.type][myProfileData.selectedLevel]}
        alt="profile"
        className={css({ w: 15, bgColor: '#D9D9D9', rounded: 'full' })}
      />
    </div>
  )
}

export default SideTabProfile
