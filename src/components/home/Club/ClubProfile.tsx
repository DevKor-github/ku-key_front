import { css } from '@styled-stytem/css'
import { clubTag } from '@styled-stytem/recipes'
import { Flame } from 'lucide-react'

import { ClubProfileProps } from '@/types/club'

const ClubProfile = ({ img, description, name, clubDivision, rank }: ClubProfileProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        w: 60,
        h: 307,
        pb: '3px',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
      })}
    >
      <div className={css({ display: 'flex', w: 60, flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
        <img src={img} alt="club images" className={css({ alignSelf: 'stretch', h: 174, rounded: 14 })} />
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 1 })}>
          <p className={css({ fontSize: 20, fontWeight: 500, color: 'darkGray.1' })}>{description}</p>
          <p className={css({ fontSize: 26, fontWeight: 600 })}>{name}</p>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '11px', alignSelf: 'stretch' })}>
          <div className={clubTag()}>
            <p className={css({ fontSize: 16, fontWeight: 600 })}>{clubDivision}</p>
          </div>
          <div className={clubTag({ variant: 'rank' })}>
            <Flame size={20} strokeWidth={1.5} />
            <p className={css({ fontSize: 16, fontWeight: 600 })}>#{rank}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubProfile
