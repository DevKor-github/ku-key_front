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
        gap: { base: 3, lgDown: 1, smDown: 0 },
        smDown: {
          pos: 'absolute',
          top: '33px',
          left: 7,
        },
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: { base: 6, lgDown: 3, smDown: 2 },
          fontWeight: 600,
          fontSize: { base: 48, lgDown: 32, smDown: 20 },
          alignItems: 'flex-end',
        })}
      >
        <p>{name}</p>
        <p>{hasFlag(country.toUpperCase()) && getUnicodeFlagIcon(country.toUpperCase())}</p>
      </div>
      <div
        className={css({
          display: { base: 'flex', smDown: 'none' },
          alignItems: 'center',
          fontSize: { base: 30, lgDown: 22 },
          fontWeight: 'bold',
          color: 'white',
          gap: { base: 2.5, lgDown: 1 },
        })}
      >
        <img src={Sugar} alt="sugar" className={css({ w: { base: 10, lgDown: 6 } })} />
        <p>{point}</p>
      </div>
      <div
        className={css({
          display: 'flex',
          gap: { base: 2, lgDown: 1, smDown: '0.2rem' },
          mt: { base: 5, lgDown: 2, smDown: '0.53rem' },
        })}
      >
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
          gap: { base: 2, lgDown: 1, smDown: '1.7px' },
          mt: { base: 12, lgDown: 6, smDown: '1.06rem' },
        })}
      >
        <p
          className={css({
            fontSize: { base: 20, lgDown: 16, smDown: 12 },
            fontWeight: { base: 600, smDown: 400 },
            lineHeight: 1.2,
          })}
        >
          {findByAlpha2(country)?.name}
        </p>
        <p
          className={css({
            fontSize: { base: 24, lgDown: 18, smDown: 14 },
            fontWeight: { base: 700, smDown: 500 },
            lineHeight: 1.2,
          })}
        >
          {homeUniversity}
        </p>
      </div>
    </div>
  )
}

export default UserInfo
