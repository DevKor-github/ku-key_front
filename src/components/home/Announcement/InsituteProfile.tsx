import { css, cva } from '@styled-stytem/css'
import { Link } from 'lucide-react'
import { useState } from 'react'

import { InsituteProfileProps } from '@/types/school-insitute'

const profile = cva({
  base: {
    display: 'inline-flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'ease-out',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
  },
  variants: {
    variant: { defalut: { gap: 0.5, py: 0 }, onMouse: { gap: 0, py: 0.5 } },
  },
  defaultVariants: {
    variant: 'defalut',
  },
})

const InsituteProfile = ({ img, name, url }: InsituteProfileProps) => {
  const [onMouse, setOnMouse] = useState(false)

  return (
    <button
      className={profile({ variant: onMouse ? 'onMouse' : 'defalut' })}
      onClick={() => window.open(url)}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
    >
      <div className={css({ pos: 'relative' })}>
        <img
          src={img}
          alt="insitute profile img"
          className={css({
            w: 20,
            h: 20,
            rounded: 8,
            filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25))',
          })}
        />
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            w: 20,
            h: 20,
            rounded: 8,
            bgColor: onMouse ? 'black' : 'none',
            opacity: 0.4,
            animation: 'ease-out',
            transition: 'all 0.3s ease-out',
          })}
        />

        <Link
          className={css({
            position: 'absolute',
            top: 7,
            left: 7,
            w: 7,
            h: 7,
          })}
          style={{
            display: 'flex',
            color: onMouse ? 'white' : 'transparent',
            animation: 'ease-out',
            transition: 'color 0.3s ease-out',
          }}
        />
      </div>

      <div className={css({ display: 'flex', w: 20, py: 1, px: 2.5, justifyContent: 'center', alignItems: 'center' })}>
        <p className={css({ fontSize: 12, fontWeight: 700, color: 'darkGray.1' })}>{name}</p>
      </div>
    </button>
  )
}

export default InsituteProfile
