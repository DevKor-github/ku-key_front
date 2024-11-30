import { css } from '@styled-system/css'
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
        smDown: { px: 4 },
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
          smDown: { p: 0 },
        })}
      >
        {icon === 'flame' ? (
          <Flame size={24} className={css({ smDown: { w: 4 } })} />
        ) : (
          <ThumbsUp size={24} className={css({ smDown: { w: 4 } })} />
        )}
        <h1 className={css({ textStyle: { base: 'display3', smDown: 'body2_L' } })}>{title}</h1>
      </div>
      <p className={css({ textStyle: { base: 'heading4_M', smDown: 'body3_M' }, color: 'darkGray.1' })}>
        {description}
      </p>
    </div>
  )
}

export default ClubSectionTitle
