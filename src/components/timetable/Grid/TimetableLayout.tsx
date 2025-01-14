import { css, cva } from '@styled-system/css'
import { memo } from 'react'
import { createPortal } from 'react-dom'

import { useGetTimetable } from '@/api/hooks/timetable'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import TimetableModal from '@/components/timetable/Modal/TimetableModal'
import { GlobalModalStateType } from '@/types/timetable'

export const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: { base: 18, mdDown: 12 },
    fontWeight: '500',
    wordWrap: 'break-word',
    h: { base: 27, mdDown: 18 },
    borderRight: '1px solid {colors.lightGray.1}',
    borderBottom: '1px solid {colors.lightGray.1}',
    position: 'relative',
  },
  variants: {
    header: {
      true: {
        h: 10,
      },
    },
    sidebar: {
      true: {
        bgColor: 'bg.gray',
        w: { base: '4.125rem', mdDown: 9 },
      },
    },
    end: {
      leftEnd: {
        roundedBottomLeft: 10,
      },
      rightEnd: {
        roundedBottomRight: 10,
      },
    },
    lectureGrid: {
      true: {
        display: 'block',
      },
    },
  },
})

interface TimetableLayoutProps {
  timetableId: number
  globalModalState: GlobalModalStateType
  closeTimetableModal: () => void
  deleteTimetableHandler: (timetableId: number) => void
  timetableName: string
}

/**
 * 시간표 내 그리드 컴포넌트
 * 시간표 제목 헤더를 제외한 실제 그리드를 구성합니다
 */
const TimetableLayout = memo(
  ({
    timetableId,
    globalModalState,
    closeTimetableModal,
    deleteTimetableHandler,
    timetableName,
  }: TimetableLayoutProps) => {
    const { data } = useGetTimetable({ timetableId })

    return (
      <>
        <LectureGrid timetableId={timetableId} timetableData={data} isMine={true} />
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
                curColor={data.color}
              />
            </div>,
            document.body,
          )}
      </>
    )
  },
)

export default TimetableLayout
