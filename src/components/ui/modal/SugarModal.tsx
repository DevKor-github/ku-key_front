import { css } from '@styled-stytem/css'
import { CircleAlert } from 'lucide-react'

import Button from '@/components/ui/button'
import ModalCard from '@/components/ui/modal'
import ModalPortal, { ModalPortalProps } from '@/components/ui/modal/ModalPortal'

interface SugarModalProps extends Omit<ModalPortalProps, 'children'> {
  modalRef: React.RefObject<HTMLDivElement>
  handleButtonClose?: () => void
}
const SugarModal = (props: SugarModalProps) => {
  const { modalRef, isOpen, handleLayoutClose, handleButtonClose } = props
  return (
    <ModalPortal isOpen={isOpen} handleLayoutClose={handleLayoutClose}>
      <ModalCard variant="alert" ref={modalRef} className={css({ px: '60px', py: '50px', gap: '30px' })}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 6, alignItems: 'center' })}>
          <div className={css({ display: 'flex', alignItems: 'center', bgColor: 'white', gap: 1 })}>
            <CircleAlert size={58} className={css({ fill: 'red.3', color: 'white' })} />
            <div className={css({ fontWeight: 700, color: 'red.3', fontSize: 36 })}>What is sugar?</div>
          </div>
          <div
            className={css({
              fontWeight: 500,
              fontSize: 20,
              textAlign: 'center',
              color: 'darkGray.1',
            })}
          >
            Sugar is a point unit used in KU-key.
            <br />
            You can get sugar by following the activities shown below.
          </div>
        </div>
        <div className={css({ display: 'flex', gap: 5 })}>
          {handleButtonClose && (
            <Button variant="confirm" onClick={handleButtonClose}>
              Okay
            </Button>
          )}
        </div>
      </ModalCard>
    </ModalPortal>
  )
}

export default SugarModal
