import { css } from '@styled-stytem/css'
import { CircleAlert } from 'lucide-react'

import Button from '@/components/ui/button'
import ModalCard from '@/components/ui/modal'
import ModalPortal, { ModalPortalProps } from '@/components/ui/modal/ModalPortal'

interface AlertModalProps extends Omit<ModalPortalProps, 'children'> {
  modalRef: React.RefObject<HTMLDivElement>
  title: string
  content: string
  closeText: string
  confirmText: string
  onConfirm: () => void
  handleButtonClose?: () => void
}
const AlertModal = (props: AlertModalProps) => {
  const { modalRef, title, content, closeText, confirmText, onConfirm, isOpen, handleLayoutClose, handleButtonClose } =
    props
  return (
    <ModalPortal isOpen={isOpen} handleLayoutClose={handleLayoutClose}>
      <ModalCard variant="alert" ref={modalRef}>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'white' })}>
          <CircleAlert size={58} className={css({ fill: 'red.3', color: 'white' })} />
          <div className={css({ fontWeight: 700, color: 'black.2', fontSize: 24 })}>{title}</div>
        </div>
        <div className={css({ fontWeight: 500, fontSize: 18, textAlign: 'center', color: 'black.2' })}>{content}</div>
        <div className={css({ display: 'flex', gap: 5 })}>
          {handleButtonClose && (
            <Button variant="cancel" onClick={handleButtonClose}>
              {closeText}
            </Button>
          )}
          <Button variant="confirm" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </ModalCard>
    </ModalPortal>
  )
}

export default AlertModal
