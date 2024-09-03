import { css, cva } from '@styled-stytem/css'
import { Heart } from 'lucide-react'
import { memo } from 'react'

import ContactButton from '@/components/club/\bContactButton'
import { ClubInterface } from '@/types/club'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface ClubCardProps {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = memo(({ clubData, handleLikeClick }: ClubCardProps) => {
  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
      <div className={css({ display: 'flex', gap: 5 })}>
        <img
          className={css({
            w: { base: '294px', mdDown: '80px' },
            h: '100%',
            objectFit: 'cover',
            rounded: 10,
            flexShrink: 0,
            minH: { base: '294px', mdDown: '100%' },
          })}
          src={clubData.imageUrl}
          alt={clubData.name}
        />
        <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 6, mdDown: 3 } })}>
          <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 4, mdDown: 2 } })}>
            <div className={css({ display: 'flex', flexDir: 'column', gap: 1.5 })}>
              <p className={css({ fontSize: { base: 18, mdDown: 12 } })}>{clubData.summary}</p>
              <h2 className={css({ fontSize: { base: 30, mdDown: 18 }, fontWeight: 700 })}>{clubData.name}</h2>
            </div>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 1.5,
                fontSize: { base: 16, mdDown: 12 },
                fontWeight: 600,
              })}
            >
              <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
              <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
            </div>
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 3 } })}>
            <p
              className={css({
                fontWeight: 400,
                color: 'darkGray.1',
                fontSize: { base: 16, mdDown: 12 },
                maxW: '580px',
                lineClamp: 3,
              })}
            >
              {clubData.description}
            </p>
            <div className={css({ display: 'flex', gap: 2 })}>
              {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
              {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
            </div>
          </div>
        </div>
      </div>
      <button
        className={cva({
          base: {
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'lightGray.1',
            fontSize: { base: 14, mdDown: 12 },
            transition: 'color 0.25s ease',
          },
          variants: {
            hasMine: {
              true: {
                color: 'red.3',
              },
            },
          },
        })({ hasMine: clubData.isLiked })}
        onClick={() => handleLikeClick(clubData.clubId)}
      >
        <Heart />
        {clubData.likeCount}
      </button>
    </div>
  )
})

export default ClubCard
