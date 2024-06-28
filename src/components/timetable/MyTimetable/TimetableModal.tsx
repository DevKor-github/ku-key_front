import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

import ModalCard from '@/components/ui/modal'

interface TimetableModalProps {
  modalType: 'name' | 'color' | 'delete'
}

const TimetableModal = ({ modalType }: TimetableModalProps) => {
  return (
    <ModalCard
      className={cx(
        css({
          w: 91,
          h: 57,
          bgColor: 'white',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDir: 'column',
          gap: 5,
        }),
        shadow(),
      )}
    >
      {modalType}
    </ModalCard>
  )
}

export default TimetableModal
