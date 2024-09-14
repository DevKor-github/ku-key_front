import { css } from '@styled-system/css'

import { ProgressState } from '@/types/register'

interface ProgressNumberProps {
  currentStage: ProgressState
  stageState: ProgressState
}
const ProgressNumber = ({ currentStage, stageState }: ProgressNumberProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        w: 10,
        h: 10,
        rounded: 'full',
        bgColor: currentStage <= stageState ? 'red.2' : 'lightGray.1',
        color: 'white',
        fontSize: 24,
        fontWeight: 700,
        transition: 'background-color 0.3s ease-in-out',
        smDown: { fontSize: 16 },
      })}
    >
      {currentStage}
    </div>
  )
}

export default ProgressNumber
