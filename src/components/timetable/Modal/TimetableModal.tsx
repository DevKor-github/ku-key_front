import { css, cva, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { CaseSensitive, CircleAlert, Palette } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import { useUpdateTimetableName } from '@/api/hooks/timetable'
import ColorSelector from '@/components/timetable/Button/ColorSelector'
import { Input } from '@/components/ui/input'
import ModalCard from '@/components/ui/modal'
import { ColorType, GlobalModalStateType } from '@/types/timetable'
import { ColorTypeArr } from '@/util/timetableUtil'

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

const NameChangeModal = ({
  closeModal,
  timetableId,
  curTimetableName,
}: {
  closeModal: () => void
  timetableId: number
  curTimetableName: string
}) => {
  const [nameInput, setNameInput] = useState('')
  const { mutate: changeTableName } = useUpdateTimetableName()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      closeModal()
      changeTableName({ timetableName: nameInput, timetableId })
    },
    [closeModal, changeTableName, nameInput, timetableId],
  )

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
        <CaseSensitive size={58} className={css({ color: 'lightGray.1' })} />
        <div className={css({ fontWeight: 700, fontSize: 24, color: 'black.2' })}>Name</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          // eslint-disable-next-line
          autoFocus
          value={nameInput}
          placeholder={curTimetableName}
          className={css({
            w: 71,
            h: 13,
            borderColor: 'lightGray.1',
            outline: 'none',
            bgColor: 'bg.gray',
            fontSize: 18,
            _placeholder: {
              color: 'lightGray.1',
            },
          })}
          onChange={e => setNameInput(e.target.value)}
        />
      </form>
    </>
  )
}

const ColorChangeModal = ({
  closeModal,
  timetableId,
  curColor,
}: {
  closeModal: () => void
  timetableId: number
  curColor: ColorType
}) => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
        <Palette size={58} className={css({ color: 'lightGray.1' })} />
        <div className={css({ fontWeight: 700, fontSize: 24, color: 'black.2' })}>Color</div>
      </div>
      <div className={css({ display: 'flex', gap: 2.5 })}>
        {ColorTypeArr.map((color, index) => {
          return (
            <ColorSelector
              key={index}
              colorTheme={color}
              closeModal={closeModal}
              timetableId={timetableId}
              isSelected={curColor === color}
            />
          )
        })}
      </div>
    </>
  )
}

const DeleteModal = ({
  closeModal,
  deleteTimetableHandler,
  timetableId,
}: {
  closeModal: () => void
  deleteTimetableHandler: (timetableId: number) => void
  timetableId: number
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
        <button className={modalBtn({ warning: false })} onClick={closeModal}>
          No, Keep it
        </button>
        <button
          className={modalBtn({ warning: true })}
          onClick={() => {
            closeModal()
            deleteTimetableHandler(timetableId)
          }}
        >
          Yes, Delete!
        </button>
      </div>
    </>
  )
}

interface TimetableModalProps {
  modalType: GlobalModalStateType
  closeModal: () => void
  deleteTimetableHandler: (timetableId: number) => void
  timetableId: number
  timetableName: string
  curColor: ColorType
}

const TimetableModal = ({
  modalType,
  closeModal,
  deleteTimetableHandler,
  timetableId,
  timetableName,
  curColor,
}: TimetableModalProps) => {
  return (
    <>
      {modalType &&
        createPortal(
          <div
            className={css({
              position: 'fixed',
              top: 0,
              left: 0,
              w: '100vw',
              h: '100vh',
              bgColor: 'rgba(0, 0, 0, 0.40)',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
            role="presentation"
            onClick={event => {
              // 모달 안쪽을 눌렀을 때도 모달 state가 null 되는 것을 방지
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
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
              {modalType === 'name' && (
                <NameChangeModal closeModal={closeModal} timetableId={timetableId} curTimetableName={timetableName} />
              )}
              {modalType === 'color' && (
                <ColorChangeModal closeModal={closeModal} timetableId={timetableId} curColor={curColor} />
              )}
              {modalType === 'delete' && (
                <DeleteModal
                  closeModal={closeModal}
                  deleteTimetableHandler={deleteTimetableHandler}
                  timetableId={timetableId}
                />
              )}
            </ModalCard>
          </div>,
          document.body,
        )}
    </>
  )
}

export default TimetableModal
