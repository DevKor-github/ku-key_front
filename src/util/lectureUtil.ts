import { CourseType, DayType } from '@/types/timetable'

export const dayMap: { [key in DayType]: number } = { 월: 1, 화: 2, 수: 3, 목: 4, 금: 5 }

export const dataPreprocess = (data: CourseType[]) => {
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
