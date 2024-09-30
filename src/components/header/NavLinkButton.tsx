import { css } from '@styled-system/css'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

interface NavLinkProps {
  isSelected: boolean
  targetRoute: string
  navName: string
  innerTab?: string[]
  isOpen: boolean
  handleOpen: () => void
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navName: string) => void
}
export const NavLinkButton = forwardRef<HTMLDivElement, NavLinkProps>(
  ({ isSelected, targetRoute, navName, innerTab, isOpen, handleOpen, handleNavClick }, ref) => {
    return (
      <div
        className={css({
          display: 'inline-flex',
          pos: 'relative',
        })}
      >
        <div
          className={css({
            display: 'inline-flex',
            px: 2.5,
            py: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            rounded: 30,
            textStyle: 'heading3_M',
            letterSpacing: '-0.4px',
            color: isSelected ? 'red.2' : 'darkGray.1',
            _hover: { color: 'red.2' },
            transition: 'all 0.2s ease-out',
            gap: 2.5,
          })}
        >
          <Link to={`/${targetRoute}`} onClick={e => handleNavClick(e, navName)}>
            {navName}
          </Link>
          {navName === 'Timetable' && (
            <ChevronDown size={20} style={{ rotate: isOpen ? '180deg' : 'none', transition: 'all 0.2s ease' }} />
          )}
        </div>
        <AnimatePresence>
          {isOpen && innerTab && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, zoom: 0.95 }}
              animate={{ opacity: 1, zoom: 1 }}
              exit={{ opacity: 0, zoom: 0.95 }}
              transition={{ duration: 0.2 }}
              className={css({
                display: 'flex',
                pos: 'absolute',
                bottom: -25,
                left: '50%',
                transform: 'translateX(-50%)',
                px: '30px',
                py: 5,
                gap: 5,
                alignSelf: 'stretch',
                rounded: 10,
                bgColor: 'darkGray.1',
                color: 'white',
                zIndex: 10,
              })}
            >
              <Link
                to={`/${innerTab[0]}`}
                onClickCapture={handleOpen}
                className={css({
                  textStyle: 'heading3_M',
                  _hover: { color: 'lightGray.1', transition: 'all 0.2s ease-out' },
                })}
                style={{ whiteSpace: 'nowrap' }}
              >
                {'My schedule'}
              </Link>
              <Link
                to={`/${innerTab[1]}`}
                onClickCapture={handleOpen}
                className={css({
                  textStyle: 'heading3_M',
                  _hover: { color: 'lightGray.1', transition: 'all 0.2s ease-out' },
                })}
                style={{ whiteSpace: 'nowrap' }}
              >
                {'Friend list'}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)
