import { css } from '@styled-stytem/css'
import { CircleAlert } from 'lucide-react'

import ModalCard from '@/components/ui/modal'
import ModalPortal, { ModalPortalProps } from '@/components/ui/modal/ModalPortal'

interface NoticeModalProps extends Omit<ModalPortalProps, 'children' | 'handleLayoutClose' | 'selfClose'> {
  content: string
}
const NoticeModal = ({ content, isOpen }: NoticeModalProps) => {
  return (
    <ModalPortal selfClose={true} isOpen={isOpen}>
      <ModalCard>
        <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
          <CircleAlert size={20} className={css({ color: 'white', fill: 'red.3' })} />
          <p className={css({ fontSize: 20, fontWeight: 800, color: 'red.1' })}>Notice</p>
        </div>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'red.1' })}>{content}</p>
      </ModalCard>
    </ModalPortal>
  )
}

export default NoticeModal
