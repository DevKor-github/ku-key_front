import { css } from '@styled-stytem/css'

interface PointStatusProps {
  name: string
  point: number
}
const PointStatus = ({ name, point }: PointStatusProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: '22px',
        px: '30px',
        bgColor: 'red.2',
        color: 'white',
      })}
    >
      <span className={css({ fontSize: 28, fontWeight: 600 })}>Hello, {name}</span>
      <span className={css({ fontSize: 26, fontWeight: 600 })}>your sugar | {point}</span>
    </div>
  )
}

export default PointStatus
