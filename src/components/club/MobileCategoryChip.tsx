import { css, cva } from '@styled-system/css'

interface MobileCategoryChipProps {
  icon: ({ color }: { color: string }) => JSX.Element
  text: string
  onClick: () => void
  selected: boolean
}
const MobileCategoryChip = ({ icon, text, onClick, selected }: MobileCategoryChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cva({
        base: {
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
          color: 'darkGray.1',
          transition: 'all 0.2s ease-in-out',
        },
        variants: {
          selected: {
            true: { bgColor: 'red.2', color: 'white' },
          },
        },
      })({ selected })}
    >
      <span className={css({ w: 6, h: 6 })}>{icon({ color: selected ? 'white' : '#6B6B6B' })}</span>
      <p className={css({ fontSize: 14, fontWeight: 400, lineHeight: 1.2 })}>{text}</p>
    </button>
  )
}
export default MobileCategoryChip
