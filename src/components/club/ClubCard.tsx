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
          // TODO: 실제 이미지로 변경
          src="https://previews.123rf.com/images/avs1/avs12006/avs1200600713/149429617-%ED%88%AC%EB%AA%85-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%88%AC%EB%AA%85-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg"
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
              <ContactButton type="instagram" url="https://www.instagram.com/halionaz/" />
              <ContactButton type="youtube" url="https://www.instagram.com/halionaz/" />
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
