import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/ui/button'

interface BoardBannerProps {
  boardName: string
  boardDescription: string
}

const BoardImgConfig: Record<string, string> = {
  community: `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/community/communityBanner.jpg`,
  information: `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/community/informationBanner.jpg`,
  question: `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/community/questionBanner.jpg`,
}
const BoardBanner = ({ boardName, boardDescription }: BoardBannerProps) => {
  const navigate = useNavigate()
  const handleNavigation = useCallback(
    () => navigate(`/community/action/write/post/${boardName.toLowerCase()}`),
    [navigate, boardName],
  )
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        bgColor: 'bg.gray',
        pb: '50px',
      })}
    >
      <div
        className={cx(
          globalLayout(),
          css({
            h: 400,
            mb: 30,
          }),
        )}
        style={{
          backgroundImage: `url(${BoardImgConfig[boardName.toLowerCase()]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <title>{boardName} Board</title>
        <div
          className={css({
            display: 'flex',
            alignItems: 'flex-start',
            flexDir: 'column',
            gap: 5,
            w: 1131,
          })}
        >
          <h1
            className={css({
              display: 'flex',
              lineHeight: 1,
              fontSize: 80,
              fontWeight: 700,
              color: 'white',
            })}
          >
            {boardName} Board
          </h1>
          <p className={css({ fontSize: 20, fontWeight: 500, letterSpacing: -0.4, color: 'lightGray.1' })}>
            {boardDescription}
          </p>
        </div>
      </div>
      <div className={globalLayout()}>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            w: 'full',
            maxW: 1131,
            alignSelf: 'stretch',
          })}
        >
          <h1 className={css({ fontSize: 36, fontWeight: 700 })}>{boardName} board</h1>
          <Button variant="loginColored" onClick={handleNavigation}>
            Create Post
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BoardBanner
