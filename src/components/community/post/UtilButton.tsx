import { css } from '@styled-stytem/css'
import { Ellipsis } from 'lucide-react'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

interface UtilButtonProps {
  isMine: boolean
  handleNavigation?: () => void
  isEditable: boolean
}
const UtilButton = ({ isMine, handleNavigation, isEditable }: UtilButtonProps) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          className={css({
            rounded: 'full',
            w: '30px',
            h: '30px',
            _hover: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
            _open: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
          })}
        >
          <Ellipsis className={css({ color: 'darkGray.1' })} />
        </MenubarTrigger>
        <MenubarContent>
          {isEditable && (
            <>
              <MenubarItem onClick={handleNavigation}>Edit</MenubarItem>
              <MenubarItem>Delete</MenubarItem>
            </>
          )}
          {!isMine && <MenubarItem>Report</MenubarItem>}
          <MenubarItem>Share URL</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default UtilButton
