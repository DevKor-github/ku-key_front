import { css } from '@styled-system/css'
import { Link } from 'react-router-dom'

import { characterConfig } from '@/components/ui/profile/CharacterConfig'

interface SideTabLogInLinkProps {
  handleSheetNavClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navName: string) => void
}
const SideTabLogInLink = ({ handleSheetNavClick }: SideTabLogInLinkProps) => {
  return (
    <Link
      to="/login"
      className={css({
        display: 'flex',
        bgColor: 'lightGray.2',
        rounded: 10,
        px: 4,
        py: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
      onClick={e => handleSheetNavClick(e, 'login')}
    >
      <p className={css({ textStyle: 'heading3_M', color: 'darkGray.2', py: 2.5 })}>you need to login</p>
      <img
        src={characterConfig['anonymous'][1]}
        alt="profile"
        className={css({ w: 15, bgColor: '#D9D9D9', rounded: 'full' })}
      />
    </Link>
  )
}

export default SideTabLogInLink
