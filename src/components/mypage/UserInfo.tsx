import { css } from '@styled-stytem/css'

import Cookie from '@/assets/cookie.svg'
import { Chip } from '@/components/ui/chip'

const UserInfo = () => {
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
          gap: { base: 13, mdDown: 1 },
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
          김현아
        </p>
        <p>님</p>
        <p>🇸🇬</p>
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
        <img src={Cookie} alt="cookie" className={css({ w: { base: 37, mdDown: 21 } })} />
        <p>180p</p>
      </div>
      <div className={css({ display: 'flex', gap: 2, mt: 5 })}>
        <Chip variant="default">KOR</Chip>
        <Chip variant="red3">ENG</Chip>
        <Chip variant="red4">JPN</Chip>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: { base: 2, mdDown: 1 },
          mt: { base: 12, mdDown: 4 },
        })}
      >
        <p className={css({ fontSize: { base: 20, mdDown: 11 }, fontWeight: 600, lineHeight: 'normal' })}>Singapore</p>
        <p className={css({ fontSize: { base: 24, mdDown: 13 }, fontWeight: 700, lineHeight: 'normal' })}>
          Nanyang Technological UNIV
        </p>
      </div>
    </div>
  )
}

export default UserInfo
