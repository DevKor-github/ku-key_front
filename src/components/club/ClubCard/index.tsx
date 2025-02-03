import { css, cva } from '@styled-system/css'
import { Heart } from 'lucide-react'
import { memo } from 'react'

import MobileClubCardContents from '@/components/club/ClubCard/MobileClubCardContents'
import { ClubInterface } from '@/types/club'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface ClubCardProps {
  clubData: ClubInterface
  handleClubClick: (club: ClubInterface) => void
  handleLikeClick: (clubId: number) => void
}
const ClubCard = memo(({ clubData, handleLikeClick, handleClubClick }: ClubCardProps) => {
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
      <button
        className={css({
          display: 'flex',
          textAlign: 'left',
          alignItems: 'stretch',
          gap: { base: 5, smDown: 2.5 },
          smDown: { h: '100px' },
        })}
        onClick={() => handleClubClick(clubData)}
      >
        <img
          className={css({
            w: { base: '294px', mdDown: '80px', smDown: '100px' },
            h: '100%',
            objectFit: 'cover',
            rounded: { base: 10, smDown: 4 },
            flexShrink: 0,
            minH: { base: '294px', mdDown: '100%' },
          })}
          src={clubData.imageUrl}
          alt={clubData.name}
        />
        <MobileClubCardContents clubData={clubData} />
      </button>
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
