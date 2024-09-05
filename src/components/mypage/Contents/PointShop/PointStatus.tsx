import { css } from '@styled-stytem/css'

interface PointStatusProps {
  name: string
  point: number
}
const PointStatus = ({ name, point }: PointStatusProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, alignItems: 'stretch' })}>
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
        <span className={css({ fontSize: 26, display: 'flex', alignItems: 'center', gap: 5 })}>
          <span className={css({ fontWeight: 500 })}>your sugar</span>
          <span>|</span>
          <span className={css({ fontWeight: 600 })}>{point}</span>
        </span>
      </div>
    </div>
  )
}

export default PointStatus
