import { css } from '@styled-system/css'
import { Ellipsis } from 'lucide-react'
import { useCallback } from 'react'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { useModal } from '@/util/hooks/useModal'

interface UtilButtonProps {
  isComment: boolean
  isMine: boolean
  handleNavigation?: () => void
  handleDelete?: () => void
  handleReport?: () => void
  isEditable: boolean
  isDeletable: boolean
  disabled?: boolean
}
const UtilButton = ({
  isComment,
  isMine,
  handleNavigation,
  isEditable,
  handleDelete,
  handleReport,
  isDeletable,
  disabled,
}: UtilButtonProps) => {
  const { isOpen, handleOpen } = useModal(true)

  const currentUrl = window.location.href
  const handleShare = useCallback(() => {
    navigator.clipboard.writeText(currentUrl)
    handleOpen()
  }, [currentUrl, handleOpen])
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          disabled={disabled}
          className={css({
            rounded: 'full',
            w: '30px',
            h: '30px',
            visibility: disabled ? 'hidden' : 'visible',
            _hover: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
            _open: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
          })}
        >
          <Ellipsis className={css({ color: 'darkGray.1' })} />
        </MenubarTrigger>
        <MenubarContent>
          <>
            {isEditable && <MenubarItem onClick={handleNavigation}>Edit</MenubarItem>}
            {isDeletable && <MenubarItem onClick={handleDelete}>Delete</MenubarItem>}
            {!isMine && <MenubarItem onClick={handleReport}>Report</MenubarItem>}
            {!isComment && <MenubarItem onClick={handleShare}>Share URL</MenubarItem>}
          </>
        </MenubarContent>
      </MenubarMenu>
      <ModalPortal isOpen={isOpen} handleLayoutClose={handleOpen}>
        <div className={css({ display: 'flex', bgColor: 'white', px: 4, py: 3, rounded: 8 })}>URL has been copied.</div>
      </ModalPortal>
    </Menubar>
  )
}

export default UtilButton
