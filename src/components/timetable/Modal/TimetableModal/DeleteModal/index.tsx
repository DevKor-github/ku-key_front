import { CircleAlert } from 'lucide-react'

import * as s from './style.css'

import { Button } from '@/ui/Button'

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
      <div className={s.TitleWrapper}>
        <CircleAlert size={58} className={s.Icon} />
        <div className={s.CheckDescription}>Are you sure?</div>
      </div>
      <div className={s.Description}>Once a timetable has been deleted, it cannot be restored.</div>
      <div className={s.ButtonWrapper}>
        <Button variant="gray" onClick={closeModal}>
          No, Keep it
        </Button>
        <Button
          variant="red"
          onClick={() => {
            closeModal()
            deleteTimetableHandler(timetableId)
          }}
        >
          Yes, Delete!
        </Button>
      </div>
    </>
  )
}

export default DeleteModal
