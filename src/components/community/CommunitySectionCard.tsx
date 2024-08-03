import { css } from '@styled-stytem/css'
import { ChevronRight } from 'lucide-react'

import CommunityBoardSvg from '@/assets/CommunityBoard.svg'
import CommunityMask from '@/assets/CommunityMask.svg'
import InformationBoardSvg from '@/assets/InformationBoard.svg'
import InformationMask from '@/assets/InformationMask.svg'
import QuestionBoardSvg from '@/assets/QuestionBoard.svg'
import QuestionMask from '@/assets/QuestionMask.svg'
type CommunityCardType = 'community' | 'question' | 'information'

const CardConfig: Record<CommunityCardType, { title: string; link: string; img: string; mask: string }> = {
  community: {
    title: 'Community Board',
    link: '/community',
    img: CommunityBoardSvg,
    mask: CommunityMask,
  },
  question: {
    title: 'Question Board',
    link: '/community/question',
    img: QuestionBoardSvg,
    mask: QuestionMask,
  },
  information: {
    title: 'Information Board',
    link: '/community/information',
    img: InformationBoardSvg,
    mask: InformationMask,
  },
}

const CommunitySectionCard = ({ card }: { card: CommunityCardType }) => {
  return (
    <div
      className={css({
        display: 'flex',
        pos: 'relative',
        w: 'fit-content',
      })}
    >
      <img src={CardConfig[card].img} alt={CardConfig[card].title} style={{ zIndex: 1 }} />
      <img
        src={CardConfig[card].mask}
        alt="mask"
        className={css({
          pos: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate( -50%, 0 )',
          zIndex: 0,
          filter: { lgDown: 'blur(7px)', lg: 'blur(37px)' },
        })}
      />
      <div
        className={css({
          display: 'flex',
          pos: 'absolute',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          w: 'full',
          h: 'full',
          px: 5,
          zIndex: 1,
        })}
      >
        <div className={css({ display: 'flex', h: 20 })}>
          <button
            className={css({
              display: 'flex',
              fontSize: 24,
              fontWeight: 700,
              color: 'white',
              alignItems: 'center',
              gap: 2.5,
              cursor: 'pointer',
            })}
          >
            more
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunitySectionCard
