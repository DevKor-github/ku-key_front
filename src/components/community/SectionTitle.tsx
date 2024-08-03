import { css } from '@styled-stytem/css'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface SectionTitleProps {
  title: string
  description: string
  link: string
}
const SectionTitle = ({ title, description, link }: SectionTitleProps) => {
  const navigate = useNavigate()
  return (
    <div className={css({ display: 'flex', pt: '50px', px: 1.5, gap: 1.5, flexDir: 'column' })}>
      <h1 className={css({ fontSize: 30, fontWeight: 700 })}>{title}</h1>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        })}
      >
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.1' })}>{description}</p>
        <button
          className={css({ fontSize: 24, fontWeight: 700, color: 'red.1', px: 2.5, gap: 3.5, cursor: 'pointer' })}
          onClick={() => navigate(link)}
        >
          more
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default SectionTitle
