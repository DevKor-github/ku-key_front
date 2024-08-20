import { css } from '@styled-stytem/css'
import { Flame, ThumbsUp } from 'lucide-react'

type iconType = 'flame' | 'like'
interface ClubSectionTitleProps {
  icon: iconType
  description: string
  title: string
}
const ClubSectionTitle = ({ title, icon, description }: ClubSectionTitleProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        pt: 2.5,
        pb: '30px',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      })}
    >
      <div
        className={css({
          display: 'flex',
          pl: '3px',
          pt: 5,
          pb: 2.5,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2.5,
        })}
      >
        {icon === 'flame' ? <Flame size={24} /> : <ThumbsUp size={24} />}
        <h1 className={css({ fontSize: 30, fontWeight: 700 })}>{title}</h1>
      </div>
      <p className={css({ textStyle: 'heading4_M', color: 'darkGray.1' })}>{description}</p>
    </div>
  )
}

export default ClubSectionTitle
