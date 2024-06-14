import { css } from '@styled-stytem/css'
import { Link } from 'react-router-dom'

interface NavLinkProps {
  isSelected: boolean
  targetRoute: string
  navName: string
}
export const NavLinkButton = ({ isSelected, targetRoute, navName }: NavLinkProps) => {
  return (
    <button
      className={css({ display: 'flex', flexDir: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' })}
    >
      <Link
        className={css({
          fontSize: 20,
          fontWeight: 600,
          color: isSelected ? 'red.2' : 'darkGray.2',
          _hover: { color: 'red.2' },
          transition: 'color 0.15s ease-in',
        })}
        to={`/${targetRoute}`}
      >
        {navName}
      </Link>
      <div
        aria-selected={isSelected}
        className={css({
          w: 'full',
          h: 1.5,
          _selected: { bgColor: 'red.2', rounded: 15, transition: 'background-color 0.15s ease-in' },
        })}
      />
    </button>
  )
}
