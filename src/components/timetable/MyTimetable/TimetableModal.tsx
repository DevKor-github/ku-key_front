import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { CircleAlert } from 'lucide-react'

import ModalCard from '@/components/ui/modal'

const modalBtn = cva({
  base: {
    px: 8,
    rounded: 'full',
    h: 14,
    fontWeight: 500,
    fontSize: 18,
    cursor: 'pointer',
  },
  variants: {
    warning: {
      true: {
        color: 'white',
        bgColor: 'red.3',
      },
      false: {
        color: 'black.2',
        bgColor: 'lightGray.2',
      },
    },
  },
})

const NameChangeModal = () => {
  return <></>
}

const ColorChangeModal = () => {
  return <></>
}

const DeleteModal = ({
  setGlobalModalState,
  deleteTimetableHandler,
  timeTableId,
}: {
  setGlobalModalState: React.Dispatch<React.SetStateAction<'color' | 'name' | 'delete' | null>>
  deleteTimetableHandler: (timeTableId: number) => void
  timeTableId: number
}) => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center' })}>
        <CircleAlert size={58} className={css({ color: 'red.3' })} />
        <div className={css({ fontWeight: 700, color: 'black.2', fontSize: 24 })}>Are you sure?</div>
      </div>
      <div className={css({ fontWeight: 500, fontSize: 18, textAlign: 'center', color: 'black.2' })}>
        Once a timetable has been deleted, it cannot be restored.
      </div>
      <div className={css({ display: 'flex', gap: 5 })}>
        <button className={modalBtn({ warning: false })} onClick={() => setGlobalModalState(null)}>
          No, Keep it
        </button>
        <button
          className={modalBtn({ warning: true })}
          onClick={() => {
            setGlobalModalState(null)
            deleteTimetableHandler(timeTableId)
          }}
        >
          Yes, Delete!
        </button>
      </div>
    </>
  )
}

interface TimetableModalProps {
  modalType: 'name' | 'color' | 'delete'
  setGlobalModalState: React.Dispatch<React.SetStateAction<'color' | 'name' | 'delete' | null>>
  deleteTimetableHandler: (timeTableId: number) => void
  timeTableId: number
}

const TimetableModal = ({
  modalType,
  setGlobalModalState,
  deleteTimetableHandler,
  timeTableId,
}: TimetableModalProps) => {
  return (
    <ModalCard
      className={cx(
        css({
          bgColor: 'white',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDir: 'column',
          gap: 5,
          px: 10,
          py: 8,
        }),
        shadow(),
      )}
    >
      {modalType === 'name' && <NameChangeModal />}
      {modalType === 'color' && <ColorChangeModal />}
      {modalType === 'delete' && (
        <DeleteModal
          setGlobalModalState={setGlobalModalState}
          deleteTimetableHandler={deleteTimetableHandler}
          timeTableId={timeTableId}
        />
      )}
    </ModalCard>
  )
}

export default TimetableModal
