import { css } from '@styled-stytem/css'
import { useSetAtom } from 'jotai/react'
import { CircleUser, MapPin } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { useDeleteSchedule } from '@/api/hooks/schedule'
import { useDeleteCourse } from '@/api/hooks/timetable'
import EditSchedule from '@/components/timetable/Modal/EditSchedule'
import OptionModal from '@/components/timetable/Modal/OptionModal'
import { isBottomSheetVisible } from '@/lib/store/bottomSheet'
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

interface LectureStickerProps {
  timetableId?: number
  data: GridType
  bgColor: string
  isMine: boolean
}

const LectureSticker = ({ timetableId, data, bgColor, isMine }: LectureStickerProps) => {
  const navigate = useNavigate()

  const { title, startTime: start, endTime: end, professorName, location, schedType, scheduleId, syllabus } = data
  const startTime = getStartTime(start)
  const runningTime = getDuration(end, start)

  const [isModalOpened, setIsModalOpen] = useState(false)
  const [isScheduleEditOpened, setIsScheduleEditOpened] = useState(false)
  const setIsSheetOpend = useSetAtom(isBottomSheetVisible)

  const closeScheduleModal = useCallback(() => {
    setIsScheduleEditOpened(false)
    setIsSheetOpend(true)
  }, [setIsScheduleEditOpened, setIsSheetOpend])

  const { mutate: deleteCourse } = useDeleteCourse()
  const { mutate: deleteSchedule } = useDeleteSchedule()

  const handleCoursePlanClick = useCallback(() => {
    window.open(syllabus!, '_blank', 'noopener,noreferrer')
    setIsModalOpen(false)
    setIsSheetOpend(true)
  }, [syllabus, setIsSheetOpend])

  const handleReviewClick = useCallback(() => {
    setIsModalOpen(false)
    setIsSheetOpend(true)
    navigate(`/course-review/info/${data.courseCode?.slice(0, 7)}/${data.professorName}`)
  }, [navigate, setIsSheetOpend, data.courseCode, data.professorName])

  const handleCourseDelete = useCallback(() => {
    setIsModalOpen(false)
    deleteCourse({ courseId: scheduleId, timetableId: timetableId! })
    setIsSheetOpend(true)
  }, [scheduleId, timetableId, deleteCourse, setIsSheetOpend])

  const handleEditClick = useCallback(() => {
    setIsModalOpen(false)
    setIsScheduleEditOpened(true)
  }, [])

  const handleScheduleDelete = useCallback(() => {
    setIsModalOpen(false)
    deleteSchedule({ scheduleId })
    setIsSheetOpend(true)
  }, [setIsSheetOpend, deleteSchedule, scheduleId])

  const courseOptions = [
    {
      title: 'Course plan',
      onClick: handleCoursePlanClick,
    },
    {
      title: 'Review',
      onClick: handleReviewClick,
    },
    {
      title: 'Delete',
      onClick: handleCourseDelete,
    },
  ]
  const scheduleOptions = [
    {
      title: 'Edit',
      onClick: handleEditClick,
    },
    {
      title: 'Delete',
      onClick: handleScheduleDelete,
    },
  ]

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
        onClick={() => {
          if (isMine) {
            setIsModalOpen(true)
            setIsSheetOpend(false)
          }
        }}
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
      {isModalOpened &&
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
                setIsModalOpen(false)
                setIsSheetOpend(true)
              }
            }}
          >
            <OptionModal
              optionHandler={schedType === 'Course' ? courseOptions : scheduleOptions}
              modalTitle={title}
              p10
            />
          </div>,
          document.body,
        )}
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
            onClick={event => {
              // 모달 안쪽을 눌렀을 때도 모달 state가 null 되는 것을 방지
              if (event.target === event.currentTarget) {
                setIsScheduleEditOpened(false)
                setIsSheetOpend(true)
              }
            }}
          >
            <EditSchedule timetableId={timetableId!} data={data} closeScheduleModal={closeScheduleModal} />
          </div>,
          document.body,
        )}
    </>
  )
}

export default LectureSticker
