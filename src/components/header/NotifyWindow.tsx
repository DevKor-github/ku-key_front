import * as Popover from '@radix-ui/react-popover'
import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { Bell } from 'lucide-react'

import NotifyContent from '@/components/header/notification/NotifyContent'

const NotifyWindow = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
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
          <NotifyContent />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default NotifyWindow
