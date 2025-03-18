import { css } from '@styled-system/css'
import { useSetAtom } from 'jotai'
import { CircleUser, MapPin } from 'lucide-react'
import { MouseEvent } from 'react'
import { createPortal } from 'react-dom'

import EditSchedule from '@/components/timetable/Modal/EditSchedule'
import { isBottomSheetVisible } from '@/domain/Timetable/store/bottomSheetVisibility'
import { GridType } from '@/types/timetable'
import { getDuration, getStartTime } from '@/util/timetableUtil'

const LectureDetail = css({
  fontSize: { base: 14, mdDown: 10 },
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 0.5,
  width: '100%',
})

const EllipsisText = css({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})

interface Props {
  timetableId?: number
  data: GridType
  onClick: () => void
  isMine: boolean
  bgColor?: string
  isScheduleEditOpened: boolean
  setIsScheduleEditOpened: (value: boolean) => void
}
const ScheduledLecture = ({
  timetableId,
  data,
  onClick,
  isMine,
  bgColor,
  isScheduleEditOpened,
  setIsScheduleEditOpened,
}: Props) => {
  const { title, startTime: start, endTime: end, professorName, location } = data
  const startTime = getStartTime(start)
  const runningTime = getDuration(end, start)

  const setIsSheetOpened = useSetAtom(isBottomSheetVisible)

  const closeScheduleModal = () => {
    setIsScheduleEditOpened(false)
    setIsSheetOpened(true)
  }

  const handleModalOutsideClick = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    // 모달 안쪽을 눌렀을 때도 모달 state가 null 되는 것을 방지
    if (event.target === event.currentTarget) {
      setIsScheduleEditOpened(false)
      setIsSheetOpened(true)
    }
  }

  return (
    <>
      <div
        className={css({
          color: 'white',
          position: 'absolute',
          w: 'calc(100% + 1px)',
          p: '0.75rem 0.625rem',
          rounded: { base: 10, mdDown: 5 },
          zIndex: 10,
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        })}
        role="presentation"
        style={{
          top: `${(startTime / 60) * 100}%`,
          height: `calc(${(runningTime / 60) * 100}% + ${runningTime / 60}px)`, // 시간표 사이 선 보간
          backgroundColor: bgColor,
          cursor: isMine ? 'pointer' : 'auto',
        }}
        onClick={onClick}
      >
        <div
          className={css({
            fontSize: { base: 18, mdDown: 12 },
            fontWeight: '500',
            wordWrap: 'break-word',
            overflow: 'hidden',
            lineClamp: { base: 2, mdDown: 3 },
            textOverflow: 'ellipsis',
          })}
        >
          {title}
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
          {professorName && (
            <div className={LectureDetail}>
              <CircleUser size={12} />
              <span className={EllipsisText}>{professorName}</span>
            </div>
          )}
          {location && (
            <div className={LectureDetail}>
              <MapPin size={12} />
              <span className={EllipsisText}>{location}</span>
            </div>
          )}
        </div>
      </div>
      {isScheduleEditOpened &&
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
              flexDir: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: '50px',
            })}
            role="presentation"
            onClick={handleModalOutsideClick}
          >
            <EditSchedule timetableId={timetableId!} data={data} closeScheduleModal={closeScheduleModal} />
          </div>,
          document.body,
        )}
    </>
  )
}

export default ScheduledLecture
