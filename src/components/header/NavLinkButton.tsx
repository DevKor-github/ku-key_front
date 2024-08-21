import { css } from '@styled-stytem/css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
interface NavLinkProps {
  isSelected: boolean
  targetRoute: string
  navName: string
  innerTab?: string
}
export const NavLinkButton = ({ isSelected, targetRoute, navName, innerTab }: NavLinkProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.div
      className={css({
        display: 'inline-flex',
        pos: 'relative',
      })}
      // onHoverStart={() => setIsHover(true)}
      // onHoverEnd={() => setIsHover(false)}
    >
      <motion.div
        className={css({
          display: 'inline-flex',
          px: 2.5,
          py: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          rounded: 30,
          textStyle: 'heading3_M',
          letterSpacing: '-0.4px',
          color: isSelected ? 'white' : 'darkGray.2',
          _hover: { bgColor: 'bg.gray', color: 'darkGray.2' },
          bgColor: isSelected ? 'darkGray.2' : 'transparent',
          transition: 'all 0.3s ease-out',
        })}
      >
        <Link to={`/${targetRoute}`}>{navName}</Link>
      </motion.div>
      {/* <AnimatePresence>
        {isHover && (
          <motion.button
            className={css({
              display: 'flex',
              pos: 'absolute',
              bottom: -10,
              maxH: 9,
              px: 5,
              gap: 5,
              rounded: 30,
              alignSelf: 'stretch',
              alignItems: 'center',
              color: 'white',
              bgColor: 'darkGray.1',
              _hover: { color: 'lightGray.1' },
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s ease-out',
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            })}
          >
            hi
          </motion.button>
        )}
      </AnimatePresence> */}
    </motion.div>
  )
}
