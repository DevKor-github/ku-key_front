import { css, cx } from '@styled-system/css'
import { globalLayout } from '@styled-system/recipes'

import PostView from '@/components/community/post/PostView'

const PostViewPage = () => {
  return (
    <main className={css({ display: 'flex', flexDir: 'column' })}>
      <div
        className={cx(
          globalLayout(),
          css({
            display: 'flex',
            alignSelf: 'center',
            bgColor: 'bg.gray',
            py: '50px',
          }),
        )}
      >
        <title>Post's Content</title>
        <h1
          className={css({ display: 'flex', w: 'full', maxW: 1131, fontSize: 32, fontWeight: 800, color: '#2D2D2D' })}
        >
          Community
        </h1>
      </div>
      <PostView />
    </main>
  )
}

export default PostViewPage
