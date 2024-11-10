import { css } from '@styled-system/css'
import { reactionButton } from '@styled-system/recipes'
import { useAtomValue } from 'jotai'
import { Bookmark, Cookie } from 'lucide-react'
import { memo, useCallback } from 'react'

import { usePostReaction, usePostScrap } from '@/api/hooks/community'
import ReactionButton from '@/components/community/post/ReactionButton'
import ReactionView from '@/components/community/post/ReactionView'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { postAtom } from '@/lib/store/post'
import { ReactionType } from '@/types/community'
import { useModal } from '@/util/hooks/useModal'

const ReactionSection = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const { isOpen, handleOpen } = useModal(true)
  const { mutate: mutateReaction } = usePostReaction()
  const { mutate: mutateScrap } = usePostScrap()
  const handleReactionSet = useCallback(
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
            handleReactionSet={() => handleReactionSet(i)}
          />
        ))}
        <button className={reactionButton()} aria-pressed={postAtomData.myScrap} onClick={handleScrap}>
          <Bookmark />
          {postAtomData.scrapCount}
        </button>
      </div>
      <NoticeModal content="Reaction is not allowed on your own post" isOpen={isOpen} />
    </section>
  )
})

export default ReactionSection
