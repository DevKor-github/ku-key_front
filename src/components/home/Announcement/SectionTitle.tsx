import { css } from '@styled-stytem/css'
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
        alignItems: 'flex-start',
        px: 1.5,
        py: 5,
        alignSelf: 'stretch',
        gap: 1.5,
        maxW: 977,
      })}
    >
      <h1
        className={css({
          fontSize: 36,
          fontWeight: 700,
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
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.1' })}>{description}</p>
        <button
          className={css({
            display: link ? 'flex' : 'none',
            alignItems: 'center',
            fontSize: 24,
            fontWeight: 700,
            color: 'red.1',
            cursor: 'pointer',
            px: 2.5,
            gap: 3.5,
          })}
          onClick={() => link && navigate(link)}
        >
          more <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default SectionTitle
