import { css } from '@styled-system/css'
import { reactionButton } from '@styled-system/recipes'

import { ReactionType } from '@/types/community'
import { getReactionImg } from '@/util/getReactionImg'

interface ReactionButtonProps {
  active: boolean
  reaction: ReactionType
  handleReactionSet: (reactionType: ReactionType) => void
}
const ReactionButton = ({ active, reaction, handleReactionSet }: ReactionButtonProps) => {
  return (
    <button aria-pressed={active} className={reactionButton()} onClick={() => handleReactionSet(reaction)}>
      <img src={getReactionImg(reaction)} alt={reaction} className={css({ w: 6, h: 6 })} />
      {reaction}
    </button>
  )
}

export default ReactionButton
