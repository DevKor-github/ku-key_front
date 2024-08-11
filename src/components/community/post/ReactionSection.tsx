import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { Bookmark, CircleAlert, Cookie } from 'lucide-react'
import { memo, useCallback } from 'react'

import { usePostReaciton, usePostScrap } from '@/api/hooks/community'
import ReactionButton from '@/components/community/post/ReactionButton'
import ReactionView from '@/components/community/post/ReactionView'
import ModalCard from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { postAtom } from '@/lib/store/post'
import { ReactionType } from '@/types/community'
import { useModal } from '@/util/useModal'

const ReactionSection = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const { isOpen, handleOpen, handleClose } = useModal(true)
  const { mutate: mutateReaction } = usePostReaciton()
  const { mutate: mutateScrap } = usePostScrap()
  const handleReacitonSet = useCallback(
    (i: number) => {
      if (postAtomData.isMyPost) return handleOpen()
      mutateReaction({ postId: postAtomData.id, reaction: i })
    },
    [postAtomData, handleOpen, mutateReaction],
  )
  const handleScrap = useCallback(() => {
    if (postAtomData.isMyPost) return handleOpen()
    mutateScrap(postAtomData.id)
  }, [postAtomData, handleOpen, mutateScrap])
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
        {Object.entries(postAtomData.reactionCount).map(([reactionType, count]) => (
          <ReactionView reaction={reactionType as ReactionType} count={count} key={reactionType} />
        ))}
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' })}>
        <Cookie size={22} className={css({ color: 'lightGray.1' })} />
        {Object.keys(postAtomData.reactionCount).map((reactionType, i) => (
          <ReactionButton
            key={reactionType}
            active={postAtomData.myReaction === i}
            reaction={reactionType as ReactionType}
            handleReactionSet={() => handleReacitonSet(i)}
          />
        ))}
        <button className={reactionButton()} aria-pressed={postAtomData.myScrap} onClick={handleScrap}>
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
})

export default ReactionSection
