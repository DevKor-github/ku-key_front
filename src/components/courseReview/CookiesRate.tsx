import { css } from '@styled-system/css'

import RateCookie from '@/assets/RateCookie.png'

interface CookiesRateProps {
  rate: number
  size: number
  gap: number
}
const CookiesRate = ({ rate, size, gap }: CookiesRateProps) => {
  return (
    <span className={css({ display: 'flex', alignItems: 'center' })} style={{ gap: `${gap}px` }}>
      {Array.from({ length: 5 }, (_, i) =>
        i < rate ? (
          <img
            key={i}
            src={RateCookie}
            alt="rate cookie"
            style={{ width: `${size}px`, height: `${size}px` }}
            className={css({ rounded: 'full' })}
          />
        ) : (
          <span
            key={i}
            className={css({ rounded: 'full', bgColor: 'lightGray.1' })}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ),
      )}
    </span>
  )
}

export default CookiesRate
