import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { CaseSensitive, Palette, Trash2 } from 'lucide-react'
import { forwardRef } from 'react'

import ModalCard from '@/components/ui/modal'
import { GlobalModalStateType } from '@/types/timetable'

const optBlock = css({
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h: 12,
  cursor: 'pointer',
  rounded: 10,
  transition: 'background 0.256s',
  _hover: {
    bgColor: 'bg.gray',
  },
})

const optBlockInfo = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2.5,
  color: 'lightGray.1',
  fontSize: 18,
  fontWeight: 700,
})

interface OptionModalProps {
  openTableModal: (value: GlobalModalStateType) => void
  closeOptModal: () => void
}

const OptionModal = forwardRef<HTMLDivElement, OptionModalProps>(({ openTableModal, closeOptModal }, ref) => {
  return (
    <div className={css({ position: 'absolute', top: 17, right: 0, zIndex: 50 })}>
      <ModalCard
        ref={ref}
        className={cx(
          css({
            bgColor: 'white',
            border: 'none',
            w: 60,
            p: 2.5,
            display: 'flex',
            flexDir: 'column',
            gap: 2.5,
          }),
          shadow(),
        )}
      >
        <button
          className={optBlock}
          onClick={() => {
            closeOptModal()
            openTableModal('name')
          }}
        >
          <div className={optBlockInfo}>
            <CaseSensitive />
            Name
          </div>
        </button>
        <button
          className={optBlock}
          onClick={() => {
            closeOptModal()
            openTableModal('color')
          }}
        >
          <div className={optBlockInfo}>
            <Palette />
            Color
          </div>
        </button>
        <button
          className={optBlock}
          onClick={() => {
            closeOptModal()
            openTableModal('delete')
          }}
        >
          <div className={optBlockInfo}>
            <Trash2 />
            Delete
          </div>
        </button>
      </ModalCard>
    </div>
  )
})

export default OptionModal
