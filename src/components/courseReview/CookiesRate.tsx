import { css } from '@styled-stytem/css'

interface CookiesRateProps {
  rate: number
  size: number
  gap: number
}
const CookiesRate = ({ rate, size, gap }: CookiesRateProps) => {
  return (
    <span className={css({ display: 'flex', alignItems: 'center' })} style={{ gap: `${gap}px` }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={css({ rounded: 'full', bgColor: i < rate ? 'red.3' : 'lightGray.1' })}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ))}
    </span>
  )
}

export default CookiesRate
