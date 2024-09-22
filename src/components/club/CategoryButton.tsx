import { css, cva } from '@styled-system/css'
import { motion } from 'framer-motion'

import ClubIconBG from '@/assets/ClubIconBG.svg'

interface CategoryButtonProps {
  text: string
  onClick: () => void
  icon: ({ color }: { color: string }) => JSX.Element
  selected: boolean
}
const CategoryButton = ({ text, onClick, icon, selected }: CategoryButtonProps) => (
  <button
    onClick={onClick}
    className={css({ display: 'flex', flexDir: 'column', gap: 3.5, alignItems: 'center', w: '90px' })}
  >
    <div
      className={cva({
        base: { position: 'relative', bgColor: 'white', rounded: 4, transition: 'background 0.2s' },
        variants: { selected: { true: { bgColor: 'transparent' } } },
      })({ selected })}
    >
      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          '& path': {
            transition: 'fill 0.2s ease',
          },
        })}
      >
        {icon({ color: selected ? 'white' : '#E9E9E9' })}
      </div>
      <img
        alt="_"
        className={cva({
          base: {
            zIndex: 0,
            opacity: 0,
            transition: 'all 0.2s ease',
            boxShadow: '0px 0px 10px 0px rgba(255, 0, 0, 0.50)',
          },
          variants: {
            selected: {
              true: {
                opacity: 1,
              },
            },
          },
        })({ selected })}
        src={ClubIconBG}
      />
    </div>
    <div
      className={css({ display: 'flex', flexDir: 'column', gap: '10px', alignItems: 'center', position: 'relative' })}
    >
      {selected && (
        <motion.div
          layoutId="categorySelection"
          className={css({ h: 1, w: '50px', bgColor: 'red.2', rounded: 'full', position: 'absolute' })}
        />
      )}
      <div />
      <div
        className={cva({
          base: { fontSize: 12, fontWeight: 600, color: 'darkGray.1', transition: 'all 0.256s' },
          variants: { selected: { true: { color: 'red.2' } } },
        })({ selected })}
      >
        {text}
      </div>
    </div>
  </button>
)

export default CategoryButton
