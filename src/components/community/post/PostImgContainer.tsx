import { css } from '@styled-system/css'
import { memo } from 'react'

interface PostImgContainerProps {
  img: string
}
const PostImgContainer = memo(({ img }: PostImgContainerProps) => {
  return (
    <div className={css({ display: 'flex', w: 'full', flex: '0 0 100%', pos: 'relative' })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
          h: 437,
          rounded: 10,
        })}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className={css({
          display: 'flex',
          pos: 'absolute',
          rounded: 10,
          w: 'full',
          h: 437,
          justifyContent: 'center',
          alignItems: 'center',
          bgColor: 'rgba(0, 0, 0, 0.20)',
          backdropFilter: 'blur(25px)',
          overflow: 'hidden',
        })}
      >
        <img
          src={img}
          alt="post"
          className={css({
            h: 437,
            objectFit: 'obtain',
            backdropFilter: 'blur(25px)',
            backdropBlur: '25px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          })}
        />
      </div>
    </div>
  )
})

export default PostImgContainer
