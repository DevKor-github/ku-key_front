import { css } from '@styled-system/css'
import { hasFlag } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { findByAlpha2 } from 'iso-3166-1-ts'

import Sugar from '@/assets/Sugar_md.png'
import { Chip } from '@/components/ui/chip'
import { Language } from '@/lib/constants/language'

interface UserInfoProps {
  name: string
  country: string
  point: number
  languages: Language[]
  homeUniversity: string
}
const UserInfo = ({ name, country, point, languages, homeUniversity }: UserInfoProps) => {
  const variantsArray: ('default' | 'red3' | 'red4')[] = ['default', 'red3', 'red4']
  return (
    <div
      className={css({
        zIndex: 10,
        flex: 1,
        display: 'flex',
        flexDir: 'column',
        gap: { base: 3, mdDown: 1 },
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: { base: 6, mdDown: 1 },
          fontWeight: 'bold',
          fontSize: { base: 48, mdDown: 20 },
          alignItems: 'flex-end',
        })}
      >
        <p>{name}</p>
        <p>{hasFlag(country.toUpperCase()) && getUnicodeFlagIcon(country.toUpperCase())}</p>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          fontSize: { base: 30, mdDown: 18 },
          fontWeight: 'bold',
          color: 'white',
          gap: 2.5,
        })}
      >
        <img src={Sugar} alt="sugar" className={css({ w: { base: 10, mdDown: 5 } })} />
        <p>{point}</p>
      </div>
      <div className={css({ display: 'flex', gap: 2, mt: 5 })}>
        {languages.map((lan, ind) => (
          <Chip variant={variantsArray[ind % variantsArray.length]} key={lan}>
            {lan.toUpperCase()}
          </Chip>
        ))}
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: { base: 2, mdDown: 1 },
          mt: { base: 12, mdDown: 4 },
        })}
      >
        <p className={css({ fontSize: { base: 20, mdDown: 11 }, fontWeight: 600, lineHeight: 'normal' })}>
          {findByAlpha2(country)?.name}
        </p>
        <p className={css({ fontSize: { base: 24, mdDown: 13 }, fontWeight: 700, lineHeight: 'normal' })}>
          {homeUniversity}
        </p>
      </div>
    </div>
  )
}

export default UserInfo
