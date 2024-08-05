import { css } from '@styled-stytem/css'

interface CookiesRateProps {
  rate: number
  size: number
  gap: number
}
const CookiesRate = ({ rate, size, gap }: CookiesRateProps) => {
  const rateArr = []
  for (let i = 0; i < 5; i++) {
    rateArr.push(
      <span
        key={i}
        className={css({ rounded: 'full', bgColor: i < rate ? 'red.3' : 'lightGray.1' })}
        style={{ width: `${size}px`, height: `${size}px` }}
      />,
    )
  }
  return (
    <span className={css({ display: 'flex', alignItems: 'center' })} style={{ gap: `${gap}px` }}>
      {rateArr}
    </span>
  )
}

export default CookiesRate
