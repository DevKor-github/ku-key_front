import { css, cx } from '@styled-system/css'
import { clubTag } from '@styled-system/recipes'

import * as s from './style.css'

import Book from '@/assets/Book.svg'
import Heart from '@/assets/Heart.svg'
import People from '@/assets/People.svg'
import Tennis from '@/assets/Tennis.svg'
import { ClubProfileProps } from '@/types/club'

const One = `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/One.webp`
const Two = `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/Two.webp`
const Three = `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/Three.webp`
const Four = `${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/Four.webp`

interface ClubPreviewProps extends ClubProfileProps {
  index: number
  type: 'hot' | 'recommend'
}
const HotClubConfig: Record<number, { img: string }> = {
  0: { img: One },
  1: { img: Two },
  2: { img: Three },
  3: { img: Four },
}

const RecommendedClubConfig: Record<number, { img: string }> = {
  0: { img: Heart },
  1: { img: Tennis },
  2: { img: People },
  3: { img: Book },
}
const ClubProfile = ({ img, description, name, clubDivision, index, type }: ClubPreviewProps) => {
  return (
    <div className={s.Wrapper}>
      <img
        src={type === 'hot' ? HotClubConfig[index].img : RecommendedClubConfig[index].img}
        alt="club"
        className={s.ClubIcon({ type })}
      />
      <div
        className={css({
          display: 'inline-flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 1.5,
        })}
      >
        <div
          className={css({
            w: 45,
            h: 60,
            rounded: 10,
            opacity: 0.8,
            border: '1px solid {colors.lightGray.1}',
            boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
            smDown: { w: 18, h: 24 },
          })}
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, #000 100%), url(${img})`,
            backgroundSize: '180px 240px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            gap: 4,
          })}
        >
          <div className={css({ display: 'flex', px: 1, flexDir: 'column', alignItems: 'flex-start', gap: 1.5 })}>
            <h1
              className={css({
                textStyle: { base: 'heading1_L', smDown: 'body2_L' },
                color: 'black.2',
                lineHeight: '110%',
                letterSpacing: '-0.48px',
                maxW: 170,
              })}
            >
              {name}
            </h1>
            <h1
              className={css({
                maxW: 170,
                textStyle: { base: 'body1_S', smDown: 'body3_S' },
                color: 'darkGray.1',
                lineHeight: '110%',
              })}
            >
              {description}
            </h1>
          </div>
          <div className={cx(clubTag(), css({ display: { smDown: 'none' } }))}>
            <p
              className={css({
                textStyle: { base: 'body3_M', smDown: 'body4_M' },
                maxH: '14px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
              })}
            >
              {clubDivision}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubProfile
