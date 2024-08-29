import { css } from '@styled-stytem/css'
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
        // px: 'calc((100vw - 1026px)/2)',
      })}
    >
      <h1 className={css({ fontSize: 36, fontWeight: 700 })}>{title}</h1>
      <button
        className={css({
          display: 'flex',
          alignItems: 'center',
          fontSize: 28,
          fontWeight: 600,
          color: 'red.1',
          cursor: 'pointer',
          px: 2.5,
          gap: 3.5,
        })}
        onClick={() => navigate(navLink)}
      >
        more
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export default HomeTitle
