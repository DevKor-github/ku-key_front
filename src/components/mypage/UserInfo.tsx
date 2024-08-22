import { css } from '@styled-stytem/css'
import { hasFlag } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { findByAlpha2 } from 'iso-3166-1-ts'

import Cookie from '@/assets/cookie.svg'
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
          gap: { base: 3, mdDown: 1 },
          fontWeight: 'bold',
          fontSize: { base: 34, mdDown: 20 },
          alignItems: 'flex-end',
        })}
      >
        <p
          className={css({
            fontSize: { base: 40, mdDown: 24 },
          })}
        >
          {name}
        </p>
        <p>님</p>
        <p>{hasFlag(country) && getUnicodeFlagIcon(country)}</p>
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
        <img src={Cookie} alt="cookie" className={css({ w: { base: 9, mdDown: 5 } })} />
        <p>{point}p</p>
      </div>
      <div className={css({ display: 'flex', gap: 2, mt: 5 })}>
        {languages.map(lan => (
          <Chip variant="default" key={lan}>
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
