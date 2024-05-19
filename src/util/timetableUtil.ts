import { CourseType, DayType, Semester, TimetableInfo } from '@/types/timetable'

export const dayMap: { [key in DayType]: number } = { 월: 1, 화: 2, 수: 3, 목: 4, 금: 5 }

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

export const timetablePreprocess = (data: TimetableInfo[]) => {
  // 시간표 리스트를 받으면
  // 각 학기의 배열로 되어 있는 리스트로 변환
  const ret: Semester[] = []

  data.map(timetable => {
    let findInRef = false
    for (let i = 0; i < ret.length; i++) {
      const { year, semester, timetables } = ret[i]
      if (timetable.year === year && timetable.semester == semester) {
        timetables.push(timetable)
        findInRef = true
        break
      }
    }
    if (!findInRef) {
      ret.push({ year: timetable.year, semester: timetable.semester, timetables: [timetable] })
    }
  })
  return ret
}
