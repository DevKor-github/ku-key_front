import { css, cva } from '@styled-stytem/css'
import { Ellipsis, Plus } from 'lucide-react'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import LectureBottomSheet from '@/components/timetable/MyTimetable/LectureBottomSheet'
import OptionModal from '@/components/timetable/MyTimetable/OptionModal'
import TimetableModal from '@/components/timetable/MyTimetable/TimetableModal'
import TimetableLayout from '@/components/timetable/TimetableLayout'
import { GlobalModalStateType, TimetableInfo } from '@/types/timetable'

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

interface TimetableProps {
  timetable: TimetableInfo
  deleteTimetableHandler: (timetableId: number) => void
}

const Timetable = forwardRef<HTMLDivElement, TimetableProps>(
  ({ timetable: { timetableId, timetableName, year, semester }, deleteTimetableHandler }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [globalModalState, setGlobalModalState] = useState<GlobalModalStateType>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    const openTimetableModal = useCallback(
      (value: GlobalModalStateType) => {
        if (value !== null) {
          setGlobalModalState(value)
        }
      },
      [setGlobalModalState],
    )

    const closeTimetableModal = useCallback(() => {
      setGlobalModalState(null)
    }, [setGlobalModalState])

    const closeOptionModal = useCallback(() => {
      setIsModalOpen(false)
    }, [setIsModalOpen])

    useEffect(() => {
      const closeModal = (e: MouseEvent) => {
        if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
          setIsModalOpen(false)
        }
      }

      // document 전역에 closeModal event를 달아주어, modal을 제외한 영역을 클릭 시 모달이 닫히도록
      document.addEventListener('mousedown', closeModal)
      return () => {
        document.removeEventListener('mousedown', closeModal)
      }
    }, [isModalOpen])

    return (
      <div className={css({ w: '100%' })} ref={ref}>
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
            <OptionModal ref={modalRef} openTimetableModal={openTimetableModal} closeOptModal={closeOptionModal} />
          )}
          <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
            <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, whiteSpace: 'nowrap' })}>
              {`${year} ${semester} semester`}
            </div>
            <div
              className={css({
                border: 'none',
                color: 'lightGray.1',
                fontWeight: 500,
                fontSize: 18,
                outline: 'none',
                w: '70%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              })}
            >
              {timetableName}
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
        <TimetableLayout timetableId={timetableId} />
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
              onClick={event => {
                // 모달 안쪽을 눌렀을 때도 모달 state가 null 되는 것을 방지
                if (event.target === event.currentTarget) {
                  closeTimetableModal()
                }
              }}
            >
              <TimetableModal
                timetableId={timetableId}
                modalType={globalModalState}
                closeModal={closeTimetableModal}
                deleteTimetableHandler={deleteTimetableHandler}
                timetableName={timetableName}
              />
            </div>,
            document.body,
          )}
        <LectureBottomSheet />
      </div>
    )
  },
)

export default Timetable
