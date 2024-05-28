import { TimetableInfo } from '@/api/types/timetable'
import { CourseType, DayType, Semester } from '@/types/timetable'

const dayMap: { [key in DayType]: number } = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

export const semesterMap = ['', 'Spring', 'Summer', 'Fall', 'Winter']

export const getDuration = (timeA: string, timeB: string) => {
  // HH:MM:SS 형태의 문자열 두개 받아, 차이를 분으로 반환
  const dateA = new Date(`2024/05/27 ${timeA}`)
  const dateB = new Date(`2024/05/27 ${timeB}`)
  const diffMSec = dateA.getTime() - dateB.getTime()
  const diffMin = diffMSec / (60 * 1000)
  return diffMin
}

export const timetablePreprocess = (data: TimetableInfo[] | undefined) => {
  // 시간표 리스트를 받으면
  // 각 학기의 배열로 되어 있는 리스트로 변환
  // todo: 전반적인 리펙토링

  if (data === undefined) data = []

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

const getStartCell = (startTime: string) => {
  return Number(startTime.slice(0, 2)) - 9
}

export const lectureDataPreprocess = (data: CourseType[], weekCnt: number, timeCnt: number) => {
  const cellCnt = timeCnt * weekCnt
  const lecGrid: Array<CourseType>[] = Array(cellCnt)
  for (let i = 0; i < cellCnt; i++) {
    lecGrid[i] = []
  }

  // 강의 데이터 Cell에 임베딩
  data.map(lecture => {
    const ind = weekCnt * getStartCell(lecture.startTime) + dayMap[lecture.day]
    lecGrid[ind - 1].push(lecture)
  })

  return lecGrid
}

export const getWeeknTimeList = (data: CourseType[]) => {
  let lastTime = 16
  let haveSat = false

  data.map(lec => {
    lastTime = Math.max(lastTime, Number(lec.endTime.slice(0, 2)))
    if (lec.day === 'Sat') {
      haveSat = true
    }
  })

  const time = ['']
  const week = ['MON', 'TUS', 'WEN', 'THR', 'FRI']

  if (haveSat) {
    week.push('SAT')
  }

  for (let i = 9; i <= lastTime; i++) {
    time.push(`${i}:00`)
  }

  return { time, week }
}
