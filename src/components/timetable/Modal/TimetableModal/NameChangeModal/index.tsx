import { CaseSensitive } from 'lucide-react'
import { useCallback, useState } from 'react'

import * as s from './style.css'

import { useUpdateTimetableName } from '@/api/hooks/timetable'
import { Input } from '@/components/ui/input'

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
      <div className={s.TitleWrapper}>
        <CaseSensitive size={58} className={s.Icon} />
        <div className={s.Title}>Name</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          // eslint-disable-next-line
          autoFocus
          value={nameInput}
          placeholder={curTimetableName}
          className={s.Input}
          onChange={e => setNameInput(e.target.value)}
        />
      </form>
    </>
  )
}

export default NameChangeModal
