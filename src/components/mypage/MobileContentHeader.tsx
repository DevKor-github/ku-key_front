import { css } from '@styled-system/css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface MobileContentHeaderProps {
  title: string
}
const MobileContentHeader = ({ title }: MobileContentHeaderProps) => {
  const navigate = useNavigate()
  return (
    <div
      className={css({
        position: 'relative',
        h: '61px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'white',
      })}
    >
      <button
        className={css({
          position: 'absolute',
          left: '1.625rem',
          top: '50%',
          transform: 'translate3d(0, -50%, 0)',
          cursor: 'pointer',
        })}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
      </button>
      <h1
        className={css({
          fontSize: 16,
          fontWeight: 600,
          lineHeight: 1.2,
        })}
      >
        {title}
      </h1>
    </div>
  )
}

export default MobileContentHeader
