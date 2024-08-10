import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { Bookmark, CircleAlert, Cookie } from 'lucide-react'
import { useCallback, useState } from 'react'

import ReactionButton from '@/components/community/post/ReactionButton'
import ReactionView from '@/components/community/post/ReactionView'
import ModalCard from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { postAtom } from '@/lib/store/post'
import { ReactionType } from '@/types/community'
import { useModal } from '@/util/useModal'

const ReactionSection = () => {
  const postAtomData = useAtomValue(postAtom)
  const [currentReaction, setCurrentReaction] = useState<Set<ReactionType>>(new Set([]))
  const [scrap, setScrap] = useState(false)
  const { isOpen, handleOpen, handleClose } = useModal(true)
  const handleReacitonSet = useCallback(
    (reactionType: ReactionType) => {
      if (postAtomData.isMyPost) return handleOpen()
      setCurrentReaction(prev => {
        if (prev.has(reactionType)) {
          prev.delete(reactionType)
          return new Set(prev)
        }
        prev.clear()
        prev.add(reactionType)
        return new Set(prev)
      })
    },
    [postAtomData, handleOpen],
  )
  const handleScrap = useCallback(() => {
    if (postAtomData.isMyPost) return handleOpen()
    setScrap(prev => !prev)
  }, [postAtomData, handleOpen])
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
        {Object.entries(postAtomData.reaction).map(([reactionType, count]) => (
          <ReactionView reaction={reactionType as ReactionType} count={count} key={reactionType} />
        ))}
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' })}>
        <Cookie size={22} className={css({ color: 'lightGray.1' })} />
        {Object.keys(postAtomData.reaction).map(reactionType => (
          <ReactionButton
            key={reactionType}
            active={currentReaction.has(reactionType as ReactionType)}
            reaction={reactionType as ReactionType}
            handleReactionSet={handleReacitonSet}
          />
        ))}
        <button className={reactionButton()} aria-pressed={scrap} onClick={handleScrap}>
          <Bookmark />
          {postAtomData.scrapCount}
        </button>
      </div>
      <ModalPortal selfClose={true} isOpen={isOpen} handleClose={handleClose}>
        <ModalCard>
          <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
            <CircleAlert size={20} className={css({ color: 'white', fill: 'red.3' })} />
            <p className={css({ fontSize: 20, fontWeight: 800, color: 'red.1' })}>Notice</p>
          </div>
          <p className={css({ fontSize: 18, fontWeight: 500, color: 'red.1' })}>
            Reaction is not allowed on your own post
          </p>
        </ModalCard>
      </ModalPortal>
    </section>
  )
}

export default ReactionSection
