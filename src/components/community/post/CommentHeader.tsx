import { css } from '@styled-stytem/css'
import { boardTag } from '@styled-stytem/recipes'
import { Ellipsis } from 'lucide-react'

const CommentHeader = () => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
      })}
    >
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
        <div className={boardTag({ variant: 'small' })}>Anonymous</div>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>1 day ago</p>
      </div>
      <button>
        <Ellipsis className={css({ color: 'darkGray.1' })} />
      </button>
    </div>
  )
}

export default CommentHeader
