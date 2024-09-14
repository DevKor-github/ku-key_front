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
        <p className={css({ textStyle: 'heading4_M', color: 'darkGray.1' })}>{description}</p>
        <button
          className={css({
            display: link ? 'flex' : 'none',
            alignItems: 'center',
            fontSize: 24,
            fontWeight: 700,
            color: 'red.1',
            cursor: 'pointer',
            pl: 2.5,
            pr: 1,
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
