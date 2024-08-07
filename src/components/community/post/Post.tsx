import { css } from '@styled-stytem/css'
import { Ellipsis } from 'lucide-react'

import BoardTag from '@/components/community/BoardTag'
const Post = () => {
  return (
    <div
      className={css({
        display: 'flex',
        px: 5,
        pt: 5,
        pb: 10,
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: '50px',
        alignSelf: 'stretch',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        rounded: 10,
      })}
    >
      <div
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
            <p>Anonymous</p>
            <p>6 min ago</p>
          </div>
          <button>
            <Ellipsis className={css({ color: 'darkGray.1' })} />
          </button>
        </div>
        <BoardTag boardName={'Community Board'} variant="default" />
      </div>
    </div>
  )
}

export default Post
