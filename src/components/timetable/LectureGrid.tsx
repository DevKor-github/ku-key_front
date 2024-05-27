import { css } from '@styled-stytem/css'

import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimetableLayout'
import { CourseType } from '@/types/timetable'
import { getDuration, lectureDataPreprocess } from '@/util/timetableUtil'

const LectureGrid = () => {
  // todo: 시간표에 있는 강의를 받아오는 로직

  // Dummy Data
  const data: CourseType[] = [
    {
      professorName: '박정우',
      courseName: '개구리의 먹이사슬',
      courseCode: 'FROG101',
      day: 'Mon',
      startTime: '10:00:00',
      endTime: '11:30:00',
      classroom: '대모산',
    },
    {
      professorName: '하승준',
      courseName: '일반까치학및연습I',
      courseCode: 'MGPI101',
      day: 'Wed',
      startTime: '11:00:00',
      endTime: '12:30:00',
      classroom: '안암역',
    },
    {
      professorName: '이지원',
      courseName: '디지털기획을위한데이터처리와분석',
      courseCode: 'DGDB101',
      day: 'Tue',
      startTime: '09:00:00',
      endTime: '13:10:00',
      classroom: '카페안암동',
    },
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: 'Fri',
      startTime: '14:00:00',
      endTime: '15:20:00',
      classroom: '정보관B101',
    },
  ]

  const lecGrid = lectureDataPreprocess(data)

  return (
    <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' })}>
      {lecGrid.map((lectures, gridInd) => {
        return (
          <div key={gridInd} className={TimeCell({ lectureGrid: true, end: gridInd === 39 ? 'rightEnd' : undefined })}>
            {lectures.map((lecture, lecInd) => {
              return (
                <LectureSticker
                  key={lecInd}
                  name={lecture.courseName}
                  runningTime={getDuration(lecture.endTime, lecture.startTime)}
                  professor={lecture.professorName}
                  room={lecture.classroom}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default LectureGrid
