import { memo } from 'react'

import { useGetTimetable } from '@/api/hooks/timetable'
import LectureGrid from '@/components/timetable/Grid/LectureGrid'
import NullTable from '@/components/timetable/Grid/NullTable'
import TimetableModal from '@/components/timetable/Modal/TimetableModal'
import { GlobalModalStateType } from '@/types/timetable'

interface TimetableLayoutProps {
  timetableId: number
  globalModalState: GlobalModalStateType
  closeTimetableModal: () => void
  deleteTimetableHandler: (timetableId: number) => void
}

/**
 * 시간표 내 그리드 컴포넌트
 * 시간표 제목 헤더를 제외한 실제 그리드를 구성합니다
 */
const TimetableLayout = memo(
  ({ timetableId, globalModalState, closeTimetableModal, deleteTimetableHandler }: TimetableLayoutProps) => {
    const {
      data: { timetable: timetableData },
    } = useGetTimetable({ timetableId })

    if (timetableData === null) return <NullTable />

    return (
      <>
        <LectureGrid timetableId={timetableId} timetableData={timetableData} isMine={true} />
        <TimetableModal
          modalType={globalModalState}
          closeModal={closeTimetableModal}
          deleteTimetableHandler={deleteTimetableHandler}
          timetableId={timetableId}
          timetableName={timetableData.timetableName}
          curColor={timetableData.color}
        />
      </>
    )
  },
)

export default TimetableLayout
