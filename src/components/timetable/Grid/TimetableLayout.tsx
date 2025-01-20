import { memo } from 'react'

import { useGetTimetable } from '@/api/hooks/timetable'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import TimetableModal from '@/components/timetable/Modal/TimetableModal'
import { GlobalModalStateType } from '@/types/timetable'

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
        <TimetableModal
          modalType={globalModalState}
          closeModal={closeTimetableModal}
          deleteTimetableHandler={deleteTimetableHandler}
          timetableId={timetableId}
          timetableName={timetableName}
          curColor={data.color}
        />
      </>
    )
  },
)

export default TimetableLayout
