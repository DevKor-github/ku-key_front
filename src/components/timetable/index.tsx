import { css, cva } from '@styled-system/css'
import { useSetAtom } from 'jotai/react'
import { Ellipsis } from 'lucide-react'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

import TimetableLayout from '@/components/timetable/Grid/TimetableLayout'
import OptionModal from '@/components/timetable/Modal/OptionModal'
import { isBottomSheetVisible } from '@/lib/store/bottomSheet'
import { GlobalModalStateType, TimetableInfo } from '@/types/timetable'
import { numberToSemester } from '@/util/timetableUtil'

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

/**
 * timetableId를 받아, 시간표를 표시합니다
 * 학기와 시간표 이름, 옵션 버튼이 포함됩니다
 */
const Timetable = forwardRef<HTMLDivElement, TimetableProps>(
  ({ timetable: { timetableId, timetableName, year, semester }, deleteTimetableHandler }, ref) => {
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
            <OptionModal
              ref={modalRef}
              optionHandler={optionHandler}
              customStyle={{ position: 'absolute', top: '68px', right: 0, zIndex: 50 }}
            />
          )}
          <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, alignItems: 'center' })}>
            <div className={css({ color: 'darkGray.1', fontSize: 20, fontWeight: 700, whiteSpace: 'nowrap' })}>
              {`${year} ${numberToSemester[semester]} semester`}
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
          <div
            className={css({
              display: { base: 'flex', mdDown: 'none' },
              flexDir: 'row',
              gap: 4,
              alignItems: 'center',
              color: 'darkGray.1',
            })}
          >
            <button
              className={optBtn()}
              onClick={() => {
                setIsModalOpen(true)
                setIsSheetVisible(false)
              }}
            >
              <Ellipsis size={20} />
            </button>
          </div>
        </div>
        <TimetableLayout
          timetableId={timetableId}
          globalModalState={globalModalState}
          closeTimetableModal={closeTimetableModal}
          deleteTimetableHandler={deleteTimetableHandler}
        />
      </div>
    )
  },
)

export default Timetable
