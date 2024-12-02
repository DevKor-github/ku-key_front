import { css } from '@styled-system/css'
import { useState } from 'react'

import * as s from './style.css'

import { InstituteProfileProps } from '@/types/school-institute'

const InstituteProfile = ({ img, name, url }: InstituteProfileProps) => {
  const [onMouse, setOnMouse] = useState(false)

  return (
    <div className={s.Wrapper}>
      <button
        className={s.Profile({ onMouse })}
        onMouseEnter={() => setOnMouse(true)}
        onMouseLeave={() => setOnMouse(false)}
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      >
        <img src={img} alt={name} className={s.Image} />
      </button>
      <div className={s.TextWrapper}>
        <p
          className={css({
            pt: 0.5,
            textStyle: { base: 'body2_M', smDown: 'body3_M' },
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

export default InstituteProfile
