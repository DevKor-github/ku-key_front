import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import * as s from './style.css'

import ColorChangeModal from '@/components/timetable/Modal/TimetableModal/ColorChangeModal'
import DeleteModal from '@/components/timetable/Modal/TimetableModal/DeleteModal'
import NameChangeModal from '@/components/timetable/Modal/TimetableModal/NameChangeModal'
import ModalCard from '@/components/ui/modal'
import { ColorType, GlobalModalStateType } from '@/types/timetable'

interface Props {
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
}: Props) => {
  return (
    <>
      {modalType &&
        createPortal(
          <div
            className={s.ModalPortal}
            role="presentation"
            onClick={event => {
              // 모달 안쪽을 눌렀을 때도 모달 state가 null 되는 것을 방지
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
            <ModalCard className={s.ModalCard}>
              <Contents
                type={modalType}
                timetableId={timetableId}
                timetableName={timetableName}
                curColor={curColor}
                closeModal={closeModal}
                deleteTimetableHandler={deleteTimetableHandler}
              />
            </ModalCard>
          </div>,
          document.body,
        )}
    </>
  )
}

export default TimetableModal

interface ContentsProps {
  type: 'name' | 'color' | 'delete'
  timetableId: number
  timetableName: string
  curColor: ColorType
  closeModal: () => void
  deleteTimetableHandler: (timetableId: number) => void
}
const Contents = ({
  type,
  timetableId,
  timetableName,
  curColor,
  closeModal,
  deleteTimetableHandler,
}: ContentsProps) => {
  return (
    <>
      {match(type)
        .with('name', () => (
          <NameChangeModal closeModal={closeModal} timetableId={timetableId} curTimetableName={timetableName} />
        ))
        .with('color', () => <ColorChangeModal closeModal={closeModal} timetableId={timetableId} curColor={curColor} />)
        .otherwise(() => (
          <DeleteModal
            closeModal={closeModal}
            deleteTimetableHandler={deleteTimetableHandler}
            timetableId={timetableId}
          />
        ))}
    </>
  )
}
