import { css } from '@styled-system/css'

interface MobileCategoryChipProps {
  icon: ({ color }: { color: string }) => JSX.Element
  text: string
  onClick: () => void
}
const MobileCategoryChip = ({ icon, text, onClick }: MobileCategoryChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css({
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
        rounded: 'full',
        border: '0.5px solid {colors.lightGray.1}',
        py: 0.5,
        pl: 1.5,
        pr: 2.5,
        bgColor: 'white',
        w: 'fit-content',
        flexShrink: 0,
      })}
    >
      <span className={css({ w: 6, h: 6 })}>{icon({ color: '#6B6B6B' })}</span>
      <p className={css({ fontSize: 14, fontWeight: 400, lineHeight: 1.2, color: 'darkGray.1' })}>{text}</p>
    </button>
  )
}
export default MobileCategoryChip
