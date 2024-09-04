import { css } from '@styled-stytem/css'
import { Check } from 'lucide-react'

const AttendanceBtn = () => {
  return (
    <button
      className={css({
        display: 'flex',
        bgColor: 'bg.gray',
        border: '1px solid {colors.darkGray.2}',
        rounded: 'full',
        lineHeight: 1,
        fontSize: 12,
        fontWeight: 700,
        color: 'darkGray.2',
        px: 2.5,
        py: 1,
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
      })}
    >
      <Check size={16} strokeWidth={3.5} />
      <p>Check attendance</p>
    </button>
  )
}

export default AttendanceBtn
