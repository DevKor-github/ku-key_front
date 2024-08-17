import { css } from '@styled-stytem/css'

interface RatePercentageProps {
  rate: number
  total: number
}
const RatePercentage = ({ rate, total }: RatePercentageProps) => {
  return (
    <div className={css({ position: 'relative', w: 15, overflow: 'hidden', rounded: 'full', h: 1 })}>
      <div
        className={css({ position: 'absolute', zIndex: 1, bgColor: 'red.3', h: '100%', top: 0, left: 0 })}
        style={{ width: `${(100 * rate) / total}%` }}
      />
      <div className={css({ zIndex: 0, bgColor: 'lightGray.1', h: '100%', w: '100%' })} />
    </div>
  )
}

export default RatePercentage
