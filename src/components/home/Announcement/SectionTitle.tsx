import { css } from '@styled-system/css'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface SectionTitleProps {
  title: string
  description: string
  link?: string
}
const SectionTitle = ({ title, description, link }: SectionTitleProps) => {
  const navigate = useNavigate()
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        px: 1.5,
        py: 5,
        gap: 1.5,
        w: 'full',
        maxW: 1026,
        alignSelf: 'stretch',
        smDown: { px: '1rem', gap: 0 },
      })}
    >
      <h1
        className={css({
          textStyle: { base: 'display2', smDown: 'body1_L' },
          color: 'black',
        })}
      >
        {title}
      </h1>
      <div
        className={css({
          display: 'flex',
          w: 'full',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <p className={css({ textStyle: { base: 'heading4_M', smDown: 'body2_S' }, color: 'darkGray.1' })}>
          {description}
        </p>
        <button
          className={css({
            display: link ? 'flex' : 'none',
            alignItems: 'center',
            textStyle: { base: 'heading1_L', smDown: 'body2_M' },
            color: 'red.1',
            cursor: 'pointer',
            pl: 2.5,
            pr: 1,
            gap: { base: 3.5, smDown: 1 },
          })}
          onClick={() => link && navigate(link)}
        >
          more <ChevronRight className={css({ smDown: { w: '0.875rem' } })} />
        </button>
      </div>
    </div>
  )
}

export default SectionTitle
