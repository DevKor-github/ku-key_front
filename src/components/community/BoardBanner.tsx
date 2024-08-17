import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import BackgroundImage from '@/assets/CommunityBG.jpg'
import Button from '@/components/ui/button'

interface BoardBannerProps {
  boardName: string
}
const BoardBanner = ({ boardName }: BoardBannerProps) => {
  const navigate = useNavigate()
  const handleNavigation = useCallback(
    () => navigate(`/community/write/post/${boardName.toLowerCase()}`),
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
            mt: '50px',
            mb: 30,
          }),
        )}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
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
          <h1 className={css({ fontSize: 80, fontWeight: 700, color: 'white' })}>{boardName} Board</h1>
          <p className={css({ fontSize: 20, fontWeight: 500, letterSpacing: -0.4, color: 'lightGray.1' })}>
            Lorem ipsum dolor sit amet consectetur.
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
