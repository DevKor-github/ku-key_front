import { css } from '@styled-stytem/css'

import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimetableLayout'
import { CourseType } from '@/types/timetable'
import { lectureDataPreprocess } from '@/util/timetableUtil'

const LectureGrid = () => {
  // todo: 시간표에 있는 강의를 받아오는 로직

  // Dummy Data
  const data: CourseType[] = [
    {
      professorName: '박정우',
      courseName: '개구리의 먹이사슬',
      courseCode: 'FROG101',
      day: '월',
      startTime: 60,
      endTime: 150,
      classroom: '대모산',
    },
    {
      professorName: '하승준',
      courseName: '일반까치학및연습I',
      courseCode: 'MGPI101',
      day: '수',
      startTime: 120,
      endTime: 210,
      classroom: '안암역',
    },
    {
      professorName: '이지원',
      courseName: '디지털기획을위한데이터처리와분석',
      courseCode: 'DGDB101',
      day: '화',
      startTime: 0,
      endTime: 250,
      classroom: '카페안암동',
    },
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: '금',
      startTime: 300,
      endTime: 380,
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
                  runningTime={lecture.endTime - lecture.startTime}
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
