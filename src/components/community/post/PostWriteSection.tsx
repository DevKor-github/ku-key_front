import { css, cx } from '@styled-stytem/css'
import { postCard } from '@styled-stytem/recipes'
import { useCallback, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { usePostCreate } from '@/api/hooks/community'
import ImageInputSection from '@/components/community/post/ImageInputSection'
import Dropdown from '@/components/timetable/Dropdown'
import Button from '@/components/ui/button'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { useFile } from '@/util/useFile'

enum boardConfig {
  main = 0,
  community = 1,
  question = 2,
  information = 3,
}
const PostWriteSection = () => {
  const { boardName } = useParams() as { boardName: 'main' | 'community' | 'question' | 'information' }
  const [currentIndex, setCurIndex] = useState(boardConfig[boardName ?? 'main'])
  const { files, handleFilesChange, handleFileDelete } = useFile('image')
  const titleRef = useRef<HTMLTextAreaElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)

  const [anonymous, setAnonymous] = useState(false)
  const { mutate: mutatePost } = usePostCreate()
  const handleClick = useCallback(() => {
    if (!titleRef.current || !bodyRef.current) return
    mutatePost({
      boardId: currentIndex,
      title: titleRef.current?.value,
      content: bodyRef.current?.value,
      isAnonymous: anonymous,
      images: files ?? undefined,
    })
  }, [anonymous, currentIndex, files, mutatePost])
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])
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
        <h2 className={css({ textStyle: 'title3', color: '#2D2D2D', smDown: { fontSize: 18 } })}>Create Post</h2>
        <Dropdown
          dropdownList={['Select Board', 'Community Board', 'Question Board', 'Information Board']}
          curIndex={currentIndex}
          setCurIndex={setCurIndex}
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
