import { css } from '@styled-stytem/css'

import LectureSticker from '@/components/timetable/LectureSticker'
import { TimeCell } from '@/components/timetable/TimeTable'

type dayType = '월' | '화' | '수' | '목' | '금'
const dayMap: { [key in dayType]: number } = { 월: 1, 화: 2, 수: 3, 목: 4, 금: 5 }

// 실제 구현체에서는 API interface 그대로 쓰지 말고
// 그냥 강의명, 교수명, 장소, 시작시간, 끝시간, 요일이 하나로 들어가 있는 객체를 각 셀에 투입하는 식으로 구현
interface CourseDetail {
  day: dayType
  startTime: number
  endTime: number
  classroom: string
  period: string
}
interface LectureData {
  professorName: string
  category: string
  college: string
  courseName: string
  courseCode: string
  credit: number
  major: string
  hasExchangeSeat: boolean
  year: string
  semester: string
  courseDetail: CourseDetail[]
}

const LectureGrid = () => {
  // 시간표에 있는 강의를 받아오는 로직
  // Dummy Data
  const data: LectureData[] = [
    {
      professorName: '박정우',
      category: '전공',
      college: '양서류학부',
      courseName: '개구리의 먹이사슬',
      courseCode: 'FROG101',
      credit: 3,
      major: '개구리학과',
      hasExchangeSeat: true,
      year: '2024',
      semester: 'spring',
      courseDetail: [
        { day: '월', startTime: 60, endTime: 150, classroom: '대모산', period: '2' },
        { day: '수', startTime: 60, endTime: 150, classroom: '대모산', period: '2' },
      ],
    },
    {
      professorName: '박정우',
      category: '전공',
      college: '양서류학부',
      courseName: '개구리의 먹이사슬',
      courseCode: 'FROG101',
      credit: 3,
      major: '개구리학과',
      hasExchangeSeat: true,
      year: '2024',
      semester: 'spring',
      courseDetail: [{ day: '화', startTime: 120, endTime: 250, classroom: '대모산', period: '2' }],
    },
  ]

  const lecGrid: Array<CourseDetail>[] = Array(40)
  for (let i = 0; i < 40; i++) {
    lecGrid[i] = []
  }

  // 각 Cell에 들어갈 강의 데이터 편집해주는 로직
  data.map(lecture => {
    lecture.courseDetail.map(classInfo => {
      const ind = 5 * (Math.ceil((classInfo.startTime + 1) / 60) - 1) + dayMap[classInfo.day]
      lecGrid[ind - 1].push(classInfo)
    })
  })

  return (
    <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' })}>
      {lecGrid.map((lectures, ind) => {
        return (
          <div key={ind} className={TimeCell({ end: ind === 39 ? 'rightEnd' : undefined, lectureGrid: true })}>
            {lectures.map(lecture => {
              return (
                <LectureSticker
                  key={(ind + 1) * 100} // 임시값
                  name={'개구리의 먹이사슬'}
                  time={lecture.endTime - lecture.startTime}
                  professor="박정우"
                  room="대모산"
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
