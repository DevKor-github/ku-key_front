import { css } from '@styled-stytem/css'
import { Flame, ThumbsUp } from 'lucide-react'

type iconType = 'flame' | 'like'
interface ClubSectionTitleProps {
  icon: iconType
  title: string
}
const ClubSectionTitle = ({ title, icon }: ClubSectionTitleProps) => {
  return (
    <div className={css({ display: 'inline-flex', alignItems: 'center', gap: 5.5 })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 10,
          pb: 5,
          px: '3px',
          gap: 2.5,
        })}
      >
        {icon === 'flame' ? <Flame /> : <ThumbsUp />}
        <p className={css({ fontSize: 28, fontWeight: 600 })}>{title}</p>
      </div>
      <div className={css({ display: 'flex', pt: 12, pb: '23px', alignItems: 'center', color: 'red.1' })}>
        <p>for exchage students</p>
      </div>
    </div>
  )
}

export default ClubSectionTitle
