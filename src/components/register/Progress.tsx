import { css } from '@styled-stytem/css'

import ProgressIndicator from '@/components/register/ProgressIndicator'
import ProgressNumber from '@/components/register/ProgressNumber'
import { ProgressState } from '@/types/register'

interface ProgressProps {
  stageState: ProgressState
}
const Progress = ({ stageState }: ProgressProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        pos: 'relative',
        w: 'full',
        maxW: 378,
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
    >
      <ProgressNumber currentStage={1} stageState={stageState} />
      <ProgressIndicator stageState={stageState} />
      <ProgressNumber currentStage={2} stageState={stageState} />
      <ProgressNumber currentStage={3} stageState={stageState} />
    </div>
  )
}

export default Progress
