import { css, cva } from '@styled-stytem/css'
import { Heart } from 'lucide-react'

import ContactButton from '@/components/club/\bContactButton'
import { ClubInterface } from '@/types/club'

interface ClubCardProps {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = ({ clubData, handleLikeClick }: ClubCardProps) => {
  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
      <div className={css({ display: 'flex', gap: 5 })}>
        <img
          className={css({ w: '294px', h: '100%', objectFit: 'cover', rounded: 10, flexShrink: 0, minH: '294px' })}
          src={clubData.imageUrl}
          alt={clubData.name}
        />
        <div className={css({ display: 'flex', flexDir: 'column', gap: 6 })}>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 4 })}>
            <div className={css({ display: 'flex', flexDir: 'column', gap: 1.5 })}>
              <p className={css({ fontSize: 18 })}>{clubData.summary}</p>
              <h2 className={css({ fontSize: 30, fontWeight: 700 })}>{clubData.name}</h2>
            </div>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 1.5,
                fontSize: 16,
                fontWeight: 600,
                '& span': {
                  color: 'red.1',
                },
              })}
            >
              <p>Regular Meeting | {clubData.regularMeeting}</p>
              <p>Recruitment Period | {clubData.recruitmentPeriod}</p>
            </div>
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 3 })}>
            <p
              className={css({
                fontWeight: 400,
                color: 'darkGray.1',
                fontSize: 16,
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
            fontSize: 14,
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
}

export default ClubCard
