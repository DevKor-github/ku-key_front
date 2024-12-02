import { css } from '@styled-system/css'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface HomeTitleProps {
  title: string
  navLink: string
}

const HomeTitle = ({ title, navLink }: HomeTitleProps) => {
  const navigate = useNavigate()
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 4,
        bgColor: 'bg.gray',
        w: 'full',
        maxW: 1026,
        px: 1.5,
        gap: 1.5,
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
      <button
        className={css({
          display: 'flex',
          alignItems: 'center',
          textStyle: { base: 'heading1_L', smDown: 'body2_M' },
          color: 'red.1',
          cursor: 'pointer',
          pl: 2.5,
          pr: 1,
          gap: { base: 3.5, smDown: 1 },
        })}
        onClick={() => navigate(navLink)}
      >
        more <ChevronRight className={css({ smDown: { w: '0.875rem' } })} />
      </button>
    </div>
  )
}

export default HomeTitle
