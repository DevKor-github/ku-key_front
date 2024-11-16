import { css } from '@styled-system/css'
import { postCard } from '@styled-system/recipes'
import { isAxiosError } from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { useAtomValue, useSetAtom } from 'jotai'
import { Eye } from 'lucide-react'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDeletePost, useReportPost } from '@/api/hooks/community'
import BoardTag from '@/components/community/Boards/BoardTag'
import PostImgCarousel from '@/components/community/post/PostImgCarousel'
import ReactionSection from '@/components/community/post/ReactionSection'
import UtilButton from '@/components/community/post/UtilButton'
import AlertModal from '@/components/ui/modal/AlertModal'
import { REPORT_MESSAGES } from '@/lib/messages/community'
import { persistedPostData, postAtom } from '@/lib/store/post'
import { BoardType } from '@/types/community'
import { useModal } from '@/util/hooks/useModal'

const Post = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const postEditData = useSetAtom(persistedPostData)
  const timeDistance = formatDistanceToNow(postAtomData.createdAt)
  const { boardName } = useParams()
  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)} Board`
  const navigate = useNavigate()
  const handleNavigation = useCallback(() => {
    navigate(`/community/action/edit/post/${boardName}`)
    postEditData(postAtomData)
  }, [navigate, boardName, postEditData, postAtomData])
  const { mutate: mutateDeletePost } = useDeletePost()
  const { mutate: mutateReportPost } = useReportPost()
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()

  const handleConfirm = useCallback(() => {
    mutateDeletePost(postAtomData.id, {
      onSuccess: () => {
        handleButtonClose()
        navigate(-1)
      },
    })
  }, [handleButtonClose, mutateDeletePost, navigate, postAtomData.id])

  const handleReportConfirm = useCallback(() => {
    mutateReportPost(
      { postId: postAtomData.id, reason: 'Inappropriate' },
      {
        onSuccess: () => {
          handleButtonClose()
        },
        onError: error => {
          if (isAxiosError(error) && error.response?.data.message === REPORT_MESSAGES.REPORT_ERROR) {
            handleButtonClose()
            alert(REPORT_MESSAGES.REPORT_ERROR)
          }
        },
      },
    )
  }, [handleButtonClose, mutateReportPost, postAtomData.id])

  const isPostEditable = useMemo(() => {
    if (!postAtomData.isMyPost) return false
    if (boardName !== 'question') return true
    return postAtomData.comments.length <= 0
  }, [boardName, postAtomData])

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
            <p>{postAtomData.user.isAnonymous ? 'Anonymous' : postAtomData.user.username}</p>
            <p>{timeDistance} ago</p>
          </div>
          <UtilButton
            isComment={false}
            isMine={postAtomData.isMyPost}
            isEditable={isPostEditable}
            isDeletable={isPostEditable}
            handleNavigation={handleNavigation}
            handleDelete={handleOpen}
            handleReport={handleOpen}
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
            textStyle: 'title3',
            color: 'black.2',
            alignSelf: 'stretch',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          })}
        >
          {postAtomData.title}
        </h1>
        <p
          className={css({
            textStyle: 'heading4_M',
            color: 'darkGray.1',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          })}
        >
          {postAtomData.content}
        </p>
      </section>
      {postAtomData.imageDirs.length > 0 && <PostImgCarousel />}
      <ReactionSection />
      {postAtomData.isMyPost && (
        <AlertModal
          modalRef={modalRef}
          title="Are you sure?"
          content="Once a post has been deleted, it cannot be restored."
          closeText="No, Keep it"
          confirmText="Yes, Delete!"
          onConfirm={handleConfirm}
          isOpen={isOpen}
          handleLayoutClose={handleLayoutClose}
          handleButtonClose={handleButtonClose}
        />
      )}
      {!postAtomData.isMyPost && (
        <AlertModal
          modalRef={modalRef}
          title="Are you sure?"
          content={`Do you want to report this post? ${'\n'} The report will not be processed ${'\n'}if the reason for reporting is inappropriate.`}
          closeText="Cancel"
          confirmText="Confirm"
          onConfirm={handleReportConfirm}
          isOpen={isOpen}
          handleLayoutClose={handleLayoutClose}
          handleButtonClose={handleButtonClose}
        />
      )}
    </div>
  )
})

export default Post
