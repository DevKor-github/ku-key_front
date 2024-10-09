import { css, cx } from '@styled-system/css'
import { postCard } from '@styled-system/recipes'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { usePatchEditPost, usePostCreate } from '@/api/hooks/community'
import ImageInputSection from '@/components/community/post/ImageInputSection'
import Dropdown from '@/components/timetable/Dropdown'
import Button from '@/components/ui/button'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import Toast from '@/components/ui/toast'
import { POST_MESSAGES } from '@/lib/messages/community'
import { initialPostData, persistedPostData } from '@/lib/store/post'
import { ActionType } from '@/types/post'
import { createFileFromUrl } from '@/util/create-file-from-url'
import { useFile } from '@/util/useFile'

enum boardConfig {
  main = 0,
  community = 1,
  question = 2,
  information = 3,
}
const PostWriteSection = () => {
  const { boardName, type } = useParams() as {
    boardName: 'main' | 'community' | 'question' | 'information'
    type: ActionType
  }
  const [initialData, setInitialData] = useAtom(persistedPostData)
  const [initialImgFiles, setInitialImgFiles] = useState<File[]>()
  const [currentIndex, setCurIndex] = useState(boardConfig[boardName ?? 'main'])
  const { files, isChanged, handleFilesChange, handleFileDelete } = useFile('image', 5, initialImgFiles)
  const titleRef = useRef<HTMLTextAreaElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)
  const [anonymous, setAnonymous] = useState(initialData ? initialData.user.username === 'Anonymous' : false)
  const { mutate: mutatePost } = usePostCreate()
  const { mutate: mutateEditPost } = usePatchEditPost()
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    if (!titleRef.current || !bodyRef.current) return
    if (!currentIndex) {
      return toast.custom(() => <Toast message={POST_MESSAGES.BOARD_REQUIRED} type="warning" />)
    }
    if (!titleRef.current.value || !bodyRef.current.value) {
      return toast.custom(() => <Toast message={POST_MESSAGES.CONTENT_REQUIRED} type="warning" />)
    }
    if (type === 'write') {
      mutatePost(
        {
          boardId: currentIndex,
          title: titleRef.current?.value,
          content: bodyRef.current?.value,
          isAnonymous: anonymous,
          images: files ?? undefined,
        },
        {
          onSuccess: () => {
            toast.custom(() => <Toast message={'Post has been successful'} type="success" />)
            navigate(-1)
          },
        },
      )
    } else if (type === 'edit') {
      mutateEditPost(
        {
          postId: initialData.id,
          title: titleRef.current?.value,
          content: bodyRef.current?.value,
          isAnonymous: anonymous,
          images: files ?? undefined,
          imageUpdate: isChanged,
        },
        {
          onSuccess: () => {
            alert('Edit has been successful')
            setInitialData(initialPostData)
            navigate(-1)
          },
        },
      )
    }
  }, [
    anonymous,
    currentIndex,
    files,
    initialData,
    isChanged,
    mutateEditPost,
    mutatePost,
    navigate,
    setInitialData,
    type,
  ])
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])

  useEffect(() => {
    if (type === 'edit' && initialData.imageDirs.length) {
      const getInitialImgDirs = async () => {
        if (!initialData?.imageDirs) return []
        return await Promise.all(initialData?.imageDirs.map(dir => createFileFromUrl(dir.imgDir, `${dir.id}.jpeg`)))
      }
      getInitialImgDirs().then(res => setInitialImgFiles(res))
    }
  }, [initialData?.imageDirs, type])

  useEffect(() => {
    return () => setInitialData(initialPostData)
  }, [setInitialData])

  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = '' // chrome에서는 설정이 필요해서 넣은 코드
    }

    ;(() => {
      window.addEventListener('beforeunload', preventClose)
    })()

    return () => {
      window.removeEventListener('beforeunload', preventClose)
    }
  }, [])
  return (
    <section className={cx(postCard(), css({ w: 817 }))}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        })}
      >
        <h2 className={css({ textStyle: 'title3', color: '#2D2D2D', smDown: { fontSize: 18 } })}>
          {type === 'write' ? 'Create' : 'Edit'} Post
        </h2>
        <Dropdown
          dropdownList={['Select Board', 'Community Board', 'Question Board', 'Information Board']}
          curIndex={currentIndex}
          setCurIndex={setCurIndex}
          disabled={type === 'edit'}
        />
      </div>
      <div className={css({ display: 'flex', w: 'full', flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'flex-start',
            gap: 2.5,
            alignSelf: 'stretch',
          })}
        >
          <p className={css({ textStyle: 'body2_L', color: 'lightGray.1' })}>Title</p>
          <MemoizedTextAreaAutosize
            ref={titleRef}
            value={initialData?.title}
            maxRows={2}
            className={css({
              display: 'flex',
              px: 5,
              py: '13px',
              alignSelf: 'stretch',
              resize: 'none',
              outline: 'none',
              rounded: 10,
              border: '1px solid {colors.lightGray.1}',
              bgColor: 'bg.gray',
              textStyle: 'heading4_M',
              color: 'darkGray.1',
              _placeholder: { textStyle: 'heading4_M', color: 'lightGray.1' },
            })}
            placeholder="Title"
          />
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'flex-start',
            gap: 2.5,
            alignSelf: 'stretch',
          })}
        >
          <p className={css({ textStyle: 'body2_L', color: 'lightGray.1' })}>Body</p>
          <MemoizedTextAreaAutosize
            ref={bodyRef}
            value={initialData?.content}
            maxRows={13}
            className={css({
              display: 'flex',
              px: 5,
              py: '13px',
              alignSelf: 'stretch',
              resize: 'none',
              outline: 'none',
              rounded: 10,
              border: '1px solid {colors.lightGray.1}',
              bgColor: 'bg.gray',
              textStyle: 'heading4_M',
              color: 'darkGray.1',
              _placeholder: { textStyle: 'heading4_M', color: 'lightGray.1' },
            })}
            placeholder="Enter your post here"
          />
        </div>
      </div>
      <ImageInputSection
        files={files}
        handleFilesChange={handleFilesChange}
        handleFileDelete={handleFileDelete}
        anonymous={anonymous}
        handleAnonymous={handleAnonymous}
      />
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          alignSelf: 'stretch',
        })}
      >
        <Button variant="loginColored" onClick={handleClick}>
          POST
        </Button>
      </div>
    </section>
  )
}

export default PostWriteSection
