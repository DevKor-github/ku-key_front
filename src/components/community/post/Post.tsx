import { css } from '@styled-stytem/css'
import { postCard } from '@styled-stytem/recipes'
import { formatDistanceToNow } from 'date-fns'
import { useAtomValue, useSetAtom } from 'jotai'
import { CircleAlert, Eye } from 'lucide-react'
import { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import BoardTag from '@/components/community/Boards/BoardTag'
import PostImgCarousel from '@/components/community/post/PostImgCarousel'
import ReactionSection from '@/components/community/post/ReactionSection'
import UtilButton from '@/components/community/post/UtilButton'
import ModalCard from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { postAtom, postEditAtom } from '@/lib/store/post'
import { BoardType } from '@/types/community'
import { useModal } from '@/util/useModal'

const Post = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const postEditData = useSetAtom(postEditAtom)
  const timeDistance = formatDistanceToNow(postAtomData.createdAt)
  const { boardName } = useParams()
  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)} Board`
  const navigate = useNavigate()
  const handleNavigation = useCallback(() => {
    navigate(`/community/action/edit/post/${boardName}`)
    postEditData(postAtomData)
  }, [navigate, boardName, postEditData, postAtomData])
  const { modalRef, isOpen, handleOpen, handleClose } = useModal()

  return (
    <div className={postCard()}>
      <section
        className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 5, alignSelf: 'stretch' })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 18,
              fontWeight: 500,
              color: 'darkGray.2',
            })}
          >
            <p>{postAtomData.user.username}</p>
            <p>{timeDistance} ago</p>
          </div>
          <UtilButton
            isMine={postAtomData.isMyPost}
            isEditable={postAtomData.isMyPost && (boardName !== 'question' || postAtomData.comments.length < 0)}
            handleNavigation={handleNavigation}
            handleDelete={handleOpen}
          />
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          })}
        >
          <BoardTag boardName={formattedBoardName as BoardType} variant="default" />
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1, color: 'darkGray.2' })}>
            <Eye size={16} />
            <p className={css({ fontSize: 16, fontWeight: 600 })}>{postAtomData.views}</p>
          </div>
        </div>
      </section>
      <section
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: '50px',
          alignSelf: 'stretch',
        })}
      >
        <h1
          className={css({
            fontSize: 26,
            fontWeight: 600,
            color: 'black.2',
            alignSelf: 'stretch',
            whiteSpace: 'pre-wrap',
          })}
        >
          {postAtomData.title}
        </h1>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.1', whiteSpace: 'pre-wrap' })}>
          {postAtomData.content}
        </p>
      </section>
      {postAtomData.imageDirs.length > 0 && <PostImgCarousel />}
      <ReactionSection />
      <ModalPortal isOpen={isOpen} handleClose={handleClose}>
        <ModalCard variant="alert" ref={modalRef}>
          <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'white' })}>
            <CircleAlert size={58} className={css({ fill: 'red.3', color: 'white' })} />
            <div className={css({ fontWeight: 700, color: 'black.2', fontSize: 24 })}>Are you sure?</div>
          </div>
          <div className={css({ fontWeight: 500, fontSize: 18, textAlign: 'center', color: 'black.2' })}>
            Once a post has been deleted, it cannot be restored.
          </div>
          <div className={css({ display: 'flex', gap: 5 })}>
            <button onClick={handleClose}>No, Keep it</button>
            <button onClick={() => {}}>Yes, Delete!</button>
          </div>
        </ModalCard>
      </ModalPortal>
    </div>
  )
})

export default Post
