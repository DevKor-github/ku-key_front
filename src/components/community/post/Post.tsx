import { css } from '@styled-stytem/css'
import { Ellipsis, Eye } from 'lucide-react'

import BoardTag from '@/components/community/BoardTag'
import ReactionSection from '@/components/community/post/ReactionSection'

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
            <p>Anonymous</p>
            <p>6 min ago</p>
          </div>
          <button>
            <Ellipsis className={css({ color: 'darkGray.1' })} />
          </button>
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          })}
        >
          <BoardTag boardName={'Community Board'} variant="default" />
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1, color: 'darkGray.2' })}>
            <Eye size={16} />
            <p className={css({ fontSize: 16, fontWeight: 600 })}>35</p>
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
          I have been frustrated because of my lacking growth of my English.
        </h1>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.1', whiteSpace: 'pre-wrap' })}>
          I live in South Korea, and have learned English since about 14 years ago. I have no prior experience of living
          in other country. The Common European Framework of Reference for languages suggests that I need about 1,400
          hours to achive C1 Level from zero, and I have already spent more than 2,000 hours in English class. Despite
          the time I have spent to learn English, my TOEIC score with no preparation for test was 720, which means I'm
          in B1 Level of CEFR... What makes me feel worse is, Among the Native Koreans who haven't lived in other
          countries, I'm classified as the "good english user". In Korean SAT's English test, I have got the highest
          grade among the 9 grades. Is it really POSSIBLE to achive C1 level without living in countries English is
          widely spoken? Everyday I feel Relative Deprivation seeing other koreans who have lived in countries using
          English...
        </p>
      </section>
      <ReactionSection />
    </div>
  )
}

export default Post
