import { css } from '@styled-stytem/css'

interface SectionTitleProps {
  title: string
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        borderBottom: '1px solid {colors.darkGray.2}',
        pb: 4,
        alignSelf: 'stretch',
      })}
    >
      <h2
        className={css({
          display: 'flex',
          px: '3px',
          alignItems: 'flex-start',
          gap: 2.5,
          fontSize: 26,
          fontWeight: 600,
          color: 'black',
        })}
      >
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
