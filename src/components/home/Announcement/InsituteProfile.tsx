import { css } from '@styled-stytem/css'
import { useState } from 'react'

import { InsituteProfileProps } from '@/types/school-insitute'

const InsituteProfile = ({ img, name, url }: InsituteProfileProps) => {
  const [onMouse, setOnMouse] = useState(false)

  return (
    <div className={css({ display: 'inline-flex', flexDir: 'column', alignItems: 'center', gap: '5px' })}>
      <button
        className={css({
          display: 'flex',
          w: 20,
          h: 20,
          rounded: 10,
          filter: 'drop-shadow(0px 0px 3.5px rgba(0, 0, 0, 0.25))',
          transition: 'all 0.3s ease-out',
          boxShadow: onMouse ? '0px 0px 10px 0px rgba(255, 0, 0, 0.50)' : 'none',
          cursor: 'pointer',
        })}
        onMouseEnter={() => setOnMouse(true)}
        onMouseLeave={() => setOnMouse(false)}
        onClick={() => window.open(url, '_blank')}
      >
        <img
          src={img}
          alt={name}
          className={css({
            display: 'flex',
            w: 20,
            h: 20,
            rounded: 10,
          })}
        />
      </button>
      <div
        className={css({
          display: 'flex',
          w: 105,
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <p
          className={css({
            pt: 0.5,
            textStyle: 'body2_M',
            textAlign: 'center',
            color: 'black.2',
            transition: 'all 0.3s ease-out',
            textShadow: onMouse ? '0px 0px 10px rgba(255, 0, 0, 0.50)' : 'none',
          })}
        >
          {name}
        </p>
      </div>
    </div>
  )
}

export default InsituteProfile
