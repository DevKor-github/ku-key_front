import { css } from '@styled-stytem/css'
import { postCard } from '@styled-stytem/recipes'
import { formatDistanceToNow } from 'date-fns'
import { useAtomValue } from 'jotai'
import { Ellipsis, Eye } from 'lucide-react'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

import BoardTag from '@/components/community/BoardTag'
import PostImgCarousel from '@/components/community/post/PostImgCarousel'
import ReactionSection from '@/components/community/post/ReactionSection'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { postAtom } from '@/lib/store/post'
import { BoardType } from '@/types/community'

const Post = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const timeDistance = formatDistanceToNow(postAtomData.createdAt)
  const { boardName } = useParams()
  const formattedBoardName = `${boardName?.slice(0, 1).toUpperCase()}${boardName?.slice(1)} Board`

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
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger
                className={css({
                  rounded: 'full',
                  w: '30px',
                  h: '30px',
                  _hover: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
                  _open: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
                })}
              >
                <Ellipsis className={css({ color: 'darkGray.1' })} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Edit</MenubarItem>
                <MenubarItem>Report</MenubarItem>
                <MenubarItem>Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
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
    </div>
  )
})

export default Post
