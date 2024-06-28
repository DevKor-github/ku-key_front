import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { CaseSensitive, Ellipsis, Palette, Plus, Trash2 } from 'lucide-react'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import TimetableModal from '@/components/timetable/MyTimetable/TimetableModal'
import TimetableLayout from '@/components/timetable/TimetableLayout'
import ModalCard from '@/components/ui/modal'
import { TimetableInfo } from '@/types/timetable'

const optBtn = cva({
  base: {
    cursor: 'pointer',
    transition: 'background 0.256s',
    rounded: 'full',
    h: '30px',
    w: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    _hover: {
      bgColor: 'lightGray.1',
    },
  },
})

const optBlock = css({
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h: 12,
  cursor: 'pointer',
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
  setGlobalModalState: React.Dispatch<React.SetStateAction<'color' | 'name' | 'delete' | null>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OptionModal = forwardRef<HTMLDivElement, OptionModalProps>(({ setGlobalModalState, setIsModalOpen }, ref) => {
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
            setIsModalOpen(false)
            setGlobalModalState('name')
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
            setIsModalOpen(false)
            setGlobalModalState('color')
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
            setIsModalOpen(false)
            setGlobalModalState('delete')
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
interface TimeTableProps {
  timetable: TimetableInfo
}

const Timetable = ({ timetable: { timeTableId, tableName, year, semester } }: TimeTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [globalModalState, setGlobalModalState] = useState<null | 'name' | 'color' | 'delete'>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setIsModalOpen(false)
      }
    }

    // 이벤트 리스너를 document 전체에 붙여줌
    document.addEventListener('mousedown', closeModal)

    return () => {
      document.removeEventListener('mousedown', closeModal)
    }
  }, [isModalOpen])

  return (
    <div className={css({ w: '100%' })}>
      <div
        className={css({
          w: '100%',
          h: 16,
          display: 'flex',
          flexDir: 'row',
          justifyContent: 'space-between',
          bgColor: 'bg.gray',
          roundedTop: 10,
          border: '1px {colors.lightGray.1} solid',
          px: 8,
          alignItems: 'center',
          position: 'relative',
        })}
      >
        {isModalOpen && (
          <OptionModal ref={modalRef} setGlobalModalState={setGlobalModalState} setIsModalOpen={setIsModalOpen} />
        )}
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
          <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, wordWrap: 'break-word' })}>
            {`${year} ${semester} semester`}
          </div>
          <div
            className={css({ border: 'none', color: 'lightGray.1', fontWeight: 500, fontSize: 18, outline: 'none' })}
          >
            {tableName}
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 4, alignItems: 'center', color: 'darkGray.1' })}>
          <button className={optBtn()}>
            <Plus size={20} />
          </button>
          <button className={optBtn()} onClick={() => setIsModalOpen(true)}>
            <Ellipsis size={20} />
          </button>
        </div>
      </div>
      <TimetableLayout timeTableId={timeTableId} />
      {globalModalState &&
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
            onClick={() => setGlobalModalState(null)}
          >
            <TimetableModal modalType={globalModalState} />
          </div>,
          document.body,
        )}
    </div>
  )
}

export default Timetable
