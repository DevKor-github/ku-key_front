import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { Bookmark, Cookie } from 'lucide-react'
import { useCallback, useState } from 'react'

import ReactionButton from '@/components/community/post/ReactionButton'
import ReactionView from '@/components/community/post/ReactionView'
import { Reaction, ReactionType } from '@/types/community'

const ReactionSection = () => {
  const reaction: Reaction = {
    good: 5,
    sad: 0,
    amazing: 10,
    angry: 0,
    funny: 20,
  }
  const [currentReaction, setCurrentReaction] = useState<Set<ReactionType>>(new Set([]))
  const [scrap, setScrap] = useState(false)
  const handleReacitonSet = useCallback((reactionType: ReactionType) => {
    setCurrentReaction(prev => {
      if (prev.has(reactionType)) {
        prev.delete(reactionType)
        return new Set(prev)
      }
      prev.clear()
      prev.add(reactionType)
      return new Set(prev)
    })
  }, [])
  const handleScrap = useCallback(() => setScrap(prev => !prev), [])
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        gap: '50px',
      })}
    >
      <div className={css({ display: 'flex', alignItems: 'center', gap: 4, alignSelf: 'stretch' })}>
        {Object.entries(reaction).map(([reactionType, count]) => (
          <ReactionView reaction={reactionType as ReactionType} count={count} key={reactionType} />
        ))}
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 4 })}>
        <Cookie size={22} className={css({ color: 'lightGray.1' })} />
        {Object.keys(reaction).map(reactionType => (
          <ReactionButton
            key={reactionType}
            active={currentReaction.has(reactionType as ReactionType)}
            reaction={reactionType as ReactionType}
            handleReactionSet={handleReacitonSet}
          />
        ))}
        <button className={reactionButton()} aria-pressed={scrap} onClick={handleScrap}>
          <Bookmark />1
        </button>
      </div>
    </section>
  )
}

export default ReactionSection
