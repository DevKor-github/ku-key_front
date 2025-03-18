import { useSetAtom } from 'jotai/react'
import { Ellipsis } from 'lucide-react'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

import * as s from './style.css'

import { useGetTimetable } from '@/api/hooks/timetable'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import OptionModal from '@/components/timetable/Modal/OptionModal'
import TimetableModal from '@/components/timetable/Modal/TimetableModal'
import { isBottomSheetVisible } from '@/domain/Timetable/store/bottomSheetVisibility'
import { GlobalModalStateType, TimetableInfo } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

interface TimetableProps {
  timetable: TimetableInfo
  deleteTimetableHandler: (timetableId: number) => void
}

/**
 * timetableId를 받아, 시간표를 표시합니다
 * 학기와 시간표 이름, 옵션 버튼이 포함됩니다
 */
const Timetable = forwardRef<HTMLDivElement, TimetableProps>(
  ({ timetable: { timetableId, timetableName, year, semester }, deleteTimetableHandler }, ref) => {
    const { data } = useGetTimetable({ timetableId })

    const [isModalOpen, setIsModalOpen] = useState(false)
    const setIsSheetVisible = useSetAtom(isBottomSheetVisible)
    const [globalModalState, setGlobalModalState] = useState<GlobalModalStateType>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    const optionHandler = [
      {
        title: 'Name',
        onClick: () => handleOptionClick('name'),
      },
      {
        title: 'Color',
        onClick: () => handleOptionClick('color'),
      },
      {
        title: 'Delete',
        onClick: () => handleOptionClick('delete'),
      },
    ]

    const handleOptionClick = useCallback((value: GlobalModalStateType) => {
      setIsModalOpen(false)
      if (value !== null) {
        setGlobalModalState(value)
      }
    }, [])

    const closeTimetableModal = useCallback(() => {
      setGlobalModalState(null)
      setIsSheetVisible(true)
    }, [setGlobalModalState, setIsSheetVisible])

    useEffect(() => {
      const closeModal = (e: MouseEvent) => {
        if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
          setIsModalOpen(false)
          setIsSheetVisible(true)
        }
      }

      // document 전역에 closeModal event를 달아주어, modal을 제외한 영역을 클릭 시 모달이 닫히도록
      document.addEventListener('mousedown', closeModal)
      return () => {
        document.removeEventListener('mousedown', closeModal)
      }
    }, [isModalOpen, setIsSheetVisible])

    return (
      <div className={s.Wrapper} ref={ref}>
        <div className={s.Header}>
          {isModalOpen && (
            <OptionModal
              ref={modalRef}
              optionHandler={optionHandler}
              customStyle={{ position: 'absolute', top: '68px', right: 0, zIndex: 50 }}
            />
          )}
          <div className={s.Info}>
            <div className={s.Semester}>{`${year} ${numberToSemester[semester]} semester`}</div>
            <div className={s.Title}>{timetableName}</div>
          </div>
          <button
            className={s.OptionButton}
            onClick={() => {
              setIsModalOpen(true)
              setIsSheetVisible(false)
            }}
          >
            <Ellipsis size={20} />
          </button>
        </div>
        <LectureGrid timetableId={timetableId} timetableData={data} isMine={true} />
        <TimetableModal
          modalType={globalModalState}
          closeModal={closeTimetableModal}
          deleteTimetableHandler={deleteTimetableHandler}
          timetableId={timetableId}
          timetableName={timetableName}
          curColor={data.color}
        />
      </div>
    )
  },
)

export default Timetable
