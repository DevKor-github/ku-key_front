import { css } from '@styled-stytem/css'

import { ProgressState } from '@/types/register'

interface ProgressIndicatorProps {
  stageState: ProgressState
}
const ProgressIndicator = ({ stageState }: ProgressIndicatorProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        pos: 'absolute',
        h: '2px',
        w: 'calc(100% - 80px)',
        left: 10,
        bgColor: 'lightGray.1',
        zIndex: -1,
      })}
    >
      <div
        className={css({
          display: 'flex',
          h: '2px',
          bgColor: 'red.2',
          transition: 'all 0.5s',
        })}
        style={{ width: `${(stageState - 1) * 50}%` }}
      />
      <div
        className={css({
          display: 'flex',
          h: '2px',
          bg: 'linear-gradient(to right, {colors.red.2}, #D9D9D9)',
          transition: 'all 0.5s',
        })}
        style={{ width: `${stageState === 3 ? '0%' : '40%'}` }}
      />
    </div>
  )
}

export default ProgressIndicator
