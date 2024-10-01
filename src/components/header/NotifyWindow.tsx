import * as Popover from '@radix-ui/react-popover'
import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { Bell } from 'lucide-react'
import { useCallback } from 'react'

import AttendanceBtn from '@/components/header/notification/AttendanceBtn'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { HEADER_MESSAGE } from '@/lib/messages/header'
import { useAuth } from '@/util/auth/useAuth'
import { useModal } from '@/util/useModal'

const NotifyWindow = () => {
  const { isOpen, handleOpen } = useModal(true)
  const { authState } = useAuth()
  const handlePopoverClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!authState) {
        e.preventDefault()
        handleOpen()
      }
    },
    [authState, handleOpen],
  )
  return (
    <Popover.Root>
      <Popover.Trigger asChild onClick={handlePopoverClick}>
        <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}>
          <Bell size={20} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={40}
          align="end"
          className={cx(
            css({
              bgColor: 'darkGray.1',
              rounded: 10,
              w: '320px',
              p: 5,
              _open: {
                animation: 'animateIn 0.2s',
              },
              _closed: {
                animation: 'animateOut 0.2s',
              },
              zIndex: 500,
            }),
            shadow(),
          )}
        >
          <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <AttendanceBtn />
              <h2
                className={css({
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: 1,
                })}
              >
                Alarm
              </h2>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
      <NoticeModal isOpen={isOpen} content={HEADER_MESSAGE.NOT_VERIFIED_USER} />
    </Popover.Root>
  )
}

export default NotifyWindow
