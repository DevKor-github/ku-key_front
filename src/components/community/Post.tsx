import { css } from '@styled-stytem/css'
import { tag } from '@styled-stytem/recipes'
import { Users } from 'lucide-react'

import PostTextPreview from '@/components/community/PostTextPreview'

interface PostProps {
  img?: string
}
const Post = ({ img }: PostProps) => {
  return (
    <div className={css({ display: 'flex', w: 608, flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          alignSelf: 'stretch',
        })}
      >
        <div className={css({ display: 'flex', pl: 2.5, alignItems: 'flex-start' })}>
          <div className={tag()}>
            <Users size={16} />
            <p className={css({ fontSize: 12, fontWeight: 700 })}>Community Board</p>
          </div>
        </div>
        <PostTextPreview
          variant={{ variant: 'default' }}
          description="I I live in South Korea, and have learned English since about 14 and a half years old. I am currently 18 years
          old. I am a high school student"
        />
      </div>
      {img && <img src={img} alt="Post" className={css({ w: 608, h: 304, rounded: 10 })} />}
    </div>
  )
}

export default Post
