import { css, cva } from '@styled-stytem/css'
import { motion } from 'framer-motion'

interface CategoryButtonProps {
  text: string
  onClick: () => void
  imgSrc: string
  selected: boolean
}
const CategoryButton = ({ text, onClick, imgSrc, selected }: CategoryButtonProps) => (
  <button
    onClick={onClick}
    className={css({ display: 'flex', flexDir: 'column', gap: 3.5, alignItems: 'center', w: '90px' })}
  >
    <img src={imgSrc} alt={`${text} icon`} className={css({ w: '50px', h: '50px', objectFit: 'cover' })} />
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
