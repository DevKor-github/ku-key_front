import { css } from '@styled-stytem/css'

import { ReactionType } from '@/types/community'
import { getReactionImg } from '@/util/getReactionImg'

interface ReactionViewProps {
  reaction: ReactionType
  count: number
}
const ReactionView = ({ reaction, count }: ReactionViewProps) => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
      <img src={getReactionImg(reaction)} alt={reaction} className={css({ w: 6, h: 6 })} />
      <p className={css({ fontSize: 16, fontWeight: 600, color: 'darkGray.2' })}>{count}</p>
    </div>
  )
}

export default ReactionView
