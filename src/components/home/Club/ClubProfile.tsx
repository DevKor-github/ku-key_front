import { css } from '@styled-stytem/css'
import { clubTag } from '@styled-stytem/recipes'

import One from '@/assets/One.jpg'
import { ClubProfileProps } from '@/types/club'

const ClubProfile = ({ img, description, name, clubDivision }: ClubProfileProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        pos: 'relative',
        w: 238,
        // h: 341,
        justifyContent: 'flex-end',
      })}
    >
      <img src={One} alt="club" className={css({ pos: 'absolute', left: 6, top: 170, zIndex: 1 })} />
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
                textStyle: 'heading1_L',
                color: 'black.2',
                lineHeight: '110%',
                letterSpacing: '-0.48px',
                maxW: 170,
              })}
            >
              {name}
            </h1>
            <h1 className={css({ maxW: 170, fontSize: 16, fontWeight: 400, color: 'darkGray.1', lineHeight: '110%' })}>
              {description}
            </h1>
          </div>
          <div className={clubTag()}>
            <p
              className={css({
                textStyle: 'body3_M',
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
