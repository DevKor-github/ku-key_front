import { css, cva } from '@styled-system/css'
import { motion } from 'framer-motion'

import ClubIconBG from '@/assets/ClubIconBG'

interface CategoryButtonProps {
  text: string
  onClick: () => void
  icon: ({ color }: { color: string }) => JSX.Element
  selected: boolean
}
const CategoryButton = ({ text, onClick, icon, selected }: CategoryButtonProps) => (
  <button
    onClick={onClick}
    className={css({
      display: 'flex',
      flexDir: 'column',
      gap: 3.5,
      alignItems: 'center',
      w: { base: '90px', mdDown: '50px', xsDown: '30px' },
    })}
  >
    <div
      className={cva({
        base: {
          position: 'relative',
          bgColor: 'white',
          rounded: { base: 4, mdDown: 1.5 },
          transition: 'background 0.2s',
          w: { base: '50px', mdDown: '30px', xsDown: '20px' },
          h: { base: '50px', mdDown: '30px', xsDown: '20px' },
        },
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
      <div
        className={cva({
          base: {
            w: 'full',
            h: 'full',
            rounded: 4,
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
      >
        <ClubIconBG />
      </div>
    </div>
    <div
      className={css({ display: 'flex', flexDir: 'column', gap: '10px', alignItems: 'center', position: 'relative' })}
    >
      {selected && (
        <motion.div
          layoutId="categorySelection"
          className={css({
            h: 1,
            w: { base: '50px', mdDown: '30px', xsDown: '20px' },
            bgColor: 'red.2',
            rounded: 'full',
            position: 'absolute',
          })}
        />
      )}
      <div />
      <div
        className={cva({
          base: {
            fontSize: { base: 12, mdDown: 10 },
            fontWeight: 600,
            color: 'darkGray.1',
            transition: 'all 0.256s',
            hideBelow: 'sm',
          },
          variants: { selected: { true: { color: 'red.2' } } },
        })({ selected })}
      >
        {text}
      </div>
    </div>
  </button>
)

export default CategoryButton
