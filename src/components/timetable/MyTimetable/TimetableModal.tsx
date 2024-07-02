import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { CaseSensitive, CircleAlert, Palette } from 'lucide-react'
import { useState } from 'react'

import { useUpdateTableName } from '@/api/hooks/timetable'
import ColorSelector from '@/components/timetable/MyTimetable/ColorSelector'
import { Input } from '@/components/ui/input'
import ModalCard from '@/components/ui/modal'
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
  setGlobalModalState,
  timeTableId,
  curTableName,
}: {
  setGlobalModalState: React.Dispatch<React.SetStateAction<'color' | 'name' | 'delete' | null>>
  timeTableId: number
  curTableName: string
}) => {
  const [nameInput, setNameInput] = useState('')
  const { mutate: changeTableName } = useUpdateTableName()
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
        <CaseSensitive size={58} className={css({ color: 'lightGray.1' })} />
        <div className={css({ fontWeight: 700, fontSize: 24, color: 'black.2' })}>Name</div>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setGlobalModalState(null)
          changeTableName({ tableName: nameInput, timeTableId })
        }}
      >
        <Input
          // eslint-disable-next-line
          autoFocus
          value={nameInput}
          placeholder={curTableName}
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
  setGlobalModalState,
  timeTableId,
}: {
  setGlobalModalState: React.Dispatch<React.SetStateAction<'color' | 'name' | 'delete' | null>>
  timeTableId: number
}) => {
  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
        <Palette size={58} className={css({ color: 'lightGray.1' })} />
        <div className={css({ fontWeight: 700, fontSize: 24, color: 'black.2' })}>Color</div>
      </div>
      <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 2.5, rowGap: 5 })}>
        {ColorTypeArr.map((color, ind) => {
          return (
            <ColorSelector
              key={ind}
              colorTheme={color}
              setGlobalModalState={setGlobalModalState}
              timeTableId={timeTableId}
            />
          )
        })}
      </div>
    </>
  )
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
  tableName: string
}

const TimetableModal = ({
  modalType,
  setGlobalModalState,
  deleteTimetableHandler,
  timeTableId,
  tableName,
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
      {modalType === 'name' && (
        <NameChangeModal setGlobalModalState={setGlobalModalState} timeTableId={timeTableId} curTableName={tableName} />
      )}
      {modalType === 'color' && (
        <ColorChangeModal setGlobalModalState={setGlobalModalState} timeTableId={timeTableId} />
      )}
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
