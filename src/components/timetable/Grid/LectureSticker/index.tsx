import { css } from '@styled-system/css'
import { useSetAtom } from 'jotai/react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { useDeleteSchedule } from '@/api/hooks/schedule'
import { useDeleteCourse } from '@/api/hooks/timetable'
import NoScheduledLecture from '@/components/timetable/Grid/LectureSticker/NoScheduledLecture'
import ScheduledLecture from '@/components/timetable/Grid/LectureSticker/ScheduledLecture'
import OptionModal from '@/components/timetable/Modal/OptionModal'
import { isBottomSheetVisible } from '@/lib/store/bottomSheet'
import { GridType, TimetableContentsType } from '@/types/timetable'

const isGridType = (val: TimetableContentsType | GridType): val is GridType => {
  return (
    (val as GridType).startTime !== undefined &&
    (val as GridType).endTime !== undefined &&
    (val as GridType).day !== undefined
  )
}

interface LectureStickerProps {
  timetableId?: number
  data: TimetableContentsType | GridType
  isMine: boolean
  bgColor?: string
}

const LectureSticker = ({ timetableId, data, isMine, bgColor }: LectureStickerProps) => {
  const navigate = useNavigate()

  const { title, scheduleType, scheduleId, syllabus } = data

  const [isModalOpened, setIsModalOpen] = useState(false)
  const [isScheduleEditOpened, setIsScheduleEditOpened] = useState(false)
  const setIsSheetOpened = useSetAtom(isBottomSheetVisible)

  const { mutate: deleteCourse } = useDeleteCourse()
  const { mutate: deleteSchedule } = useDeleteSchedule()

  const handleCoursePlanClick = useCallback(() => {
    window.open(syllabus!, '_blank', 'noopener,noreferrer')
    setIsModalOpen(false)
    setIsSheetOpened(true)
  }, [syllabus, setIsSheetOpened])

  const handleReviewClick = useCallback(() => {
    setIsModalOpen(false)
    setIsSheetOpened(true)
    navigate(`/course-review/info?code=${data.courseCode?.slice(0, 7)}&professorName=${data.professorName}`)
  }, [navigate, setIsSheetOpened, data.courseCode, data.professorName])

  const handleCourseDelete = useCallback(() => {
    setIsModalOpen(false)
    deleteCourse({ courseId: scheduleId, timetableId: timetableId! })
    setIsSheetOpened(true)
  }, [scheduleId, timetableId, deleteCourse, setIsSheetOpened])

  const handleEditClick = useCallback(() => {
    setIsModalOpen(false)
    setIsScheduleEditOpened(true)
  }, [])

  const handleScheduleDelete = useCallback(() => {
    setIsModalOpen(false)
    deleteSchedule({ scheduleId })
    setIsSheetOpened(true)
  }, [setIsSheetOpened, deleteSchedule, scheduleId])

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

  const handleLectureClick = () => {
    if (isMine) {
      setIsModalOpen(true)
      setIsSheetOpened(false)
    }
  }

  return (
    <>
      {isGridType(data) ? (
        <ScheduledLecture
          timetableId={timetableId}
          data={data}
          onClick={handleLectureClick}
          isMine={isMine}
          bgColor={bgColor}
          isScheduleEditOpened={isScheduleEditOpened}
          setIsScheduleEditOpened={setIsScheduleEditOpened}
        />
      ) : (
        <NoScheduledLecture data={data} onClick={handleLectureClick} isMine={isMine} />
      )}
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
                setIsSheetOpened(true)
              }
            }}
          >
            <OptionModal
              optionHandler={scheduleType === 'Course' ? courseOptions : scheduleOptions}
              modalTitle={title}
              p10
            />
          </div>,
          document.body,
        )}
    </>
  )
}

export default LectureSticker
