import { css, cx } from '@styled-system/css'
import { globalLayout } from '@styled-system/recipes'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import PostWriteSection from '@/components/community/post/PostWriteSection'
import Button from '@/components/ui/button'

const WritePostPage = () => {
  const navigate = useNavigate()
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
      <section
        className={cx(
          globalLayout(),
          css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            mt: '55px',
          }),
        )}
      >
        <div
          className={css({
            display: 'flex',
            w: 'full',
            maxW: 1131,
            gap: 5,
          })}
        >
          <Button variant="gray" onClick={() => navigate(-1)} className={css({ lgDown: { display: 'none' } })}>
            <ArrowLeft />
            PREV
          </Button>
          <PostWriteSection />
        </div>
      </section>
    </main>
  )
}

export default WritePostPage
