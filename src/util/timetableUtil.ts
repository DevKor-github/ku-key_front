import { CourseType, DayType, Semester, TimetableInfo } from '@/types/timetable'

export const dayMap: { [key in DayType]: number } = { 월: 1, 화: 2, 수: 3, 목: 4, 금: 5 }

const semesterMap = ['', 'Spring', 'Summer', 'Fall', 'Winter']

export const timetablePreprocess = (data: TimetableInfo[]) => {
  // 시간표 리스트를 받으면
  // 각 학기의 배열로 되어 있는 리스트로 변환

  // todo: hard coding 되어 있는 학기 리스트 자동화 매핑
  const supportedYear = ['2023', '2024']
  const ret: Semester[] = []

  supportedYear.map(year => {
    for (let i = 1; i <= 4; i++) {
      ret.push({ year, semester: semesterMap[i], timetables: [] })
    }
  })

  data.map(timetable => {
    for (let i = 0; i < ret.length; i++) {
      const { year, semester, timetables } = ret[i]
      if (timetable.year === year && timetable.semester == semester) {
        timetables.push(timetable)
        break
      }
    }
  })
  return ret
}

export const lectureDataPreprocess = (data: CourseType[]) => {
  const lecGrid: Array<CourseType>[] = Array(40)
  for (let i = 0; i < 40; i++) {
    lecGrid[i] = []
  }

  // 강의 데이터 Cell에 임베딩
  data.map(lecture => {
    const ind = 5 * (Math.ceil((lecture.startTime + 1) / 60) - 1) + dayMap[lecture.day]
    lecGrid[ind - 1].push(lecture)
  })

  return lecGrid
}
