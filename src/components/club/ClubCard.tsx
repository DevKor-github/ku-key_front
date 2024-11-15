import { css, cva } from '@styled-system/css'
import { Heart } from 'lucide-react'
import { memo } from 'react'

import ContactButton from '@/components/club/\bContactButton'
import { ClubInterface } from '@/types/club'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface ClubCardProps {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = memo(({ clubData, handleLikeClick }: ClubCardProps) => {
  const isMobile = useMediaQueryByName('smDown')

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        smDown: { p: 2.5, bgColor: 'white', rounded: 10, pr: 1 },
      })}
    >
      <div className={css({ display: 'flex', gap: { base: 5, smDown: 2.5 }, smDown: { h: '100px' } })}>
        <img
          className={css({
            w: { base: '294px', mdDown: '80px', smDown: 'fit-content' },
            h: '100%',
            objectFit: 'cover',
            rounded: { base: 10, smDown: 4 },
            flexShrink: 0,
            minH: { base: '294px', mdDown: '100%' },
          })}
          src={clubData.imageUrl}
          alt={clubData.name}
        />
        {isMobile ? (
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              justifyContent: 'space-between',
              gap: 1,
              py: 1,
            })}
          >
            <div className={css({ display: 'flex', flexDir: 'column', gap: 1.5 })}>
              <div className={css({ display: 'flex', flexDir: 'column' })}>
                <h2 className={css({ fontSize: 15, lineHeight: 1.2, fontWeight: 500, color: 'black' })}>
                  {clubData.name}
                </h2>
                <p className={css({ fontSize: 10, fontWeight: 400, lineHeight: 1.2, color: 'darkGray.1' })}>
                  {clubData.summary}
                </p>
              </div>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  gap: 0.5,
                  fontSize: 9,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  '& p': {
                    lineClamp: 1,
                  },
                })}
              >
                <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
                <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
              </div>
            </div>
            <p
              className={css({
                fontWeight: 400,
                color: 'darkGray.1',
                fontSize: 9,
                lineClamp: 2,
                lineHeight: 1.2,
              })}
            >
              {clubData.description}
            </p>
          </div>
        ) : (
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              justifyContent: 'space-between',
              gap: 3,
            })}
          >
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
              <p
                className={css({
                  fontWeight: 400,
                  color: 'darkGray.1',
                  fontSize: 12,
                  maxW: '580px',
                  lineClamp: 4,
                })}
              >
                {clubData.description}
              </p>
            </div>
            <div className={css({ display: 'flex', gap: 2 })}>
              {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
              {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
            </div>
          </div>
        )}
      </div>
      <button
        className={cva({
          base: {
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'lightGray.1',
            fontSize: { base: 14, mdDown: 12, smDown: 9 },
            fontWeight: 500,
            lineHeight: 1.2,
            transition: 'color 0.25s ease',
            gap: { base: 2, smDown: '3px' },
            w: { base: '69px', smDown: '34px' },
            flexShrink: 0,
            smDown: {
              mx: '5px',
            },
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
        <Heart size={isMobile ? 16 : 30} />
        <p className={css({ color: 'darkGray.2' })}>{clubData.likeCount}</p>
      </button>
    </div>
  )
})

export default ClubCard
